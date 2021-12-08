import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid var(--accent-lighter);
  border-radius: 50%;
  background: var(--accent-color);
  overflow: hidden;
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};
`;
