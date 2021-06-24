import React, { useState } from "react";
import TopNavItemWithChildren from ".";
import { MixedLink } from "..";

export default {
  title: "Components/Atomic/TopNavItemWithChildren",
  component: TopNavItemWithChildren,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

export const Default = () => {
  const [active, setActive] = useState(null);
  const handleToggleClick = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div>
      <TopNavItemWithChildren
        id="admin"
        active={active === "admin"}
        label="Admin"
        onToggleClick={handleToggleClick}
        onEsc={() => setActive(null)}
      >
        <MixedLink route="userList" passHref>
          <a>Users</a>
        </MixedLink>
        <MixedLink route="contributorList" passHref>
          <a>Contributors</a>
        </MixedLink>
      </TopNavItemWithChildren>
    </div>
  );
};
