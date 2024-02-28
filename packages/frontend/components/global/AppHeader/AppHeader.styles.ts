import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import {
  globalNavRespond,
  aBgCustom10,
  aBgCustom20,
  respond,
} from "theme/mixins";
import { SiteLogoMode } from "types/graphql-schema";

export const PrintHeader = styled.div`
  @media screen {
    display: none;
  }
`;

export const Header = styled.header`
  ${aBgCustom20()}
  padding-block-start: ${pxToRem(14)};
  padding-block-end: ${pxToRem(14)};
  min-height: ${pxToRem(60)};

  @media print {
    display: none;
  }

  ${globalNavRespond(
    `
    ${aBgCustom10()}

    padding-block-start: ${pxToRem(34)};
    padding-block-end: ${pxToRem(34)};
    min-height: ${pxToRem(100)}
    `,
  )}
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${globalNavRespond(
    `
    && {
      padding-inline-start: var(--container-v-padding-sm);
      padding-inline-end: var(--container-v-padding-sm);
    }
    `,
  )}
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  ${globalNavRespond(`--button-secondary-bg-color: var(--color-custom20);`)}
`;

export const InstallationNameWrapper = styled.span<{
  $logoMode?: SiteLogoMode;
}>`
  margin-inline-end: var(--grid-column-gap);
  margin-block-end: ${pxToRem(3)};

  ${({ $logoMode }) => {
    if ($logoMode === "WITH_TEXT") {
      return respond(
        `
        max-width: 33vw;
        margin-inline-end: var(--grid-column-gap-sm);
      `,
        80,
      );
    }
  }}

  ${respond(`display: none;`, 70)}
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

export const MobileList = styled.div`
  padding-block-start: ${pxToRem(30)};

  > * + * {
    margin-block-start: ${pxToRem(35)};
  }
`;
