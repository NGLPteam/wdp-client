import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond } from "theme/mixins";

export const Nav = styled.div`
  padding-block-start: ${pxToRem(36)};
  padding-block-end: ${pxToRem(36)};
  min-height: ${pxToRem(104)};

  @media print {
    display: none;
  }
`;

export const NavInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  ${respond(`flex-direction: column;`, 60)}
`;

export const LeftSide = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  ${respond(`text-align: center;`, 60)}
`;

export const RightSide = styled.div`
  flex-basis: calc(33% - 0.5rem);
  flex-grow: 0;
  flex-shrink: 1;
  display: flex;
  margin-left: auto;

  ${respond(`flex-basis: 375px;`, 100)}
  ${respond(`flex-basis: 100%; margin-left: 0;`, 60)}

  @media print {
    display: none;
  }
`;
