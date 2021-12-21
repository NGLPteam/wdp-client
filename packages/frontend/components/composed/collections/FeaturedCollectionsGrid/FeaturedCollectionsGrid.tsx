import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import FeaturedCollectionsGridImage from "./FeaturedCollectionsGridImage";
import * as Styled from "./FeaturedCollectionsGrid.styles";
import {
  FeaturedCollectionsGridFragment$data,
  FeaturedCollectionsGridFragment$key,
} from "@/relay/FeaturedCollectionsGridFragment.graphql";

export default function FeaturedCollectionsGrid({ data, header }: Props) {
  const collections = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return collections && collections.edges.length > 0 ? (
    <section className="a-bg-custom10">
      <Styled.SectionInner className="l-container-wide">
        <Styled.Header className="t-capitalize">
          {t(header || "layouts.featured_collections_header")}
        </Styled.Header>
        <Styled.List>
          {collections.edges.map(({ node }: Node) => (
            <Styled.Item key={node.slug}>
              <Styled.NamedLink
                route="collection"
                routeParams={{ slug: node.slug }}
                passHref
              >
                <a>
                  <FeaturedCollectionsGridImage data={node} />
                  <span className="t-h3">{node.title}</span>
                </a>
              </Styled.NamedLink>
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.SectionInner>
    </section>
  ) : null;
}

interface Props {
  header?: string;
  data?: FeaturedCollectionsGridFragment$key | null;
}

type Node = FeaturedCollectionsGridFragment$data["edges"][number];

const fragment = graphql`
  fragment FeaturedCollectionsGridFragment on CollectionConnection {
    edges {
      node {
        slug
        title
        ...FeaturedCollectionsGridImageFragment
      }
    }
  }
`;
