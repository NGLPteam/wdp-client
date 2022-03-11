import * as React from "react";
import Markdown from "../BaseMarkdown";

type MarkdownProps = React.ComponentProps<typeof Markdown>;

/**
 * Transforms title content (children) from markdown into html
 * Any allowed html elements in the title (&amp;) is rendered
 */
export default function TitleMarkdown({ children, ...props }: MarkdownProps) {
  return (
    <Markdown
      allowedElements={["p", "span", "strong", "em"]}
      components={{ p: "span" }}
      {...props}
    >
      {children}
    </Markdown>
  );
}
