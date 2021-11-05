import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity:0; }
  to { opacity:1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const fadeInScale = keyframes`
  from {
    transform: scale(.9); 
    opacity:0;
  }
  to {
    transform: scale(1); 
    opacity:1;
  }
`;

export const fadeOutScale = keyframes`
  from {
    transform: scale(1); 
    opacity: 1;
  }
  to {
    transform: scale(.9); 
    opacity: 0;
  }
`;

export const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const pulse = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: .8;
  }

  100% {
    opacity: 1;
  }
`;

export const slideDrawerIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
export const slideDrawerOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;
