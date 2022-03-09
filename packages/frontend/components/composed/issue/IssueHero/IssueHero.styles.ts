import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond, tHeading } from "theme/mixins";

const VOLUME_BREAK = 70;

export const Volume = styled.span`
  ${tHeading(3)}
  color: var(--color-base-neutral70);
  padding-inline-start: ${pxToRem(24)};

  ${respond(`display: none`, VOLUME_BREAK)}
`;

export const VolumeMobile = styled.p`
  display: none;

  ${respond(`display: block;`, VOLUME_BREAK)}
`;

export const Summary = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(6)};
  }
`;
