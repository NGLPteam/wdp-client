import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const BackNav = styled.nav`
  padding-block-start: var(--container-padding-md);
`;

export const NameHeader = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    padding-inline-start: var(--padding-rg);
  }
`;

export const ContributorWrapper = styled.div`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-md);

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

export const ContributionsWrapper = styled.div`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-xxl);
`;

export const ContributionsHeader = styled.h3`
  margin-block-end: var(--padding-xl);
`;

export const ContributionList = styled.ul`
  max-width: ${pxToRem(768)};

  > * + * {
    margin-block-start: var(--padding-xl);
  }
`;

export const ContributionItem = styled.li``;
