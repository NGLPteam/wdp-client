import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import BaseContainer from "@/components/layout/Container";

export const Container = styled(BaseContainer)<{ $gap?: number }>`
  padding-block: var(--container-padding-xl);

  > * + * {
    margin-block-start: ${({ $gap }) => pxToRem($gap ?? 50)};
  }
`;

export const HeroImage = styled.div`
  min-block-size: 300px;
  background: var(--color-base-blueDark);
`;
