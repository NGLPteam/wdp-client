import React from "react";
import styled from "styled-components";
import Link from "next/link";
import StyledLink from "components/StyledLink";

import SignIn from "components/Auth/SignIn";
import SignOut from "components/Auth/SignOut";

export default function Header() {
  return (
    <header>
      <nav className="grid">
        <div className="grid__item--4">
          <a href="/">NGLP</a>
        </div>
        <ul className="grid__item--6 grid__item--right flex flex--right">
          <li>
            <a href="/collections">Collections</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <SignIn />
            <SignOut />
          </li>
        </ul>
      </nav>
    </header>
  );
}

const NavLogo = styled(StyledLink)`
  display: block;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
  transition: all 0.5s ease;
  padding: 0.5em;
  flex: 2 1 auto;
`;

const NavSpacer = styled.div`
  flex: 5 1 auto;
`;

const NavItem = styled(StyledLink)`
  display: block;
  padding: 0.5em;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  padding: 0 1em;
  width: 100%;
`;

const NavItems = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row nowrap;

  ${NavItem}, button {
    flex: 1 1 auto;
    padding: 0.5em;
  }
`;
