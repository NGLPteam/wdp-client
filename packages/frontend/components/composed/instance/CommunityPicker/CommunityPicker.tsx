import { useMemo } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Button, Dropdown, Link, NamedLink } from "components/atomic";
import { CommunityPickerFragment$key } from "@/relay/CommunityPickerFragment.graphql";
import { CommunityPickerActiveFragment$key } from "@/relay/CommunityPickerActiveFragment.graphql";

export default function CommunityPicker({ data, active }: Props) {
  const communityData = useMaybeFragment(fragment, data);

  const activeCommunity = useMaybeFragment(activefragment, active);

  const { t } = useTranslation();

  const menuItems = useMemo(() => {
    return communityData?.communities?.edges || [];
  }, [communityData]);

  const activeTitle = useMemo(() => {
    return activeCommunity?.title;
  }, [activeCommunity]);

  return (
    <Dropdown
      disclosure={
        <Button style="secondary" icon="chevronDown" size="sm">
          {activeTitle || t("nav.community_picker")}
        </Button>
      }
      menuItems={menuItems.map(({ node }) => {
        return (
          <NamedLink
            key={node.slug}
            route="community"
            routeParams={{ slug: node.slug }}
            passHref
          >
            <Link>{node.title}</Link>
          </NamedLink>
        );
      })}
      label={t("nav.communities")}
    />
  );
}

type Props = {
  data?: CommunityPickerFragment$key | null;
  active?: CommunityPickerActiveFragment$key | null;
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

export const activefragment = graphql`
  fragment CommunityPickerActiveFragment on Community {
    title
    slug
  }
`;
