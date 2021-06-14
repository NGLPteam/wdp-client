import React from "react";
import MixedLink from "components/atomic/MixedLink";
import { MainNav, ServiceProviderBar, NavSearch } from "components/global";
import { TopNavItem } from "components/atomic/";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import { useGetActiveEntity } from "hooks/useGlobalData";

function AppHeader({ children, className = "" }: Props) {
  const activeEntity = useGetActiveEntity();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (value) => {
    // TODO: Submit search
  };

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
        <NavSearch onSubmit={handleSubmit} />
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
