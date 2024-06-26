import React from "react";
import { useDetailsToggle } from "@wdp/lib/hooks";
import { IconKeys } from "components/factories/IconFactory/IconFactory";
import * as Styled from "./Accordion.styles";

export default function Accordion({ label, menuItems }: Props) {
  const { ref, icon, onToggle } = useDetailsToggle<IconKeys>({
    iconClosed: "chevronDown",
    iconOpen: "chevronUp",
  });

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
  menuItems?: React.JSX.Element[];
};
