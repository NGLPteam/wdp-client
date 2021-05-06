import React from "react";
import styled from "styled-components";
import Link from "next/link";
import StyledLink from "components/StyledLink";

import SignIn from "components/Auth/SignIn";
import SignOut from "components/Auth/SignOut";

export default function Header() {
  return (
    <Container>
      <NavBar>
        <NavLogo href="/">NGLP</NavLogo>
        <NavSpacer />
        <NavItems>
          <NavItem href="/collections">Collections</NavItem>
          <NavItem href="/profile">Profile</NavItem>
          <SignIn />
          <SignOut />
        </NavItems>
      </NavBar>
    </Container>
  );
}

const Container = styled.header`
width: 100%;
text-align: center;
flex: 0 0 auto;
font-size: 18px;
z-index: 999;
height: 80px;
background-color: #eee;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
`;

const NavLogo = styled(StyledLink)`
display: block;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
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