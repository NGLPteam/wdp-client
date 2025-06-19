import styled from "styled-components";
import { respond } from "theme/mixins/base";

export const Dialog = styled.dialog`
  position: fixed;
  opacity: 0;
  z-index: 50;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
  inline-size: 100vw;
  block-size: 100dvh;
  margin: 0 !important;
  transition-behavior: allow-discrete;
  background: transparent;
  border: none;

  &[open] {
    opacity: 1;
    transition: opacity 0.5s;
  }

  @starting-style {
    &[open] {
      opacity: 0;
    }
  }

  &::backdrop {
    background-color: var(--dialog-backdrop-background);
  }
`;

export const Pane = styled.div`
  background: var(--dialog-background-color, var(--neutral05));
  max-block-size: 100%;
  border-radius: 0.375rem;
  padding: 1.25rem;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin: auto;
  width: 100%;
`;

export const ChildrenWrapper = styled.div`
  padding-inline: var(--dialog-content-padding, min(2.5rem, 5%));
  padding-block-start: 0.5rem;
  padding-block-end: 1rem;

  ${respond(`padding-inline: var(--dialog-content-padding, 0.5rem;)`, 70)}

  > * + * {
    margin-block-start: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button.dialog-close {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    color: var(--color-light);

    > svg {
      margin-block-start: -2px;
    }

    &:hover,
    &:focus-visible {
      color: var(--brand100);
    }
  }
`;
