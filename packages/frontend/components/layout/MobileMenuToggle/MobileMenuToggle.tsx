import React from "react";
import * as Styled from "./MobileMenuToggle.styles";
import { IconFactory } from "components/factories";
type IconProps = React.ComponentProps<typeof IconFactory>;

export default function MobileMenuToggle({
  onToggle,
  label,
  icon,
  ...props
}: Props) {
  return (
    <Styled.Toggle onClick={onToggle} {...props}>
      <Styled.Label className="t-label-lg">{label}</Styled.Label>
      <IconFactory icon={icon} role="presentation" />
    </Styled.Toggle>
  );
}

type Props = {
  onToggle: () => void;
  label: string;
  icon: IconProps["icon"];
  "aria-controls": string;
  "aria-expanded": boolean;
};
