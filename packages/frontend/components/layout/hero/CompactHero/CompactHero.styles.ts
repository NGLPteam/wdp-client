import { pxToRem } from "@wdp/lib/theme/functions";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $style: "primary" | "secondary" }>`
  padding-block-start: var(--CompactHero-pad-top);

  ${({ $style }) =>
    $style === "secondary"
      ? css`
          --CompactHero-pad-top: var(--padding-xs);
          --CompactHero-subtitle-pad-top: ${pxToRem(12)};
          --CompactHero-title-pad-bottom: ${pxToRem(12)};
          --CompactHero-subtitle-pad-bottom: ${pxToRem(12)};
          --CompactHero-subtitle-border-top: 1px solid
            var(--color-base-neutral70);
        `
      : css`
          --CompactHero-pad-top: var(--container-padding-sm);
          --CompactHero-title-pad-bottom: var(--padding-rg);
          --CompactHero-subtitle-pad-bottom: var(--padding-rg);
          --CompactHero-subtitle-border-bottom: 1px solid
            var(--color-base-neutral70);
        `}
`;

export const Title = styled.h2`
  padding-block-end: var(--CompactHero-title-pad-bottom);
`;

export const Subtitle = styled.div`
  border-top: var(--CompactHero-subtitle-border-top);
  border-bottom: var(--CompactHero-subtitle-border-bottom);
  padding-block-start: var(--CompactHero-subtitle-pad-top);
  padding-block-end: var(--CompactHero-subtitle-pad-bottom);
`;
