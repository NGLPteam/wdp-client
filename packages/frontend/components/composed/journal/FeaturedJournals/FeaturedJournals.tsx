import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { NamedLink, useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { pxToRem } from "@wdp/lib/theme/functions";
import { useTranslation } from "react-i18next";
import * as Styled from "./FeaturedJournals.styles";
import { Button } from "components/atomic";
import CoverImage from "components/atomic/CoverImage";
import {
  FeaturedJournalsFragment$data,
  FeaturedJournalsFragment$key,
} from "@/relay/FeaturedJournalsFragment.graphql";

export default function FeaturedJournals({
  data,
  headerText,
  buttonText,
  buttonRoute,
}: Props) {
  const collections = useMaybeFragment(fragment, data);
  const coverHeight = collections?.edges.length === 5 ? 240 : 300;
  const style = {
    "--FeaturedJournals-cover-height": pxToRem(coverHeight),
  } as React.CSSProperties;
  const { t } = useTranslation();
  const slug = useRouteSlug();

  return collections && collections.edges.length > 0 ? (
    <Styled.Section className="a-bg-neutral00" style={style}>
      <h3 className="a-hidden">{t(headerText)}</h3>
      <Styled.List>
        {collections.edges.map(({ node }: Node, i) => (
          <Styled.ListItem
            key={node.slug}
            data-count={collections.edges.length}
          >
            <NamedLink
              route="collection"
              routeParams={{ slug: node.slug }}
              passHref
            >
              <Styled.ItemLink>
                <Styled.ItemCover
                  className={i % 2 === 0 ? "a-bg-neutral90" : "a-bg-neutral80"}
                >
                  <CoverImage
                    data={node.thumbnail}
                    maxWidth={300}
                    maxHeight={coverHeight}
                  />
                </Styled.ItemCover>
                <Styled.ItemTitle className="t-copy t-copy-medium">
                  {node.title}
                </Styled.ItemTitle>
                <Styled.ItemData className="t-copy-sm a-color-lighter">
                  {node.collections.pageInfo.totalCount ? (
                    <span>
                      {node.collections.pageInfo.totalCount} Collections,{" "}
                    </span>
                  ) : null}
                  {node.updatedAt && (
                    <span>
                      {t("common.last_updated", {
                        value: formatDate(node.updatedAt, "L/d/yy"),
                      })}
                    </span>
                  )}
                </Styled.ItemData>
              </Styled.ItemLink>
            </NamedLink>
          </Styled.ListItem>
        ))}
      </Styled.List>
      {slug && (
        <Styled.ButtonWrapper>
          <NamedLink route={buttonRoute} routeParams={{ slug }}>
            <Button as="a">{t(buttonText)}</Button>
          </NamedLink>
        </Styled.ButtonWrapper>
      )}
    </Styled.Section>
  ) : null;
}

interface Props {
  /* CollectionConnection data */
  data?: FeaturedJournalsFragment$key | null;
  /* Header text */
  headerText: string;
  /* The bottom button text */
  buttonText: string;
  /* Route for bottom button. Uses current slug for route params */
  buttonRoute: string;
}

type Node = FeaturedJournalsFragment$data["edges"][number];

const fragment = graphql`
  fragment FeaturedJournalsFragment on CollectionConnection {
    edges {
      node {
        title
        slug
        updatedAt
        thumbnail {
          ...CoverImageFragment
        }
        collections {
          pageInfo {
            totalCount
          }
        }
      }
    }
  }
`;
