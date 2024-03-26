import * as React from "react";
import Markdown from "../BaseMarkdown";

type MarkdownProps = React.ComponentProps<typeof Markdown> & {
  className?: string;
};

export default function PageMarkdown({
  children,
  className,
  ...props
}: MarkdownProps) {
  return (
    <Markdown
      className={`t-rte ${className || ""}`}
      components={{
        h1: "h3",
        h2: "h3",
      }}
      skipMountCheck
      {...props}
    >
      {children}
    </Markdown>
  );
}
