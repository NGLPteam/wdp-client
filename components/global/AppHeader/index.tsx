import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import ServiceProviderBar from "components/global/ServiceProviderBar";
import MainNav from "components/global/MainNav";

import SignIn from "components/Auth/SignIn";
import SignOut from "components/Auth/SignOut";

function AppHeader({ children, className }: Props) {
  return (
    <header className={className} role="banner">
      <ServiceProviderBar />
      <MainNav>
        <a href="/collections">Collections</a>
        <a href="/profile">Profile</a>
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
