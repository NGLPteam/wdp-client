import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { boxShadow, transition } from "theme/base/variables";
import { aFocusReset, tLineClamp } from "theme/mixins";

export const LinkWrapper = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: ${boxShadow.popUp};
  transition: ${transition.boxShadow};

  ${aFocusReset}

  &:hover {
    box-shadow:
      ${boxShadow.popUp},
      0px 0px 0px 1px var(--border-color-focus);
  }

  &[data-focus-visible-added] {
    box-shadow:
      0px 0px 0px 1px var(--border-color-focus),
      ${boxShadow.focusGlow};
  }

  --padding-inline: ${pxToRem(36)};
`;

export const ImageWrapper = styled.figure<{ $withPadding?: true }>`
  height: 180px;
  position: relative;

  ${({ $withPadding }) =>
    $withPadding &&
    `
    padding-block-start: ${pxToRem(40)};
    padding-block-end: ${pxToRem(40)};
    padding-inline-start: var(--padding-inline);
    padding-inline-end: var(--padding-inline);
    `}
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-block-start: ${pxToRem(30)};
  padding-block-end: ${pxToRem(36)};
  padding-inline-start: var(--padding-inline);
  padding-inline-end: var(--padding-inline);
`;

export const Tagline = styled.em`
  padding-block-start: var(--padding-xxs);
  padding-block-end: var(--padding-xxs);
`;

export const Summary = styled.div`
  margin-block-start: var(--padding-sm);
  ${tLineClamp(3)}
`;

export const CountList = styled.ul`
  margin-block-start: auto;
`;

export const CountItem = styled.li`
  display: flex;
  align-items: bottom;
  justify-content: space-between;
  margin-block-start: var(--padding-lg);
  text-transform: capitalize;

  & + & {
    margin-block-start: ${pxToRem(9)};
    border-top: 1px solid var(--border-color);
    padding-block-start: ${pxToRem(6)};
  }
`;
