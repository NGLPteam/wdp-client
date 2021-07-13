import React from "react";
import MainNavDropdown from ".";
import { NamedLink } from "components/atomic";

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
        <NamedLink route="userList" passHref>
          <a>Users</a>
        </NamedLink>
        <NamedLink route="contributorList" passHref>
          <a>Contributors</a>
        </NamedLink>
      </MainNavDropdown>
    </div>
  );
};

Default.args = {
  active: false,
};
