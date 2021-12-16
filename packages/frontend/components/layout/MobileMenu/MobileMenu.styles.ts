import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(100)};
`;

export const Header = styled.div``;

export const Content = styled.div``;

export const Inner = styled.div``;

export const Footer = styled.footer`
  padding-block-start: ${pxToRem(30)};
  padding-block-end: ${pxToRem(33)};
`;
