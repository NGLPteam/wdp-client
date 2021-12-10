import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { aFocusReset, tLineClamp } from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;

  > * + * {
    padding-inline-start: ${pxToRem(28)};
  }
`;

export const ImageLink = styled.a`
  display: inline-block;
  flex: none;
  height: auto;
  ${aFocusReset}
`;

export const TextBlock = styled.div`
  > * + * {
    margin-block-start: 12px;
  }
`;

export const InfoBlock = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(2)};
  }
`;

export const MetadataList = styled.ul`
  display: flex;

  > * + * {
    &::before {
      content: "•";
      padding-inline-start: var(--padding-xs);
      padding-inline-end: var(--padding-xs);
    }
  }
`;

export const Caption = styled.p`
  ${tLineClamp(2)}
`;
