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
        h1: (props) => <h2 className="t-h3">{props.children}</h2>,
        h2: (props) => <h2 className="t-h3">{props.children}</h2>,
        h3: (props) => <h3 className="t-h4">{props.children}</h3>,
        h4: (props) => <h4 className="t-h5">{props.children}</h4>,
        h5: (props) => <h5 className="t-h6">{props.children}</h5>,
      }}
      skipMountCheck
      {...props}
    >
      {children}
    </Markdown>
  );
}
