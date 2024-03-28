import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink, Button } from "components/atomic";
import { PagesRouterLinkProps } from "components/atomic/links/NamedLink/NamedLink";
import {
  FeaturedCollectionsGridFragment$data,
  FeaturedCollectionsGridFragment$key,
} from "@/relay/FeaturedCollectionsGridFragment.graphql";
import FeaturedCollectionsGridImage from "./FeaturedCollectionsGridImage";
import * as Styled from "./FeaturedCollectionsGrid.styles";

type LinkProps = PagesRouterLinkProps;

export default function FeaturedCollectionsGrid({
  data,
  header,
  seeAllRoute,
  seeAllRouteParams,
  seeAllText,
}: Props) {
  const collections = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return collections && collections.entities.length > 0 ? (
    <Styled.Section className="a-bg-custom10">
      <Styled.SectionInner className="l-container-wide">
        <Styled.Header className="t-capitalize">
          {t(header || "layouts.featured_collections_header")}
        </Styled.Header>
        <Styled.List>
          {collections.entities.map((node: Node) =>
            node.slug ? (
              <Styled.Item key={node.slug}>
                <Styled.NamedLink href={`/collections/${node.slug}`}>
                  <FeaturedCollectionsGridImage data={node} />
                  <span className="t-h3">{node.title}</span>
                </Styled.NamedLink>
              </Styled.Item>
            ) : null,
          )}
        </Styled.List>
        {seeAllRoute && (
          <Styled.ButtonWrapper>
            <NamedLink route={seeAllRoute} routeParams={seeAllRouteParams}>
              <Button as="span">
                {t(seeAllText || "layouts.see_all_collections")}
              </Button>
            </NamedLink>
          </Styled.ButtonWrapper>
        )}
      </Styled.SectionInner>
    </Styled.Section>
  ) : null;
}

interface Props {
  header?: string;
  data?: FeaturedCollectionsGridFragment$key | null;
  seeAllRoute?: LinkProps["route"];
  seeAllRouteParams?: LinkProps["routeParams"];
  seeAllText?: string;
}

type Node = FeaturedCollectionsGridFragment$data["entities"][number];

const fragment = graphql`
  fragment FeaturedCollectionsGridFragment on EntitiesProperty {
    entities {
      ... on Sluggable {
        slug
      }
      ... on Entity {
        title
      }
      ...FeaturedCollectionsGridImageFragment
    }
  }
`;
