import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type MarkdownProps = React.ComponentProps<typeof ReactMarkdown>;

export default function BaseMarkdown({ children, ...props }: Props) {
  const rehypePlugins = [rehypeRaw];

  return children ? (
    <ReactMarkdown rehypePlugins={rehypePlugins} {...props}>
      {children}
    </ReactMarkdown>
  ) : null;
}

interface Props {
  className?: string;
  children?: string | null;
  components?: MarkdownProps["components"];
  allowedElements?: MarkdownProps["allowedElements"];
  disallowedElements?: MarkdownProps["disallowedElements"];
}
