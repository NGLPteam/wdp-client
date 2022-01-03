import React from "react";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./FeaturedCollectionsList.styled";
import { ArrowList, NamedLink } from "components/atomic";
import {
  FeaturedCollectionsListFragment$data,
  FeaturedCollectionsListFragment$key,
} from "@/relay/FeaturedCollectionsListFragment.graphql";

export default function FeaturedCollectionsList({ data, header }: Props) {
  const collections = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return collections && collections.edges.length > 0 ? (
    <section className="a-bg-neutral90">
      <Styled.SectionInner className="l-container-wide">
        <Styled.TextWrapper>
          <h3 className="t-capitalize">
            {t(header || "layouts.featured_collections_header")}
          </h3>
          <Styled.List as={ArrowList}>
            {collections.edges.map(({ node }: Node) => (
              <li key={node.slug}>
                <NamedLink
                  route="collection"
                  routeParams={{ slug: node.slug }}
                  passHref
                >
                  <a>{node.title}</a>
                </NamedLink>
              </li>
            ))}
          </Styled.List>
        </Styled.TextWrapper>
      </Styled.SectionInner>
    </section>
  ) : null;
}

interface Props {
  data?: FeaturedCollectionsListFragment$key | null;
  header?: string;
}

type Node = FeaturedCollectionsListFragment$data["edges"][number];

const fragment = graphql`
  fragment FeaturedCollectionsListFragment on CollectionConnection {
    edges {
      node {
        slug
        title
      }
    }
  }
`;
