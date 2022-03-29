import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Header = styled.header`
  padding-block-start: var(--container-padding-lg);
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

export const ListItems = styled.div`
  > * {
    margin-block-start: ${pxToRem(20)};
  }
`;

export const Footer = styled.div`
  padding-block-start: ${pxToRem(56)};
  padding-block-end: ${pxToRem(120)};
`;
