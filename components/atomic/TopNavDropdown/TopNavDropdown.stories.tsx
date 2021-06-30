import React from "react";
import TopNavDropdown from "./";
import { MixedLink } from "components/atomic";

export default {
  title: "Components/Atomic/TopNavDropdown",
  component: TopNavDropdown,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

export const Default = ({ active }) => {
  return (
    <div>
      <TopNavDropdown active={active} label="Dropdown">
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
  active: false,
};
