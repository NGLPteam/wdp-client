import styled from "styled-components";

export const Image = styled.img<{
  $objectFit?: string;
  $objectPosition?: string;
  $height?: number;
  $width?: number;
}>`
  object-fit: ${({ $objectFit }) => $objectFit ?? "none"};
  object-position: ${({ $objectPosition }) => $objectPosition ?? "center"};
  max-height: 100%;
  max-width: 100%;
`;
