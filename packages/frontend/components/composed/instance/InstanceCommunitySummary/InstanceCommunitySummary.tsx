import * as React from "react";
import { graphql, useFragment } from "react-relay";
import * as Styled from "./InstanceCommunitySummary.styles";
import { NamedLink } from "components/atomic";
import { InstanceCommunitySummaryFragment$key } from "@/relay/InstanceCommunitySummaryFragment.graphql";
import CommunityName from "components/composed/community/CommunityName";

export default function InstanceCommunitySummary({ data }: Props) {
  const community = useFragment(fragment, data);

  return community && community.slug ? (
    <>
      <NamedLink route="community" routeParams={{ slug: community.slug }}>
        <a>
          <CommunityName data={community} />
        </a>
      </NamedLink>
      <Styled.Summary className="t-rte">
        {community.tagline && (
          <div>
            <em>{community.tagline}</em>
          </div>
        )}
      </Styled.Summary>
    </>
  ) : null;
}

type Props = {
  data: InstanceCommunitySummaryFragment$key;
};

const fragment = graphql`
  fragment InstanceCommunitySummaryFragment on Community {
    slug
    tagline
    ...CommunityNameFragment
  }
`;
