import styled, { css } from "styled-components";
import { noFlexGapSupport, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";
import { tLineClamp, tLabel } from "theme/mixins/typography";
import ContentHeader from "./ContentHeader";
type Props = React.ComponentProps<typeof ContentHeader>;

const HEADER_WRAP_BREAK = 60;

export const Wrapper = styled.div<{ $headerStyle?: Props["headerStyle"] }>`
  border-bottom: 2px solid var(--accent-color);
  display: flex;
  justify-content: space-between;
  margin-block-end: 20px;
  gap: ${pxToRem(6)};

  ${respond(`flex-wrap: wrap;`, HEADER_WRAP_BREAK)}

  ${respond(`flex-wrap: nowrap;`, 30)}

  form + & {
    padding-block-start: ${pxToRem(40)};
  }

  ${({ $headerStyle = "primary" }) =>
    $headerStyle === "primary" &&
    css`
      padding-block-end: ${pxToRem($headerStyle === "primary" ? 5 : 2)};
    `}

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: ${pxToRem(5)};
    }
  `)}
`;

export const Title = styled.h1`
  align-self: flex-end;
  ${respond(tLineClamp(2), HEADER_WRAP_BREAK, "min")}
`;

export const RightSide = styled.div`
  margin-inline-start: auto;
  align-self: flex-end;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap-reverse;
`;

export const PurgeTag = styled.div`
  height: ${pxToRem(32)};
  display: inline-block;
  border: 1px solid transparent;
  border-radius: ${pxToRem(4)};
  background-color: var(--reddark);
  padding: ${pxToRem(5)} ${pxToRem(8)};
  ${tLabel("sm")}
  color: var(--neutral00);
  align-self: baseline;
`;
