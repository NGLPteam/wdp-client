import { keyframes } from "styled-components";

export const slideDrawerIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
export const slideDrawerOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
