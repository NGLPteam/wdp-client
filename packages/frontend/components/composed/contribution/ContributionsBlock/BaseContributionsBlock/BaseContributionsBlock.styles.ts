import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { lGrid } from "theme/mixins";

export const SectionInner = styled.div<{ $paddingBottom?: string }>`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(
    --container-padding-${({ $paddingBottom = "md" }) => $paddingBottom}
  );
`;

export const List = styled.ul`
  ${lGrid()}
  row-gap: ${pxToRem(30)};
  padding-block-start: var(--padding-xl);
`;
