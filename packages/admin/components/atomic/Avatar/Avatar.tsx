import React from "react";
import * as Styled from "./Avatar.styles";
import { Image } from "components/atomic";

const Avatar = ({ url, alt = "", size = 30 }: Props) => {
  return url ? (
    <Styled.Wrapper size={size}>
      <Image image={{ url, alt, width: size, height: size }} />
    </Styled.Wrapper>
  ) : null;
};

interface Props {
  size?: number;
  alt?: string | null;
  url?: string | null;
}

export default Avatar;
