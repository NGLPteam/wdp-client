import React, { ReactNode } from "react";
import startCase from "lodash/startCase";
import * as Styled from "./ContentHeader.styles";

/**
 * Wrapper for content title and right side content
 */
const ContentHeader = ({
  title = "\u00a0",
  rightSide,
  headerStyle = "primary",
}: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Title as={headerStyle === "primary" ? "h1" : "h2"}>
        {typeof title === "string" ? startCase(title) : title}
      </Styled.Title>
      {rightSide && <Styled.RightSide>{rightSide}</Styled.RightSide>}
    </Styled.Wrapper>
  );
};

interface Props {
  /** Content title, can be a string or node */
  title: string | React.ReactNode;
  /** Header style, default "primary" (h1) */
  headerStyle?: "primary" | "secondary";
  /** Optional right side content node. Can be a single button, multiple buttons, dropdown, etc. */
  rightSide?: ReactNode;
}

export default ContentHeader;
