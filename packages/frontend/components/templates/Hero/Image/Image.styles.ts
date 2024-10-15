import styled, { css } from "styled-components";
import BaseImage from "next/legacy/image";
import { respond } from "theme/mixins";
import type { HeroImageLayout } from "@/types/graphql-schema";

export const Wrapper = styled.div`
  position: relative;
  height: 300px;
`;

export const GridWrapper = styled.div<{ $layout?: HeroImageLayout }>`
  position: relative;
  grid-column: 2;
  grid-row: 1;

  ${({ $layout }) =>
    $layout === "ONE_COLUMN"
      ? `grid-column: 1 / -1;`
      : respond(
          css`
            grid-column: 1 / -1;
            grid-row: 2;
            min-block-size: 300px;
          `,
          60,
        )}
`;

export const Image = styled(BaseImage)<{ $layout?: HeroImageLayout }>`
  opacity: ${({ $layout }) => ($layout === "ONE_COLUMN" ? `0.3` : `1`)};
`;
