import React from "react";

import NamedLink from "components/atomic/NamedLink";
import ServiceProviderBar from "components/global/ServiceProviderBar";
import MainNav from "components/global/MainNav";
import TopNavItem from "components/atomic/TopNavItem";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import { useGetActiveEntity } from "hooks/useGlobalData";

function AppHeader({ children, className }: Props) {
  const activeEntity = useGetActiveEntity();

  return (
    <header className={className} role="banner">
      <ServiceProviderBar />
      <MainNav>
        <NamedLink route="communityList" passHref>
          <TopNavItem active={activeEntity === "communities"}>
            Communities
          </TopNavItem>
        </NamedLink>
        <NamedLink route="collectionList" passHref>
          <TopNavItem active={activeEntity === "collections"}>
            Collections
          </TopNavItem>
        </NamedLink>
        <NamedLink route="itemList" passHref>
          <TopNavItem active={activeEntity === "items"}>Items</TopNavItem>
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

type Props = React.HTMLProps<HTMLDivElement>;

export default AppHeader;
