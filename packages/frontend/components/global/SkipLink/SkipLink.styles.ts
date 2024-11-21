import styled from "styled-components";

export const SkipLink = styled.a`
  position: fixed;
  top: 10px;
  left: -400px;
  transition: left 0.25s ease;
  z-index: 10;

  &:focus {
    left: 10px;
    outline: none;
  }
`;

export const SRText = styled.span`
  display: none;
`;
