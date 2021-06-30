import React, { useRef, useState } from "react";
import MixedLink from "components/atomic/MixedLink";
import { MainNav, ServiceProviderBar, NavSearch } from "components/global";
import { TopNavItem, TopNavDropdown } from "components/atomic/";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import { useGetActiveEntity } from "hooks/useGlobalData";
import { useClickEvent } from "hooks/listeners";

function AppHeader({ children, className = "" }: Props) {
  const activeEntity = useGetActiveEntity();
  const [active, setActive] = useState(null);
  const submenuRef = useRef<HTMLDivElement>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (value) => {
    // TODO: Submit search
  };

  const handleClick = (e) => {
    if (submenuRef?.current?.contains(e.target)) return;
    setActive(null);
  };
  useClickEvent(handleClick);

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
        <div ref={submenuRef}>
          <TopNavDropdown active={active === "admin"} label="Manage">
            <MixedLink route="userList" passHref>
              <a>Users</a>
            </MixedLink>
            <MixedLink route="contributorList" passHref>
              <a>Contributors</a>
            </MixedLink>
          </TopNavDropdown>
        </div>
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
