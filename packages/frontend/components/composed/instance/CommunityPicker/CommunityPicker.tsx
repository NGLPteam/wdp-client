import { useMemo } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useLatestPresentValue } from "@wdp/lib/hooks";
import { Button, Dropdown, Link, NamedLink } from "components/atomic";
import { useGlobalContext } from "contexts";
import { CommunityPickerFragment$key } from "@/relay/CommunityPickerFragment.graphql";
import { CommunityPickerActiveFragment$key } from "@/relay/CommunityPickerActiveFragment.graphql";

export default function CommunityPicker({ active }: Props) {
  const siteData = useGlobalContext();

  const communityData = useMaybeFragment<CommunityPickerFragment$key>(
    fragment,
    siteData,
  );

  const activeCommunity = useMaybeFragment(activefragment, active);

  const { t } = useTranslation();

  const menuItems = useMemo(() => {
    return communityData?.pickerCommunities?.edges || [];
  }, [communityData]);

  const { current: memoizedCommunity } = useLatestPresentValue(activeCommunity);

  return menuItems.length === 1 ? (
    <NamedLink
      href={
        menuItems[0].node.slug
          ? `/commmunities/${menuItems[0].node.slug}`
          : "/communities"
      }
    >
      <Button as="span" secondary size="sm">
        {menuItems[0].node.title}
      </Button>
    </NamedLink>
  ) : (
    <Dropdown
      disclosure={
        <Button as="div" secondary icon="chevronDown" size="sm">
          {memoizedCommunity?.title || t("nav.community_picker")}
        </Button>
      }
      menuItems={menuItems.map(({ node }) => {
        return (
          <NamedLink key={node.slug} href={`/communities/${node.slug}`}>
            <Link as="span">{node.title}</Link>
          </NamedLink>
        );
      })}
      label={t("nav.communities")}
    />
  );
}

type Props = {
  active?: CommunityPickerActiveFragment$key | null;
};

const fragment = graphql`
  fragment CommunityPickerFragment on Query {
    pickerCommunities: communities(order: POSITION_ASCENDING) {
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
