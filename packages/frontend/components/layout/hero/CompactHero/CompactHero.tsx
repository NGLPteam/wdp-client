import React from "react";
import * as Styled from "./CompactHero.styles";

export default function CompactHero({
  title,
  subtitle,
  style = "primary",
}: Props) {
  return (
    <div className="a-bg-custom10">
      <Styled.Wrapper className="l-container-wide" $style={style}>
        <Styled.Title as={style === "secondary" ? "h3" : "h2"}>
          {title}
        </Styled.Title>
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      </Styled.Wrapper>
    </div>
  );
}

interface Props {
  title?: string | null;
  subtitle?: string | React.ReactNode | null;
  style: "primary" | "secondary";
}
