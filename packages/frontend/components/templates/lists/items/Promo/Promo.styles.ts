import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aFocus } from "theme/mixins";
import { transition } from "theme/base/variables";
import { default as BaseImage } from "next/legacy/image";

export const Item = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: ${pxToRem(16)};
  padding: ${pxToRem(20)};
  background: var(--color-base-neutral90);
  color: var(--color-base-neutral00);
  transition: ${transition.background};
  min-block-size: ${pxToRem(250)};

  &:hover,
  &:focus-within {
    background: var(--color-base-neutral80);
  }

  .a-bg-neutral90 & {
    background: var(--color-base-neutral80);

    &:hover,
    &:focus-within {
      background: var(--color-base-neutral20);
      color: var(--color-base-neutral90);
    }
  }
`;

export const Image = styled(BaseImage)`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline-start: ${pxToRem(20)};
  padding-inline-end: ${pxToRem(20)};
  text-align: center;
  block-size: 100%;
  font-size: var(--font-size-base-sm);

  ${aFocus()}

  > span {
    position: relative;
    z-index: 1;
  }
`;

export const Header = styled.h3`
  margin-block: 0.75rem;
`;

export const Group = styled.div`
  > span {
    display: block;
  }

  > * + * {
    margin-block-start: 0.25rem;
  }

  &:not(:first-child) {
    margin-block-start: 0.5rem;
  }
`;
