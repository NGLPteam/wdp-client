import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink, useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./FeaturedIssues.styles";
import { ArrowLink, Button } from "components/atomic";
import CoverImage from "components/atomic/CoverImage";
import {
  FeaturedIssuesFragment$data,
  FeaturedIssuesFragment$key,
} from "@/relay/FeaturedIssuesFragment.graphql";

export default function FeaturedIssues({ data, limit = 4 }: Props) {
  const issues = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return issues?.edges && issues.edges.length > 0 ? (
    <section className="a-bg-neutral90">
      <Styled.SectionInner>
        <Styled.HeaderBlock>
          <h3 className="t-capitalize">
            {t("layouts.featured_issues_header")}
          </h3>
        </Styled.HeaderBlock>
        <Styled.List>
          {issues.edges.slice(0, limit).map(({ node }: Node) =>
            node.slug ? (
              <Styled.ListItem key={node.slug}>
                <NamedLink
                  route="collection"
                  routeParams={{ slug: node.slug }}
                  passHref
                >
                  <Styled.ItemLink>
                    <Styled.ItemCoverBlock>
                      <CoverImage
                        data={node.thumbnail}
                        maxWidth={120}
                        maxHeight={160}
                      />
                    </Styled.ItemCoverBlock>
                    <div>
                      <Styled.ItemTitleBlock>
                        <h4>{node.title}</h4>
                        {/* <h5 className="t-copy-italic">Subtitle</h5> */}
                      </Styled.ItemTitleBlock>
                      <div className="t-copy-sm">
                        <p>Primary Metadata</p>
                        <p className="t-copy-italic t-copy-light">
                          Secondary metadata
                        </p>
                      </div>
                      {node.summary && (
                        <Styled.ItemSummary className="t-copy-light">
                          {node.summary}
                        </Styled.ItemSummary>
                      )}
                      <Styled.ItemReadMore
                        as={ArrowLink}
                        label={t("common.read_more")}
                      />
                    </div>
                  </Styled.ItemLink>
                </NamedLink>
              </Styled.ListItem>
            ) : null
          )}
        </Styled.List>
        {slug && (
          <NamedLink route="collection" routeParams={{ slug }} passHref>
            <Button as="a">
              <span className="t-capitalize">
                {t("layouts.see_all_issues")}
              </span>
            </Button>
          </NamedLink>
        )}
      </Styled.SectionInner>
    </section>
  ) : null;
}

interface Props {
  /* CollectionConnection data */
  data?: FeaturedIssuesFragment$key | null;
  limit?: number;
}

type Node = FeaturedIssuesFragment$data["edges"][number];

const fragment = graphql`
  fragment FeaturedIssuesFragment on CollectionConnection {
    edges {
      node {
        title
        slug
        summary
        thumbnail {
          ...CoverImageFragment
        }
      }
    }
  }
`;
