import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink, useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./RelatedEntities.styles";
import { Button } from "components/atomic";
import CoverImage from "components/atomic/CoverImage";
import {
  RelatedEntitiesFragment$data,
  RelatedEntitiesFragment$key,
} from "@/relay/RelatedEntitiesFragment.graphql";
import { getRouteByEntityType } from "helpers";
import PrecisionDate from "components/atomic/PrecisionDate";

export default function RelatedEntities({
  data,
  headerText,
  bodyText,
  buttonText,
  buttonRoute,
}: Props) {
  const entities = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return entities?.edges && entities.edges.length > 0 ? (
    <Styled.Section className="l-container-wide a-bg-neutral00">
      <Styled.HeaderBlock>
        <Styled.HeaderText className="t-capitalize">
          {t(headerText)}
        </Styled.HeaderText>
        {bodyText && <p className="t-copy-sm a-color-lighter">{bodyText}</p>}
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
          <NamedLink route={buttonRoute} routeParams={{ slug }} passHref>
            <Button as="a">
              <span className="t-capitalize">{t(buttonText)}</span>
            </Button>
          </NamedLink>
        </Styled.ButtonWrapper>
      )}
    </Styled.Section>
  ) : null;
}

interface Props {
  /* EntityLinkConnection data */
  data?: RelatedEntitiesFragment$key | null;
  /* Header text */
  headerText: string;
  /* Header body text */
  bodyText?: string;
  /* The bottom button text */
  buttonText: string;
  /* Route for bottom button. Uses current slug for route params */
  buttonRoute: string;
}

type Node = RelatedEntitiesFragment$data["edges"][number];

const fragment = graphql`
  fragment RelatedEntitiesFragment on EntityLinkConnection {
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
              ...CoverImageFragment
            }
          }
        }
      }
    }
  }
`;
