import styled, { css } from "styled-components";
import { noFlexGapSupport } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";
import ContentHeader from "./ContentHeader";
type Props = React.ComponentProps<typeof ContentHeader>;

export const Wrapper = styled.div<Pick<Props, "headerStyle">>`
  border-bottom: 2px solid var(--accent-color);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  gap: ${pxToRem(5)};
  margin-block-end: 20px;

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

export const Title = styled.h1``;

export const RightSide = styled.div``;
