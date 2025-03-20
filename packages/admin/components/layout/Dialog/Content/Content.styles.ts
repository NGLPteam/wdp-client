import styled from "styled-components";

export const Dialog = styled.dialog`
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
    background-color: oklch(90% 0 302.97 / 75.86%);
  }
`;

export const Pane = styled.div`
  background: var(--neutral05);
  max-block-size: 100%;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin: auto;
`;

export const ChildrenWrapper = styled.div`
  padding-inline: min(2.5rem, 5%);
  padding-block-start: 0.5rem;
  padding-block-end: 1rem;

  @media all and (max-width: 500px) {
    padding-inline: 0.5rem;
  }

  > * + * {
    margin-block-start: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: var(--color-brand100);

  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    > svg {
      margin-block-start: -2px;
    }
  }
`;
