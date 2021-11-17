import React from "react";
import Image from "next/image";
import * as Styled from "./Avatar.styles";

const Avatar = ({ url, alt = "", size = "sm" }: Props) => {
  const imageSize = size === "sm" ? 32 : 60;
  const style = { "--avatar-size": `${imageSize}px` } as React.CSSProperties;

  return url ? (
    <Styled.Wrapper style={style}>
      <Image src={url} alt={alt} width={size} height={size} />
    </Styled.Wrapper>
  ) : null;
};

interface Props {
  size?: "sm" | "lg";
  alt?: string;
  url?: string;
}

export default Avatar;
