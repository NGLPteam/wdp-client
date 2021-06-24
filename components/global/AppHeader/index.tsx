import React, { useRef, useState } from "react";
import MixedLink from "components/atomic/MixedLink";
import { MainNav, ServiceProviderBar, NavSearch } from "components/global";
import { TopNavItem } from "components/atomic/";
import TopNavItemWithChildren from "components/atomic/TopNavItemWithChildren";
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

  const handleToggleClick = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
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
        <div ref={submenuRef}>
          <TopNavItemWithChildren
            id="admin"
            active={active === "admin"}
            label="Admin"
            onToggleClick={handleToggleClick}
            onEsc={() => setActive(null)}
          >
            <MixedLink route="userList" passHref>
              <a href="" onClick={() => setActive(null)}>
                Users
              </a>
            </MixedLink>
            <MixedLink route="contributorList" passHref>
              <a href="" onClick={() => setActive(null)}>
                Contributors
              </a>
            </MixedLink>
          </TopNavItemWithChildren>
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
