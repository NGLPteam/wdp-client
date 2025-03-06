import { LoadingSkeleton, Markdown } from "components/atomic";
import * as Styled from "./ContentHeader.styles";

/**
 * Wrapper for content title and right side content
 */
const ContentHeader = ({
  title,
  rightSide,
  headerStyle = "primary",
}: Props) => {
  return (
    <Styled.Wrapper>
      {title ? (
        <Styled.Title as={headerStyle === "primary" ? "h1" : "h2"}>
          <Markdown.Title>{title}</Markdown.Title>
        </Styled.Title>
      ) : (
        <div style={{ height: "36px", width: "400px" }}>
          <LoadingSkeleton />
        </div>
      )}
      {rightSide && <Styled.RightSide>{rightSide}</Styled.RightSide>}
    </Styled.Wrapper>
  );
};

interface Props {
  /** Content title */
  title?: string | null;
  /** Header style, default "primary" (h1) */
  headerStyle?: "primary" | "secondary";
  /** Optional right side content node. Can be a single button, multiple buttons, dropdown, etc. */
  rightSide?: React.ReactNode;
}

export default ContentHeader;
