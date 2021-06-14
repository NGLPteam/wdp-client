import React from "react";
import MixedLink from "components/atomic/MixedLink";
import ServiceProviderBar from "components/global/ServiceProviderBar";
import MainNav from "components/global/MainNav";
import TopNavItem from "components/atomic/TopNavItem";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import { useGetActiveEntity } from "hooks/useGlobalData";

function AppHeader({ children, className = "" }: Props) {
  const activeEntity = useGetActiveEntity();

  return (
    <header className={className} role="banner">
      <ServiceProviderBar />
      <MainNav>
        <MixedLink route="communityList" passHref>
          <TopNavItem active={activeEntity === "communities"}>
            Communities
          </TopNavItem>
        </MixedLink>
        <MixedLink route="collectionList" passHref>
          <TopNavItem active={activeEntity === "collections"}>
            Collections
          </TopNavItem>
        </MixedLink>
        <MixedLink route="itemList" passHref>
          <TopNavItem active={activeEntity === "items"}>Items</TopNavItem>
        </MixedLink>
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
