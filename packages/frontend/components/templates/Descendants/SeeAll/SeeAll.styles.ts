import styled from "styled-components";

export const SeeAll = styled.div<{ $align?: "center" | "left" }>`
  display: flex;
  justify-content: ${({ $align }) => ($align === "center" ? "center" : "left")};
`;
