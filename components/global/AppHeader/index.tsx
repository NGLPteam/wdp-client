import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import NamedLink from "components/atomic/NamedLink";
import ServiceProviderBar from "components/global/ServiceProviderBar";
import MainNav from "components/global/MainNav";
import TopNavItem from "components/atomic/TopNavItem";

import SignIn from "components/Auth/SignIn";
import SignOut from "components/Auth/SignOut";

function AppHeader({ children, className }: Props) {
  return (
    <header className={className} role="banner">
      <ServiceProviderBar />
      <MainNav>
        <NamedLink route="communityList" passHref>
          {({ active }) => <TopNavItem active={active}>Communities</TopNavItem>}
        </NamedLink>

        <NamedLink route="collectionList" passHref>
          {({ active }) => <TopNavItem active={active}>Collections</TopNavItem>}
        </NamedLink>
        <NamedLink route="itemList" passHref>
          {({ active }) => <TopNavItem active={active}>Items</TopNavItem>}
        </NamedLink>
        <span>
          <SignIn />
          <SignOut />
        </span>
      </MainNav>
      {children}
    </header>
  );
}

interface Props extends React.HTMLProps<HTMLDivElement> {}

export default AppHeader;
