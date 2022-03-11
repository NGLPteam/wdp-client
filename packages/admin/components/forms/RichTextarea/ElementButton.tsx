import { Editor, Transforms, Element } from "slate";
import { useSlate } from "slate-react";
import type { ReactEditor } from "slate-react";
import type { NodeType } from "./types";
import { IconFactory } from "components/factories";
import { ButtonControl } from "components/atomic";

export const LIST_TYPES = ["ul-list", "ol-list"];

type IconProps = React.ComponentProps<typeof IconFactory>;

export default function ElementButton({ format, icon }: Props) {
  const editor = useSlate();
  return (
    <ButtonControl
      data-active={isBlockActive(editor, format)}
      type="button"
      icon={icon}
      onClick={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    />
  );
}

interface Props {
  format: NodeType;
  icon: IconProps["icon"];
}

const toggleBlock = (editor: ReactEditor, format: NodeType) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  });
  const newProperties: Partial<Element> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes<Element>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const isBlockActive = (editor: ReactEditor, format: NodeType) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    })
  );

  return !!match;
};
