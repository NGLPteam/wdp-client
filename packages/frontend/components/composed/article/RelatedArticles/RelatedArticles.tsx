import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./RelatedArticles.styles";
import { PrecisionDate, NamedLink, Link } from "components/atomic";
import { RelatedArticlesFragment$key } from "@/relay/RelatedArticlesFragment.graphql";

export default function RelatedArticles({ data }: Props) {
  const { t } = useTranslation();
  const articles = useMaybeFragment(fragment, data);
  return articles?.edges.length ? (
    <Styled.Outer className="a-bg-custom10">
      <Styled.Inner className="l-container-wide">
        <h3 className="t-capitalize">{t("layouts.related_articles_header")}</h3>
        <Styled.List>
          {articles.edges.map((edge, i) => (
            <Styled.ListItem key={i}>
              <h4>
                <NamedLink
                  route={"item"}
                  routeParams={{ slug: edge.node.slug }}
                  passHref
                >
                  <Link>{edge.node.title}</Link>
                </NamedLink>
              </h4>
              <Styled.ItemMetadata className="t-copy-lighter">
                {edge.node.journal?.title && <p>{edge.node.journal.title}</p>}
                <p className="t-capitalize">
                  {edge.node.volumeId?.content && (
                    <Styled.VolumeIssue>
                      {t("schema.nglp.journal_volume")}{" "}
                      {edge.node.volumeId.content}
                    </Styled.VolumeIssue>
                  )}
                  {edge.node.issueId?.content && (
                    <Styled.VolumeIssue>
                      {t("schema.nglp.journal_issue")}{" "}
                      {edge.node.issueId.content}
                    </Styled.VolumeIssue>
                  )}
                </p>
                <PrecisionDate data={edge.node.published} />
              </Styled.ItemMetadata>
            </Styled.ListItem>
          ))}
        </Styled.List>
      </Styled.Inner>
    </Styled.Outer>
  ) : null;
}

type Props = {
  data?: RelatedArticlesFragment$key | null;
};

const fragment = graphql`
  fragment RelatedArticlesFragment on ItemConnection {
    edges {
      node {
        title
        slug
        published {
          ...PrecisionDateFragment
        }
        journal: ancestorOfType(schema: "nglp:journal") {
          ... on Collection {
            title
          }
        }
        volumeId: schemaProperty(fullPath: "volume.id") {
          ... on StringProperty {
            fullPath
            content
          }
        }

        issueId: schemaProperty(fullPath: "id") {
          ... on StringProperty {
            fullPath
            content
          }
        }
      }
    }
  }
`;
