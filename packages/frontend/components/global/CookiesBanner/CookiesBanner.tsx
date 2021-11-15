import * as React from "react";
import * as Styled from "./CookiesBanner.styles";

export default function CookiesBanner({ onAccept, onClose }: Props) {
  return (
    <Styled.Banner className="a-bg-custom20" role="alert">
      <Styled.Content className="l-container-wide">
        <p className="t-copy-sm">
          Cookies are delicious. Vitae pharetra maecenas amet eu luctus
          convallis. Feugiat pulvinar eleifend eu fames accumsan, ipsum diam.
        </p>
        <Styled.Buttons className="l-flex">
          <button className="a-button-primary--sm" onClick={onAccept}>
            Accept
          </button>
          <button className="a-button-secondary--sm" onClick={onClose}>
            Close
          </button>
        </Styled.Buttons>
      </Styled.Content>
    </Styled.Banner>
  );
}

type Props = {
  onAccept: () => void;
  onClose: () => void;
};
