import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBodyFragment$key } from "../../../__generated__/AppBodyFragment.graphql";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";

function AppBody({ children, data, nameComponent }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return (
    <Styled.Body className="a-bg-neutral00">
      <AppHeader data={appData} />
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
}

export default AppBody;

const fragment = graphql`
  fragment AppBodyFragment on Query {
    ...AppHeaderFragment
    ...AppFooterFragment
  }
`;
