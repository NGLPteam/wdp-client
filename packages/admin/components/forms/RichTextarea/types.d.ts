import type { BaseEditor, Descendant } from "slate";
import type { ReactEditor } from "slate-react";

/**
 * Element types
 */
type BulletedListElement = {
  type: "ul-list";
  children: Descendant[];
};

type NumberedListElement = {
  type: "ol-list";
  children: Descendant[];
};

type ParagraphElement = { type: "paragraph"; children: Descendant[] };

type ListItemElement = { type: "list-item"; children: Descendant[] };

type HeadingOneElement = { type: "heading-one"; children: Descendant[] };

type HeadingTwoElement = { type: "heading-two"; children: Descendant[] };

type HeadingThreeElement = { type: "heading-three"; children: Descendant[] };

type HeadingFourElement = { type: "heading-four"; children: Descendant[] };

type BlockQuoteElement = { type: "block-quote"; children: Descendant[] };

/** Custom element */
export type CustomElement =
  | BulletedListElement
  | NumberedListElement
  | ParagraphElement
  | ListItemElement
  | HeadingOneElement
  | HeadingTwoElement
  | HeadingThreeElement
  | HeadingFourElement
  | BlockQuoteElement;

type NodeType =
  | "paragraph"
  | "ul-list"
  | "ol-list"
  | "list-item"
  | "heading-one"
  | "heading-two"
  | "heading-three"
  | "heading-four";

/** Text leaf types */
type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

type TextFormat = "bold" | "italic";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
