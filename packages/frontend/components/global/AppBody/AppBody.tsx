import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";
import { AppBodyFragment$key } from "@/relay/AppBodyFragment.graphql";
import { AppBodyCommunityFragment$key } from "@/relay/AppBodyCommunityFragment.graphql";

function AppBody({ children, data, communityData }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const community = useMaybeFragment(communityFragment, communityData);

  return (
    <Styled.Body className="a-bg-neutral00">
      <AppHeader data={appData} communityData={community} />
      <Styled.Main id="main">{children}</Styled.Main>
      <AppFooter data={appData} communityData={community} />
    </Styled.Body>
  );
}

interface Props {
  children: React.ReactNode;
  data?: AppBodyFragment$key | null;
  communityData?: AppBodyCommunityFragment$key | null;
}

export default AppBody;

const fragment = graphql`
  fragment AppBodyFragment on Query {
    ...AppHeaderFragment
    ...AppFooterFragment
  }
`;

const communityFragment = graphql`
  fragment AppBodyCommunityFragment on Community {
    ...AppHeaderCommunityFragment
    ...AppFooterCommunityFragment
  }
`;
