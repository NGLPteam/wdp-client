import { useContext } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { Button, Dropdown, NamedLink } from "components/atomic";
import { CommunityPickerFragment$key } from "@/relay/CommunityPickerFragment.graphql";
import { CommunityPickerCommunityNameFragment$key } from "@/relay/CommunityPickerCommunityNameFragment.graphql";
import { CommunityContext } from "@/contexts/CommunityContext";
import * as Styled from "./CommunityPicker.styles";

type Props = {
  data?: CommunityPickerFragment$key | null;
  activeData?: CommunityPickerCommunityNameFragment$key | null;
};

export default function CommunityPicker({ data }: Props) {
  const communityData = useFragment(fragment, data);

  const activeCommunityData = useContext(CommunityContext);
  const activeCommunity = useFragment<CommunityPickerCommunityNameFragment$key>(
    communityNameFragment,
    activeCommunityData
  );

  const { t } = useTranslation();

  if (!communityData) return null;

  const menuItems = communityData.pickerCommunities?.edges || [];

  if (menuItems.length === 0) return null;

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
        <Styled.Disclosure
          forwardedAs="div"
          secondary
          icon="chevronDown"
          size="sm"
        >
          <span>{activeCommunity?.title || t("nav.community_picker")}</span>
        </Styled.Disclosure>
      }
      menuItems={menuItems.map(({ node }) => {
        return (
          <Dropdown.Link
            key={node.slug}
            href={`/communities/${node.slug}`}
            label={node.title}
          />
        );
      })}
      label={t("nav.communities")}
    />
  );
}

const communityNameFragment = graphql`
  fragment CommunityPickerCommunityNameFragment on Community {
    title
  }
`;

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
