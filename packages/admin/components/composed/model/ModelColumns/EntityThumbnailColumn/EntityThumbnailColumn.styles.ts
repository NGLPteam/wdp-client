import { Image } from "components/atomic";
import styled from "styled-components";

export const Thumbnail = styled(Image)`
  object-position: bottom left;

  table & {
    object-position: top right;
    min-height: 50px;
    max-width: 50px;
    max-height: 70px;
  }

  [data-mobile-layout="true"] & {
    object-position: top left;
  }
`;
