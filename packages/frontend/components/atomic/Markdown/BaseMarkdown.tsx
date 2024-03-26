import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useIsMounted } from "@wdp/lib/hooks";

export default function BaseMarkdown({ children, ...props }: Props) {
  const rehypePlugins = [rehypeRaw];

  const isMounted = useIsMounted();

  return children ? (
    isMounted ? (
      <ReactMarkdown rehypePlugins={rehypePlugins} {...props}>
        {children}
      </ReactMarkdown>
    ) : (
      children
    )
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
