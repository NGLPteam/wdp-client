import React from "react";
import * as Styled from "./SecondaryHero.styles";

export default function SecondaryHero({
  title,
  LeftComponent,
  ThumbnailComponent,
  RightComponent,
  Alert,
}: Props) {
  return (
    <header className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <Styled.LeftSide>
          {ThumbnailComponent && (
            <Styled.Thumbnail>{ThumbnailComponent}</Styled.Thumbnail>
          )}
          <Styled.Text>
            {Alert && Alert}
            <Styled.Title as="h3">{title}</Styled.Title>
            {LeftComponent && (
              <Styled.Description>{LeftComponent}</Styled.Description>
            )}
          </Styled.Text>
        </Styled.LeftSide>
        <Styled.RightSide className="t-label-sm">
          {RightComponent}
        </Styled.RightSide>
      </Styled.HeroInner>
    </header>
  );
}

interface Props {
  /** Title - if a string, will render as h3 */
  title?: React.ReactNode | null;
  /** Thumbnail or Cover, if any */
  ThumbnailComponent?: React.ReactNode | null;
  /** Content for the left side... */
  LeftComponent?: React.ReactNode | null;
  /** Content for the right side... */
  RightComponent?: React.ReactNode | null;
  /** Visibility alert, if hidden */
  Alert?: React.ReactNode | null;
}
