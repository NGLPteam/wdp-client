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

// Text shadows and box shadows need to be slightly different
// for font style 3.
// const textShadow3 = `0.04em 0.08em var(--background-color),
// -0.04em 0.08em var(--background-color),
// -0.08em 0.04em var(--background-color),
// 0.08em 0.04em var(--background-color);`;

// const textShadow = `0.04em 0.1em var(--background-color),
// -0.04em 0.1em var(--background-color);`;

// const boxShadow3 = `inset 0 -0.07em 0 0 var(--background-color),
// inset 0 -0.14em 0 0 var(--color-light)`;

// const boxShadow = `0 0.07em 0 0 var(--color-light)`;

// export const underlineIn = (fontStyle?: string): Keyframes => {
//   return keyframes`
//     from {
//       box-shadow: none;
//       text-shadow: ${fontStyle === "style3" ? textShadow3 : textShadow};
//     }

//     to {
//       box-shadow: ${fontStyle === "style3" ? boxShadow3 : boxShadow};
//       text-shadow: ${fontStyle === "style3" ? textShadow3 : textShadow};
//     }
//   `;
// };

// export const underlineOut = (fontStyle?: string): Keyframes => {
//   return keyframes`
//     from {
//       box-shadow: ${fontStyle === "style3" ? boxShadow3 : boxShadow};
//       text-shadow: ${fontStyle === "style3" ? textShadow3 : textShadow};
//     }

//     to {
//       box-shadow: none;
//       text-shadow: ${fontStyle === "style3" ? textShadow3 : textShadow};
//     }
//   `;
// };
