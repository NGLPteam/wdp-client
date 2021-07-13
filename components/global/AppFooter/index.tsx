import React from "react";
import MainFooter from "components/global/MainFooter";
import { NamedLink } from "components/atomic";

const DEFAULTS = {
  about: `Our Institution’s Name, in partnership with the Name of a Service
    Provider, has created this website using NGLP–WDP a modern, open
    source institutional web delivery platform.`,
  copyright: `Copyright 2021 Institution Name and other necessary data. 
    More legal details can be found here.`,
};

function AppFooter() {
  return (
    <MainFooter {...DEFAULTS}>
      <MainFooter.Nav header="Manage">
        <NamedLink route="communityList" passHref>
          <a>Communities</a>
        </NamedLink>
        <NamedLink route="collectionList" passHref>
          <a>Collections</a>
        </NamedLink>
        <NamedLink route="itemList" passHref>
          <a>Items</a>
        </NamedLink>
        <NamedLink route="userList" passHref>
          <a>Users</a>
        </NamedLink>
        <NamedLink route="contributorList" passHref>
          <a>Contributors</a>
        </NamedLink>
      </MainFooter.Nav>
      <MainFooter.Nav header="Learn">
        <a href="#">Features</a>
        <a href="#">Partners</a>
        <a href="#">In Use</a>
        <a href="#">Help</a>
        <a href="#">Contact</a>
      </MainFooter.Nav>
    </MainFooter>
  );
}

export default AppFooter;
