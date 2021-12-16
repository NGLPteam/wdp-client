import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { globalNavRespond, aBgCustom10, aBgCustom20 } from "theme/mixins";

export const Header = styled.header`
  ${aBgCustom20()}
  padding-block-start: ${pxToRem(14)};
  padding-block-end: ${pxToRem(14)};
  min-height: ${pxToRem(60)};

  ${globalNavRespond(
    `
    ${aBgCustom10()}

    padding-block-start: ${pxToRem(34)};
    padding-block-end: ${pxToRem(34)};
    min-height: ${pxToRem(100)}
    `
  )}
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${globalNavRespond(
    `
    && {
      padding-inline-start: ${pxToRem(20)};
      padding-inline-end: var(--padding-md);
    }
    `
  )}
`;

export const LeftSide = styled.div`
  ${globalNavRespond(`display: none`)}
`;

export const MobileLeft = styled.div`
  --button-secondary-bg-color: var(--color-custom20);

  ${globalNavRespond(`display: none`, "min")}
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  ${globalNavRespond(`display: none`)}

  > * + * {
    margin-inline-start: ${pxToRem(28)};
  }
`;

export const MobileRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  ${globalNavRespond(`display: none`, "min")}
`;
