import { useContext } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { Dropdown, NamedLink } from "components/atomic";
import { CommunityPickerFragment$key } from "@/relay/CommunityPickerFragment.graphql";
import { CommunityPickerCommunityNameFragment$key } from "@/relay/CommunityPickerCommunityNameFragment.graphql";
import { CommunityContext } from "@/contexts/CommunityContext";
import Button from "@/components/atomic/Button";
import styles from "./CommunityPicker.module.css";

type Props = {
  data?: CommunityPickerFragment$key | null;
  activeData?: CommunityPickerCommunityNameFragment$key | null;
};

export default function CommunityPicker({ data }: Props) {
  const communityData = useFragment(fragment, data);

  const activeCommunityData = useContext(CommunityContext);
  const activeCommunity = useFragment<CommunityPickerCommunityNameFragment$key>(
    communityNameFragment,
    activeCommunityData,
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
      scroll={false}
    >
      <Button as="span" secondary size="sm">
        {menuItems[0].node.title}
      </Button>
    </NamedLink>
  ) : (
    <Dropdown
      disclosure={
        <Button
          as="div"
          secondary
          icon="chevronDown"
          size="sm"
          className={styles.disclosure}
        >
          <span>{activeCommunity?.title || t("nav.community_picker")}</span>
        </Button>
      }
      menuItems={menuItems.map(({ node }) => {
        return (
          <Dropdown.Link
            key={node.slug}
            href={`/communities/${node.slug}`}
            label={node.title}
            scroll={false}
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
