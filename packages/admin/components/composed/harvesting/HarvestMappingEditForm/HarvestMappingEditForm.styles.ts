import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const ScheduleGroup = styled.div`
  display: flex;
  column-gap: ${pxToRem(50)};
  row-gap: var(--fieldset-field-spacing);
  flex-wrap: wrap;

  span {
    display: block;
  }
`;
