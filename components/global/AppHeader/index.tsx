import React, { PropsWithChildren } from "react";
import styled from "styled-components";

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
        <TopNavItem as="a" href="/communities">
          Communities
        </TopNavItem>
        <TopNavItem as="a" href="/collections">
          Collections
        </TopNavItem>
        <TopNavItem as="a" href="/items">
          Items
        </TopNavItem>
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
