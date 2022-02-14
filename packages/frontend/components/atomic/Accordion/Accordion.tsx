import React, { useRef, useState } from "react";
import * as Styled from "./Accordion.styles";
import { IconKeys } from "components/factories/IconFactory/IconFactory";

export default function Accordion({ label, menuItems }: Props) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [icon, toggleIcon] = useState<IconKeys>("chevronDown");

  const onToggle = () => {
    if (!ref.current?.open) {
      toggleIcon("chevronUp");
      return;
    }
    toggleIcon("chevronDown");
  };

  const submenu =
    menuItems &&
    menuItems.map((item, i) => <Styled.Item key={i}>{item}</Styled.Item>);

  return (
    <Styled.Accordion ref={ref}>
      <Styled.Summary onClick={onToggle}>
        <span>{label}</span>
        <Styled.Arrow icon={icon} role="presentation" />
      </Styled.Summary>
      <Styled.List>{submenu}</Styled.List>
    </Styled.Accordion>
  );
}

type Props = {
  label: string;
  menuItems?: JSX.Element[];
};
