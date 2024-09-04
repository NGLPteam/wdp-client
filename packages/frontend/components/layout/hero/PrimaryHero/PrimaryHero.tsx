import React from "react";
import * as Styled from "./PrimaryHero.styles";

export default function PrimaryHero({
  title,
  subtitle,
  HeroImageComponent,
  LeftComponent,
  RightComponent,
  LogoComponent,
  Alert,
}: Props) {
  return (
    <header className="a-bg-custom10">
      <Styled.Inner className="l-container-wide">
        <Styled.LeftSide>
          {Alert && <Styled.Alert>{Alert}</Styled.Alert>}
          {LogoComponent && <Styled.Logo>{LogoComponent}</Styled.Logo>}
          <Styled.Title>
            <h1 className="t-h2">{title}</h1>
            {subtitle && typeof subtitle === "string" ? (
              <h2 className="t-h3">{subtitle}</h2>
            ) : (
              <div>{subtitle}</div>
            )}
          </Styled.Title>
          {LeftComponent && (
            <Styled.LeftContent>{LeftComponent}</Styled.LeftContent>
          )}
        </Styled.LeftSide>
        {RightComponent && (
          <Styled.RightSide className="t-label-sm">
            {RightComponent}
          </Styled.RightSide>
        )}
      </Styled.Inner>
      {HeroImageComponent}
    </header>
  );
}

interface Props {
  /** Title, always an h2, can be a string or a link */
  title?: React.ReactNode | null;
  /** Subtitle, default h3, can be a react node */
  subtitle?: React.ReactNode | null;
  /** Left side react components */
  LeftComponent?: React.ReactNode | null;
  /** Right side react components */
  RightComponent?: React.ReactNode | null;
  /** Hero image, if any */
  HeroImageComponent?: React.ReactNode | null;
  /** Logo, if any */
  LogoComponent?: React.ReactNode | null;
  /** Visibility alert, if hidden */
  Alert?: React.ReactNode | null;
}
