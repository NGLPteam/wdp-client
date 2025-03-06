import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useIsMounted } from "@wdp/lib/hooks";
import { ErrorBoundary } from "react-error-boundary";
import { MessageBlock } from "components/atomic";

export default function BaseMarkdown({
  children,
  skipMountCheck = false,
  ...props
}: Props) {
  const rehypePlugins = [rehypeRaw];

  const isMounted = useIsMounted();

  return children && (isMounted || skipMountCheck) ? (
    <ErrorBoundary
      fallbackRender={() => <MessageBlock name="Invalid markdown content" />}
    >
      <ReactMarkdown rehypePlugins={rehypePlugins} {...props}>
        {children}
      </ReactMarkdown>
    </ErrorBoundary>
  ) : null;
}

type MarkdownProps = Pick<
  React.ComponentProps<typeof ReactMarkdown>,
  "allowedElements" | "components" | "disallowedElements"
>;

interface Props extends MarkdownProps {
  className?: string;
  children?: string | null;
  skipMountCheck?: boolean;
}
