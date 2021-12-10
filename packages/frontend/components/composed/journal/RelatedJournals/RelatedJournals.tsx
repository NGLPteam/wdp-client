import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./RelatedJournals.styles";
import {
  Button,
  NamedLink,
  CoverImage,
  PrecisionDate,
} from "components/atomic";
import {
  RelatedJournalsFragment$data,
  RelatedJournalsFragment$key,
} from "@/relay/RelatedJournalsFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function RelatedJournals({ data }: Props) {
  const entities = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return entities?.edges && entities.edges.length > 0 ? (
    <Styled.Section className="l-container-wide a-bg-neutral00">
      <Styled.HeaderBlock>
        <Styled.HeaderText className="t-capitalize">
          {t("layouts.related_journals_header")}
        </Styled.HeaderText>
        <p className="t-copy-sm a-color-lighter">{`Pharetra laoreet facilisis egestas gravida sit tortor ut. Velit
        consequat tempus eleifend elit sit eget ultrices. In blandit eget
        eros, tellus condimentum augue interdum sit tristique. Pharetra
        laoreet facilisis egestas gravida sit tortor ut. Velit consequat
        tempus eleifend elit sit eget ultrices. In blandit eget eros, tellus
        condimentum augue interdum sit tristique....`}</p>
      </Styled.HeaderBlock>
      <Styled.List>
        {/* The query should be limited to four results, but just in case it isn't... slicey dicey */}
        {entities.edges.slice(0, 4).map(({ node }: Node) =>
          node.target.__typename !== "%other" && node.target.slug ? (
            <Styled.ListItem key={node.target.slug}>
              <NamedLink
                route={getRouteByEntityType(node.target.__typename) || "home"}
                routeParams={{ slug: node.target.slug }}
                passHref
              >
                <Styled.ItemLink>
                  <Styled.ItemCover>
                    <CoverImage
                      data={node.target.thumbnail}
                      maxWidth={263}
                      maxHeight={280}
                      usePlaceholder
                      slug={node.target.slug}
                    />
                  </Styled.ItemCover>
                  <Styled.ItemText>
                    <h4>{node.target.title}</h4>
                    <div className="t-copy-sm a-color-lighter">
                      {node.target.published && (
                        <p>
                          <PrecisionDate
                            data={node.target.published}
                            label="common.published"
                          />
                        </p>
                      )}
                    </div>
                  </Styled.ItemText>
                </Styled.ItemLink>
              </NamedLink>
            </Styled.ListItem>
          ) : null
        )}
      </Styled.List>
      {slug && (
        <Styled.ButtonWrapper>
          <NamedLink route="collection" routeParams={{ slug }} passHref>
            <Button as="a">
              <span className="t-capitalize">
                {t("layouts.see_all_journals")}
              </span>
            </Button>
          </NamedLink>
        </Styled.ButtonWrapper>
      )}
    </Styled.Section>
  ) : null;
}

interface Props {
  /* EntityLinkConnection data */
  data?: RelatedJournalsFragment$key | null;
}

type Node = RelatedJournalsFragment$data["edges"][number];

const fragment = graphql`
  fragment RelatedJournalsFragment on EntityLinkConnection {
    edges {
      node {
        target {
          ... on Collection {
            __typename
            title
            slug
            published {
              ...PrecisionDateFragment
            }
            thumbnail {
              storage
              ...CoverImageFragment
            }
          }
          ... on Item {
            __typename
            title
            slug
            published {
              ...PrecisionDateFragment
            }
            thumbnail {
              storage
              ...CoverImageFragment
            }
          }
        }
      }
    }
  }
`;
