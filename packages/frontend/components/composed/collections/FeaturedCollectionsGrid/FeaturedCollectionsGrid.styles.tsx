import styled from "styled-components";
// eslint-disable-next-line import/no-named-default
import { default as BaseImage } from "next/legacy/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aBgNeutral00, aFocus, fluidScale, respond } from "theme/mixins";
import { NamedLink as BaseNamedLink } from "components/atomic/links";
import { transition } from "theme/base/variables";

export const Section = styled.section`
  .a-bg-custom10 + & {
    ${aBgNeutral00}
  }
`;

export const SectionInner = styled.div`
  padding-block-start: ${fluidScale("100px", "60px")};
  padding-block-end: ${fluidScale("120px", "80px")};
`;

export const Header = styled.h3`
  margin-block-end: ${pxToRem(36)};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${fluidScale("30px", "10px")};

  ${respond(
    `
        grid-template-columns: auto;
        gap: ${pxToRem(30)};
    `,
    50
  )}
`;

export const Item = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: ${pxToRem(16)};
  padding: ${pxToRem(20)};
  background: var(--color-base-neutral90);
  transition: ${transition.background};

  &:hover,
  &:focus-within {
    background: var(--color-base-neutral80);
  }
`;

export const Image = styled(BaseImage)`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

export const NamedLink = styled(BaseNamedLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-base-neutral00);
  padding-inline-start: ${pxToRem(20)};
  padding-inline-end: ${pxToRem(20)};
  text-align: center;

  ${aFocus()}

  > span {
    position: relative;
    z-index: 1;
  }

  &:after {
    display: block;
    content: "";
    padding-top: ${(267 / 336) * 100}%;

    ${respond(`padding-top: ${(220 / 315) * 100}%;`, 50)}
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: ${pxToRem(50)};
`;
