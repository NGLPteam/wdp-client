import styled, { css } from "styled-components";
import ContentHeader from "./ContentHeader";
import { noFlexGapSupport, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";
import { tLineClamp } from "theme/mixins/typography";
type Props = React.ComponentProps<typeof ContentHeader>;

const HEADER_WRAP_BREAK = 60;

export const Wrapper = styled.div<Pick<Props, "headerStyle">>`
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

  ${({ headerStyle = "primary" }) =>
    headerStyle === "primary" &&
    css`
      padding-block-end: ${pxToRem(headerStyle === "primary" ? 5 : 2)};
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
