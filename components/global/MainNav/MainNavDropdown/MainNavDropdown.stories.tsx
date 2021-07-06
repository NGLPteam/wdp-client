import React from "react";
import MainNavDropdown from ".";
import { MixedLink } from "components/atomic";

export default {
  title: "Components/Global/MainNav/MainNav.Dropdown",
  component: MainNavDropdown,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

export const Default = ({ active }) => {
  return (
    <div>
      <MainNavDropdown active={active} label="Dropdown">
        <MixedLink route="userList" passHref>
          <a>Users</a>
        </MixedLink>
        <MixedLink route="contributorList" passHref>
          <a>Contributors</a>
        </MixedLink>
      </MainNavDropdown>
    </div>
  );
};

Default.args = {
  active: false,
};
