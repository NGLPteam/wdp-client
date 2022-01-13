import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Header = styled.header`
  padding-block-start: ${pxToRem(80)};
  padding-block-end: ${pxToRem(56)};

  > * + * {
    padding-block-start: ${pxToRem(48)};
  }
`;

export const PageCountBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  padding-block-start: ${pxToRem(56)};
  padding-block-end: ${pxToRem(120)};
`;

export const Item = styled.li`
  padding-block-start: ${pxToRem(28)};
  padding-block-end: ${pxToRem(30)};
  margin-block-end: 3px;

  & + & {
    border-top: 1px solid var(--color-base-neutral40);
  }
`;
