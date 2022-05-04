import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function BaseMarkdown({ children, ...props }: Props) {
  const rehypePlugins = [rehypeRaw];

  return children ? (
    <ReactMarkdown rehypePlugins={rehypePlugins} {...props}>
      {children}
    </ReactMarkdown>
  ) : null;
}

type MarkdownProps = Pick<
  React.ComponentProps<typeof ReactMarkdown>,
  "allowedElements" | "components" | "disallowedElements"
>;

interface Props extends MarkdownProps {
  className?: string;
  children?: string | null;
}
