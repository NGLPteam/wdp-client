import * as React from "react";
import Markdown from "../BaseMarkdown";
import { Components } from "react-markdown";

type MarkdownProps = React.ComponentProps<typeof Markdown>;

/**
 * The Markdown component confuses any title beginning with #. as an ordered list.
 */
const FakeList = ({
  children,
  start,
}: {
  children: React.ReactNode;
  start?: number;
}) => {
  return (
    <>
      {start && `${start}. `}
      {children}
    </>
  );
};

/**
 * Transforms title content (children) from markdown into html.
 * Any markdown or html elements in the title (&amp;) are rendered.
 */
export default function TitleMarkdown({ children, ...props }: MarkdownProps) {
  return (
    <Markdown
      components={{
        p: "span",
        li: "span",
        ol: FakeList as unknown as keyof Components,
        ul: "span",
      }}
      {...props}
    >
      {children}
    </Markdown>
  );
}
