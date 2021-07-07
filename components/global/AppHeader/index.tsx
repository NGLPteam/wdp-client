import React, { useRef, useState } from "react";
import MixedLink from "components/atomic/MixedLink";
import { MainNav, ServiceProviderBar } from "components/global";
import { Search } from "components/atomic/forms";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import { useGetActiveEntity } from "hooks/useGlobalData";
import { useClickEvent } from "hooks/listeners";

function AppHeader({ children, className = "" }: Props) {
  const activeEntity = useGetActiveEntity();
  const [active, setActive] = useState(null);
  const submenuRef = useRef<HTMLDivElement>();

  const handleSubmit = (value) => {
    console.info("search", value);
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
          <MainNav.Item active={activeEntity === "communities"}>
            Communities
          </MainNav.Item>
        </MixedLink>
        <MixedLink route="collectionList" passHref>
          <MainNav.Item active={activeEntity === "collections"}>
            Collections
          </MainNav.Item>
        </MixedLink>
        <MixedLink route="itemList" passHref>
          <MainNav.Item active={activeEntity === "items"}>Items</MainNav.Item>
        </MixedLink>
        <div ref={submenuRef}>
          <MainNav.Dropdown active={active === "admin"} label="Manage">
            <MixedLink route="userList" passHref>
              <MainNav.Item>Users</MainNav.Item>
            </MixedLink>
            <MixedLink route="contributorList" passHref>
              <MainNav.Item>Contributors</MainNav.Item>
            </MixedLink>
          </MainNav.Dropdown>
        </div>
        <Search onSubmit={handleSubmit} />
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
