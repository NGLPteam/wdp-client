import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { fluidScale, lGrid, respond } from "theme/mixins";

export const Columns = styled.div`
  ${lGrid({
    rowGap: "var(--padding-xl)",
  })}
  padding-block-end: var(--container-padding-md);
  padding-block-start: ${fluidScale("46px", "40px")};
  border-top: 1px solid;
`;

export const Left = styled.div`
  grid-column: 1 / 9;
  display: flex;

  ${respond(`grid-column: 1 / -1;`, 100)}
`;

export const Thumbnail = styled.div`
  margin-inline-end: ${pxToRem(38)};
  flex: 1 0 ${fluidScale("225px", "180px")};

  ${respond(
    `
    margin-block-end: ${pxToRem(42)};
    flex: 1 1 100%;
  `,
    50,
  )};
`;

export const Right = styled.div`
  grid-column: 9 / -1;

  ${respond(
    `
    grid-column: 1 / -1;
    padding-block-start: var(--padding-rg);
    border-top: 1px solid var(--border-color);
  `,
    100,
  )}
`;

export const Sidebar = styled.ul`
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

export const SubheaderText = styled.h2`
  padding-inline-end: var(--padding-md);
  margin-block-end: 1.5rem;

  > * + * {
    margin-inline-start: 0.75rem;
  }

  ${respond(`display: inline-block;`, 70, "min")}
`;

export const SubheaderAside = styled.span`
  color: var(--color-base-neutral70);
`;

export const Metadata = styled.span`
  display: block;
  color: var(--color-base-neutral70);
  margin-block-end: 0.325rem;
`;

export const Summary = styled.p`
  margin-block-end: 1.5rem;
`;

export const CtaButton = styled.div``;

export const Contributors = styled.div`
  margin-block-end: 0.325rem;
`;
