import { CoverImage as BaseCoverImage } from "components/atomic";
import styled from "styled-components";

export const CoverImage = styled(BaseCoverImage)`
  object-position: bottom left;

  table & {
    object-position: top right;
  }
`;
