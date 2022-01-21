import * as React from "react";
import ReactMarkdown from "react-markdown";

type BaseProps = React.ComponentProps<typeof ReactMarkdown>;

export default function SummaryMarkdown({ children, ...props }: BaseProps) {
  return (
    <ReactMarkdown
      components={{
        h1: "span",
        h2: "span",
        h3: "span",
        h4: "span",
        h5: "span",
        p: "span",
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
}
