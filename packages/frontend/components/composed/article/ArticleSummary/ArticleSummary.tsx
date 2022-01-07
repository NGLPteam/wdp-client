import React from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleSummary.styles";
import {
  DotList,
  NamedLink,
  PrecisionDate,
  ReadMoreLink,
  SquareThumbnail,
} from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import { ArticleSummaryFragment$key } from "@/relay/ArticleSummaryFragment.graphql";

export default function ArticleSummary({ data, showReadMore }: Props) {
  const article = useMaybeFragment(fragment, data);

  return article ? (
    <Styled.Wrapper>
      <Styled.Text>
        <Styled.Headers>
          {article.title && article.slug && (
            <h4>
              <NamedLink
                route="item"
                routeParams={{ slug: article.slug }}
                passHref
              >
                <a>{article.title}</a>
              </NamedLink>
            </h4>
          )}
          {article.subtitle && (
            <h5 className="t-copy-italic t-copy-lighter">{article.subtitle}</h5>
          )}
        </Styled.Headers>
        <Styled.Metadata>
          {article.contributions && (
            <div className="t-copy-sm t-copy-medium">
              <ContributorsList data={article.contributions} />
            </div>
          )}
          <DotList className="t-copy-sm t-copy-lighter">
            {article.published && (
              <li>
                <PrecisionDate data={article.published} />
              </li>
            )}
          </DotList>
        </Styled.Metadata>
        {article.summary && (
          <Styled.Summary className="t-copy-lighter">
            {article.summary}
          </Styled.Summary>
        )}
        {article.slug && showReadMore && (
          <NamedLink route="item" routeParams={{ slug: article.slug }} passHref>
            <ReadMoreLink className="t-label-sm" />
          </NamedLink>
        )}
      </Styled.Text>
      {article.thumbnail.storage && article.slug && (
        <NamedLink route="item" routeParams={{ slug: article.slug }} passHref>
          <Styled.ThumbnailLink>
            <SquareThumbnail data={article.thumbnail} />
          </Styled.ThumbnailLink>
        </NamedLink>
      )}
    </Styled.Wrapper>
  ) : null;
}

interface Props {
  data?: ArticleSummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment ArticleSummaryFragment on Entity {
    __typename
    title
    subtitle
    thumbnail {
      storage
      ...SquareThumbnailFragment
    }

    ... on ReferencesGlobalEntityDates {
      published {
        ...PrecisionDateFragment
      }
    }

    ... on Sluggable {
      slug
    }

    ... on ChildEntity {
      summary
    }

    ... on Item {
      contributions {
        ...ContributorsListFragment
      }
    }
  }
`;
