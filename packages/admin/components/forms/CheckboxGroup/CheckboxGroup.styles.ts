import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const CheckboxesWrapper = styled.div`
  margin-top: ${pxToRem(8)};

  > * + * {
    margin-top: ${pxToRem(16)};
  }
`;
