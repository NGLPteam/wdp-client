import React, { useState } from "react";
import TopNavDropdown from ".";
import { MixedLink } from "..";

export default {
  title: "Components/Atomic/TopNavDropdown",
  component: TopNavDropdown,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

export const Default = (args) => {
  const [active, setActive] = useState(args.active);
  const handleToggleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <TopNavDropdown
        id="dropdown"
        active={active}
        label="Dropdown"
        onToggleClick={handleToggleClick}
        onEsc={() => setActive(null)}
      >
        <MixedLink route="userList" passHref>
          <a>Users</a>
        </MixedLink>
        <MixedLink route="contributorList" passHref>
          <a>Contributors</a>
        </MixedLink>
      </TopNavDropdown>
    </div>
  );
};

Default.args = {
  active: true,
};
