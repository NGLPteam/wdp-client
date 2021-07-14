import React, { useRef, useState } from "react";
import { NamedLink } from "components/atomic";
import { MainNav, ServiceProviderBar } from "components/global";
import { Search } from "components/atomic/forms";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import { useGetActiveEntity } from "hooks/useGlobalData";
import { useClickEvent } from "hooks/listeners";
import { useRouter } from "next/router";
import { useIsAuthorized } from "hooks";

function AppHeader({ children, className = "" }: Props) {
  const activeEntity = useGetActiveEntity();
  const router = useRouter();
  const [active, setActive] = useState(null);
  const submenuRef = useRef<HTMLDivElement>();
  const showManageDropdown = useIsAuthorized({
    actions: ["users.read", "contributors.read"],
  });
  const showCommunityList = useIsAuthorized({ actions: "communities.read" });

  const handleSubmit = (value) => {
    router.push({
      pathname: "/search",
      query: { q: value },
    });
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
        {showCommunityList && (
          <NamedLink route="communityList" passHref>
            <MainNav.Item active={activeEntity === "communities"}>
              Communities
            </MainNav.Item>
          </NamedLink>
        )}
        <NamedLink route="collectionList" passHref>
          <MainNav.Item active={activeEntity === "collections"}>
            Collections
          </MainNav.Item>
        </NamedLink>
        <NamedLink route="itemList" passHref>
          <MainNav.Item active={activeEntity === "items"}>Items</MainNav.Item>
        </NamedLink>
        {showManageDropdown && (
          <div ref={submenuRef}>
            <MainNav.Dropdown active={active === "admin"} label="Manage">
              <NamedLink route="userList" passHref>
                <MainNav.Item>Users</MainNav.Item>
              </NamedLink>
              <NamedLink route="contributorList" passHref>
                <MainNav.Item>Contributors</MainNav.Item>
              </NamedLink>
            </MainNav.Dropdown>
          </div>
        )}
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
