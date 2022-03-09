import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { fluidScale, lGrid, respond } from "theme/mixins";

export const HeroInner = styled.div`
  ${lGrid({
    rowGap: "var(--padding-xl)",
  })}
  padding-block-end: var(--container-padding-md);
  padding-block-start: ${fluidScale("46px", "40px")};
`;

export const LeftSide = styled.div`
  grid-column: 1 / 9;
  display: flex;

  ${respond(`grid-column: 1 / -1;`, 100)}
  ${respond(`flex-wrap: wrap;`, 50)}
`;

export const Thumbnail = styled.div`
  margin-inline-end: ${pxToRem(38)};
  flex: 1 0 ${fluidScale("225px", "180px")};

  ${respond(
    `
    margin-block-end: ${pxToRem(42)};
    flex: 1 1 100%;
  `,
    50
  )};
`;

export const RightSide = styled.div`
  grid-column: 10 / -1;

  ${respond(
    `
    grid-column: 1 / -1;
    padding-block-start: var(--padding-rg);
    border-top: 1px solid var(--border-color);
  `,
    100
  )}

  > * + * {
    margin-block-start: var(--padding-rg);
  }
`;

export const Text = styled.div`
  width: 100%;

  > * + * {
    margin-block-start: var(--padding-md);
  }
`;

export const Title = styled.div`
  padding-inline-end: var(--padding-md);

  ${respond(`display: inline-block;`, 70, "min")}
`;

export const Description = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(24)};
  }
`;
