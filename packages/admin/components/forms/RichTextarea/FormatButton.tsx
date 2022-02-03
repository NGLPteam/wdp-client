import { useSlate } from "slate-react";
import { Editor } from "slate";
import type { ReactEditor } from "slate-react";
import type { TextFormat } from "./types";
import { IconFactory } from "components/factories";
import { ButtonControl } from "components/atomic";

type IconProps = React.ComponentProps<typeof IconFactory>;

const isMarkActive = (editor: ReactEditor, format: TextFormat) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor: ReactEditor, format: TextFormat) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const ToolbarButton = ({ format, icon }: Props) => {
  const editor = useSlate();

  return (
    <ButtonControl
      data-active={isMarkActive(editor, format)}
      type="button"
      icon={icon}
      onClick={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    />
  );
};

export default ToolbarButton;

interface Props {
  format: TextFormat;
  icon: IconProps["icon"];
}
