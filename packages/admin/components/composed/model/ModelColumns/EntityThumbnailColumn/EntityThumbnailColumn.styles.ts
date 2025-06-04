import { Image } from "components/atomic";
import styled from "styled-components";

export const Thumbnail = styled(Image)`
  object-position: bottom left;
  max-width: 50px;
  min-height: 50px;
  max-height: 70px;
  margin-block-end: 8px;

  table & {
    object-position: top right;
    margin-block-end: 0;
  }

  [data-mobile-layout="true"] & {
    object-position: top left;
  }
`;
