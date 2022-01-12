import * as React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import InstanceCommunities from "components/composed/instance/InstanceCommunities";
import InstanceHero from "components/composed/instance/InstanceHero";
import { InstanceContentLayoutFragment$key } from "@/relay/InstanceContentLayoutFragment.graphql";

export default function InstanceContentLayout({ data }: Props) {
  const instance = useMaybeFragment(fragment, data);

  return instance ? (
    <>
      <InstanceHero />
      <InstanceCommunities data={instance.communities} />
    </>
  ) : null;
}

type Props = {
  data?: InstanceContentLayoutFragment$key | null;
};

const fragment = graphql`
  fragment InstanceContentLayoutFragment on Query {
    communities {
      ...InstanceCommunitiesFragment
    }
  }
`;
