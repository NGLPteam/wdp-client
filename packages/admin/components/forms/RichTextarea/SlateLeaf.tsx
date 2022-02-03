import type { RenderLeafProps } from "slate-react";

/**
 * Render the text leaf in the editor.
 * To add new formats, edit TextFormat in types.d.ts
 */
export default function SlateLeaf({
  attributes,
  children,
  leaf,
}: RenderLeafProps) {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  return <span {...attributes}>{children}</span>;
}
