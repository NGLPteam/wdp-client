import React from "react";
import Link from "next/link";
import * as Styled from "./LogoPlaceholder.styles";

const LogoPlaceholder = ({ children }: Props) => {
  return (
    <Link href="/" passHref>
      <Styled.LogoLink>{children}</Styled.LogoLink>
    </Link>
  );
};

interface Props {
  children: React.ReactNode;
}

export default LogoPlaceholder;
