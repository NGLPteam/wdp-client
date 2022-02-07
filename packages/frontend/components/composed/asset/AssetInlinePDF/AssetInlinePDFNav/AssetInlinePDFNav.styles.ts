import styled from "styled-components";
import { respond, tCopySmall } from "theme/mixins";

export const OutlineWrapper = styled.div`
  max-height: 100vh;
  position: sticky;
  top: 0;
  flex: 1 0 20vw;
  max-width: calc(100px + var(--padding-md));

  ${respond(`display: none;`, 50)}
`;

export const OutlineInner = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-inline-end: var(--padding-md);
  margin-inline-end: var(--padding-sm);
`;

export const OutlineLink = styled.a`
  display: block;
  margin-bottom: var(--padding-rg);
  text-align: center;
  color: var(--color-lighter);
  ${tCopySmall}

  canvas {
    border: 1px solid var(--border-color);
    width: 100% !important;
    height: auto !important;
  }
`;
