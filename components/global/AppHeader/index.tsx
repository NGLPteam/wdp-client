import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import ServiceProviderBar from "components/global/ServiceProviderBar";
import MainNav from "components/global/MainNav";
import TopNavItem from "components/atomic/TopNavItem";

import SignIn from "components/Auth/SignIn";
import SignOut from "components/Auth/SignOut";

function AppHeader({ children, className }: Props) {
  const { asPath } = useRouter();

  return (
    <header className={className} role="banner">
      <ServiceProviderBar />
      <MainNav>
        <Link href="/communities" passHref>
          <TopNavItem active={asPath === "/communities"}>
            Communities
          </TopNavItem>
        </Link>
        <Link href="/collections" passHref>
          <TopNavItem active={asPath === "/collections"}>
            Collections
          </TopNavItem>
        </Link>
        <Link href="/items" passHref>
          <TopNavItem active={asPath === "/items"}>Items</TopNavItem>
        </Link>
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
