import styled, { keyframes } from "styled-components";
import { pxToRem } from "theme/mixins/functions";

const fadeIn = keyframes`
  0% {
    transform: scale(.9); 
    opacity:0;
  }
  100% {
    transform: scale(1); 
    opacity:1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: scale(1); 
    opacity: 1;
  }

  100% {
    transform: scale(.9); 
    opacity: 0;
  }
`;

export const BaseToast = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${pxToRem(6)};
  background: var(--brand90);
  padding-inline-start: ${pxToRem(20)};
  padding-inline-end: ${pxToRem(24)};
  padding-block-start: ${pxToRem(16)};
  padding-block-end: ${pxToRem(16)};
  font-weight: var(--font-weight-medium);
  color: var(--neutral00);
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);

  &[data-visible="true"] {
    animation: ${fadeIn} 350ms cubic-bezier(0.83, 0, 0.17, 1) forwards;
  }

  &[data-visible="false"] {
    animation: ${fadeOut} 350ms cubic-bezier(0.83, 0, 0.17, 1) forwards;
  }

  &[data-type="success"] {
    background-color: var(--greendark);
  }

  &[data-type="error"] {
    background-color: var(--reddark);
  }

  > * + * {
    padding-inline-start: ${pxToRem(12)};
  }
`;
