import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const BackNav = styled.nav`
  padding-block-start: var(--container-padding-lg);
`;

export const Section = styled.section`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);

  > * + * {
    margin-block-start: var(--padding-xl);
  }
`;

export const TextBlock = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(20)};
  }
`;

export const AssetInfo = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(4)};
  }
`;

export const ContributionsSection = styled.section`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-xlg);
  border-top: 1px solid var(--border-color);

  > * + * {
    margin-block-start: var(--padding-xl);
  }
`;

export const ContributionList = styled.ul`
  max-width: ${pxToRem(768)};

  > * + * {
    margin-block-start: var(--padding-xl);
  }
`;

export const ContributionItem = styled.li``;
