import React from "react";
import { Image } from "components/atomic";
import * as Styled from "./Avatar.styles";

const Avatar = ({ url, alt = "", size = 30 }: Props) => {
  return url ? (
    <Styled.Wrapper size={size}>
      <Image image={{ url, alt, width: size, height: size }} />
    </Styled.Wrapper>
  ) : null;
};

interface Props {
  size?: number;
  alt?: string;
  url?: string;
}

export default Avatar;
