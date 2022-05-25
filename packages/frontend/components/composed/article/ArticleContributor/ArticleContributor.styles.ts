import styled from "styled-components";

export const Spacer = styled.div.attrs(() => ({
  role: "presentation",
}))`
  padding-block-end: var(--container-padding-md);
`;
