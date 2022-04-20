import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";
import { AppBodyCommunityFragment$key } from "@/relay/AppBodyCommunityFragment.graphql";
import { AppBodyEntityFragment$key } from "@/relay/AppBodyEntityFragment.graphql";

function AppBody({ children, communityData, entityData }: Props) {
  const community = useMaybeFragment(fragment, communityData);

  const entity = useMaybeFragment(entityFragment, entityData);

  return (
    <Styled.Body className="a-bg-neutral00">
      <AppHeader communityData={community} entityData={entity} />
      <Styled.Main id="main">{children}</Styled.Main>
      <AppFooter communityData={community} />
    </Styled.Body>
  );
}

interface Props {
  children: React.ReactNode;
  communityData?: AppBodyCommunityFragment$key | null;
  entityData?: AppBodyEntityFragment$key | null;
}

export default AppBody;

const fragment = graphql`
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
