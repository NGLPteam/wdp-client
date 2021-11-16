import * as React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink } from "@wdp/lib/routes";
import { Button, Dropdown } from "../../../atomic";
import { CommunityPickerFragment$key } from "../../../../__generated__/CommunityPickerFragment.graphql";

export default function CommunityPicker({ data }: Props) {
  const communityData = useMaybeFragment(fragment, data);

  const disclosure = (
    <Button secondary icon="arrowRight" size="sm">
      Community Picker
    </Button>
  );

  return communityData && communityData.communities ? (
    <Dropdown
      disclosure={disclosure}
      menuItems={communityData.communities.edges.map(({ node }) => {
        return (
          <NamedLink
            key={node.slug}
            route="community"
            routeParams={{ slug: node.slug }}
            passHref
          >
            <a>{node.title}</a>
          </NamedLink>
        );
      })}
      label="nav.communities"
    />
  ) : null;
}

type Props = {
  data?: CommunityPickerFragment$key | null;
};

const fragment = graphql`
  fragment CommunityPickerFragment on Query {
    communities {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
