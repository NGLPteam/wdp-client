import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: ${pxToRem(52)};
  grid-template-columns: repeat(auto-fill, minmax(474px, 1fr));
  grid-template-rows: repeat(2, auto);
  padding-block-start: ${pxToRem(80)};

  > *:first-child {
    grid-row: -1 / 1;
  }
`;
