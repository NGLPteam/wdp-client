import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <Container>
      {"© "}
      <Link href="/">
        NGLP
      </Link>
      {" "}
      {new Date().getFullYear()}
      {"."}
    </Container>
  );
}

const Container = styled.footer`
width: 100vw;
text-align: center;
flex: 0 0 auto;
margin: 1em auto;
padding: 1em;
`;