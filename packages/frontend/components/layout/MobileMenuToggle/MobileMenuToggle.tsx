import React from "react";
import { IconFactory } from "components/factories";
import * as Styled from "./MobileMenuToggle.styles";
type IconProps = React.ComponentProps<typeof IconFactory>;

export default function MobileMenuToggle({ onToggle, label, icon }: Props) {
  return (
    <Styled.Toggle onClick={onToggle}>
      <Styled.Label className="t-label-lg">{label}</Styled.Label>
      <IconFactory icon={icon} role="presentation" />
    </Styled.Toggle>
  );
}

type Props = {
  onToggle: () => void;
  label: string;
  icon: IconProps["icon"];
};
