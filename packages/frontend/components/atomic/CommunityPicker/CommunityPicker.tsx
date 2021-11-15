import * as React from "react";
import { Dropdown } from "..";

export default function CommunityPicker({ communities }: Props) {
  const disclosure = (
    <button className="a-button-secondary--sm">Community Picker</button>
  );
  return (
    <Dropdown
      disclosure={disclosure}
      menuItems={communities}
      label="nav.communities"
    />
  );
}

type Props = {
  communities: JSX.Element[];
};
