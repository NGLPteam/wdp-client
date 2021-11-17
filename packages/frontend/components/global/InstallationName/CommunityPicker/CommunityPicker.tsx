import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink } from "@wdp/lib/routes";
import { Button, Dropdown } from "../../../atomic";
import { CommunityPickerFragment$key } from "../../../../__generated__/CommunityPickerFragment.graphql";

export default function CommunityPicker({ data }: Props) {
  const communityData = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return communityData && communityData.communities ? (
    <Dropdown
      disclosure={
        <Button secondary icon="arrowRight" size="sm">
          Community Picker
        </Button>
      }
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
      label={t("nav.communities")}
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
