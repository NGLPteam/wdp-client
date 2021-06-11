import React from "react";
import { useRouter } from "next/router";
import { isActiveRoute } from "helpers/routes";

import NamedLink from "components/atomic/NamedLink";
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
        <NamedLink route="communityList" passHref>
          <TopNavItem active={isActiveRoute(asPath, "communityList")}>
            Communities
          </TopNavItem>
        </NamedLink>
        <NamedLink route="collectionList" passHref>
          <TopNavItem active={isActiveRoute(asPath, "collectionList")}>
            Collections
          </TopNavItem>
        </NamedLink>
        <NamedLink route="itemList" passHref>
          <TopNavItem active={isActiveRoute(asPath, "itemList")}>
            Items
          </TopNavItem>
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
