"use client";

import { graphql } from "react-relay";
import { updateI18n } from "i18n";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBodyCommunityFragment$key } from "@/relay/AppBodyCommunityFragment.graphql";
import { AppBodyEntityFragment$key } from "@/relay/AppBodyEntityFragment.graphql";
import { AppBodyFragment$key } from "@/relay/AppBodyFragment.graphql";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";

function AppBody({ children, data, communityData, entityData }: Props) {
  updateI18n("en");

  const globalData = useMaybeFragment(fragment, data);
  const community = useMaybeFragment(communityFragment, communityData);
  const entity = useMaybeFragment(entityFragment, entityData);

  return (
    <Styled.Body className="a-bg-neutral00">
      <AppHeader
        communityData={community}
        entityData={entity}
        data={globalData}
      />
      <Styled.Main id="main" tabIndex={-1}>
        {children}
      </Styled.Main>
      <AppFooter communityData={community} data={globalData} />
    </Styled.Body>
  );
}

interface Props {
  children: React.ReactNode;
  data?: AppBodyFragment$key;
  communityData?: AppBodyCommunityFragment$key | null;
  entityData?: AppBodyEntityFragment$key | null;
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

const entityFragment = graphql`
  fragment AppBodyEntityFragment on Entity {
    ...AppHeaderEntityFragment
  }
`;
