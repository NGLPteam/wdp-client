import * as React from "react";
import { Components } from "react-markdown";
import Markdown from "../BaseMarkdown";

type MarkdownProps = React.ComponentProps<typeof Markdown> & {
  className?: string;
};

const Header = (({ children, ...props }: { children: React.ReactNode }) => (
  <p style={{ fontWeight: "500" }} {...props}>
    {children}
  </p>
)) as unknown as keyof Components;

export default function SummaryMarkdown({
  children,
  className,
  ...props
}: MarkdownProps) {
  return (
    <Markdown
      className={`t-rte ${className || ""}`}
      components={{
        h1: Header,
        h2: Header,
        h3: Header,
        h4: Header,
        h5: Header,
        h6: Header,
      }}
      {...props}
    >
      {children}
    </Markdown>
  );
}
