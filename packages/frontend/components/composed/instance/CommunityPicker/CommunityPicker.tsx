import { useMemo } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Button, Dropdown, Link, NamedLink } from "components/atomic";
import { CommunityPickerFragment$key } from "@/relay/CommunityPickerFragment.graphql";
import * as Styled from "./CommunityPicker.styles";

export default function CommunityPicker({ data }: Props) {
  const communityData = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const menuItems = useMemo(() => {
    return communityData?.pickerCommunities?.edges || [];
  }, [communityData]);

  return menuItems.length === 1 ? (
    <NamedLink
      href={
        menuItems[0].node.slug
          ? `/communities/${menuItems[0].node.slug}`
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
          <span data-community-picker-portal />
          <Styled.Label>{t("nav.community_picker")}</Styled.Label>
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
  data?: CommunityPickerFragment$key | null;
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
