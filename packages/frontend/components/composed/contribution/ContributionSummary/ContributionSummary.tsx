import React, { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ContributionSummary.styles";
import {
  ReadMoreLink,
  DotList,
  NamedLink,
  PrecisionDate,
  SquareThumbnail,
} from "components/atomic";
import { ContributionSummaryFragment$key } from "@/relay/ContributionSummaryFragment.graphql";
import { getRouteByEntityType } from "helpers";
import { ContributionSummaryEntityFragment$key } from "@/relay/ContributionSummaryEntityFragment.graphql";

export default function ContributionSummary({ data, showReadMore }: Props) {
  const contribution = useMaybeFragment(fragment, data);

  const entity = useMaybeFragment<ContributionSummaryEntityFragment$key>(
    entityFragment,
    contribution?.entity
  );

  const route = useMemo(() => {
    return entity?.__typename ? getRouteByEntityType(entity.__typename) : null;
  }, [entity]);

  return contribution && entity ? (
    <Styled.Wrapper>
      <Styled.Text>
        <Styled.Headers>
          {entity.title && entity.slug && route && (
            <h4>
              <NamedLink
                route={route}
                routeParams={{ slug: entity.slug }}
                passHref
              >
                <a>{entity.title}</a>
              </NamedLink>
            </h4>
          )}
          {entity.subtitle && (
            <h5 className="t-copy-italic t-copy-lighter">{entity.subtitle}</h5>
          )}
        </Styled.Headers>
        {entity.published?.value && (
          <Styled.Metadata>
            <DotList className="t-copy-sm t-copy-lighter">
              <li>{contribution.role}</li>
              <li>
                <PrecisionDate data={entity.published} />
              </li>
            </DotList>
          </Styled.Metadata>
        )}
        {entity.summary && (
          <Styled.Summary className="t-copy-lighter">
            {entity.summary}
          </Styled.Summary>
        )}
        {entity.slug && route && showReadMore && (
          <NamedLink route={route} routeParams={{ slug: entity.slug }} passHref>
            <ReadMoreLink className="t-label-sm" />
          </NamedLink>
        )}
      </Styled.Text>
      {entity.thumbnail.storage && route && entity.slug && (
        <NamedLink route={route} routeParams={{ slug: entity.slug }} passHref>
          <Styled.ThumbnailLink>
            <SquareThumbnail data={entity.thumbnail} />
          </Styled.ThumbnailLink>
        </NamedLink>
      )}
    </Styled.Wrapper>
  ) : null;
}

interface Props {
  data?: ContributionSummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment ContributionSummaryFragment on AnyContribution {
    ... on Contribution {
      role
    }
    ... on CollectionContribution {
      entity: collection {
        ...ContributionSummaryEntityFragment
      }
    }
    ... on ItemContribution {
      entity: item {
        ...ContributionSummaryEntityFragment
      }
    }
  }
`;

const entityFragment = graphql`
  fragment ContributionSummaryEntityFragment on Entity {
    __typename
    title
    subtitle
    thumbnail {
      storage
      ...SquareThumbnailFragment
    }

    ... on ReferencesGlobalEntityDates {
      published {
        value
        ...PrecisionDateFragment
      }
    }

    ... on Sluggable {
      slug
    }

    ... on Item {
      summary
    }

    ... on Collection {
      summary
    }
  }
`;
