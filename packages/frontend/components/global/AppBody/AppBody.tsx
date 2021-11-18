import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";
import { AppBodyFragment$key } from "@/relay/AppBodyFragment.graphql";

function AppBody({ children, data, nameComponent, headerNavComponent }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return (
    <Styled.Body className="a-bg-neutral00">
      {headerNavComponent || <AppHeader data={appData} />}
      <Styled.Main id="main">{children}</Styled.Main>
      <AppFooter data={appData} nameComponent={nameComponent} />
    </Styled.Body>
  );
}

interface Props {
  children: React.ReactNode;
  data?: AppBodyFragment$key | null;
  /** This component will replace the "Instance Name" text in the footer */
  nameComponent?: React.ReactNode;
  headerNavComponent?: React.ReactNode;
}

export default AppBody;

const fragment = graphql`
  fragment AppBodyFragment on Query {
    ...AppHeaderFragment
    ...AppFooterFragment
  }
`;
