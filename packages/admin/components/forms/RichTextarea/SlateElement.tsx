import type { RenderElementProps } from "slate-react";
/**
 * Render the element in the editor.
 * To add new types, edit ElementType in types.d.ts
 */
export default function SlateElement({
  attributes,
  children,
  element,
}: RenderElementProps) {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "ul-list":
      return <ul {...attributes}>{children}</ul>;
    case "ol-list":
      return <ol {...attributes}>{children}</ol>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    default:
      return <p {...attributes}>{children}</p>;
  }
}
