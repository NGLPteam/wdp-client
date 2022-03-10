import * as React from "react";
import { Button } from "../../atomic";
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
          <Button size="sm" onClick={onAccept}>
            Accept
          </Button>
          <Button size="sm" style="secondary" icon="close" onClick={onClose}>
            Close
          </Button>
        </Styled.Buttons>
      </Styled.Content>
    </Styled.Banner>
  );
}

type Props = {
  onAccept: () => void;
  onClose: () => void;
};
