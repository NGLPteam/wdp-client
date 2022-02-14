import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import * as Styled from "./IssueSummary.styles";
import {
  ReadMoreLink,
  PrecisionDate,
  NamedLink,
  CoverImage,
  Link,
} from "components/atomic";
import { IssueSummaryFragment$key } from "@/relay/IssueSummaryFragment.graphql";

export default function IssueSummary({ data, showReadMore }: Props) {
  const issue = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  const issueNumber = useMemo(() => {
    if (!issue) return null;

    const prop = issue?.properties.find((p) => p.path === "number");
    const numberString = startCase(
      `${t("schema.nglp.journal_issue")} ${prop?.content}`
    );
    return prop?.content &&
      issue.title.toLocaleLowerCase() !== numberString.toLocaleLowerCase()
      ? numberString
      : null;
  }, [issue, t]);

  return issue ? (
    <Styled.Wrapper>
      <NamedLink route="collection" routeParams={{ slug: issue.slug }} passHref>
        <Styled.ItemCoverLink>
          <CoverImage
            id={issue.id}
            title={issue.title}
            data={issue.cover}
            maxWidth={120}
            maxHeight={160}
          />
        </Styled.ItemCoverLink>
      </NamedLink>
      <Styled.ItemTextBlock>
        <Styled.ItemTitleBlock>
          <h4>
            <NamedLink
              route="collection"
              routeParams={{ slug: issue.slug }}
              passHref
            >
              <Link>{issue.title}</Link>
            </NamedLink>
          </h4>
          {issue.subtitle && (
            <h5 className="t-copy-italic">{issue.subtitle}</h5>
          )}
        </Styled.ItemTitleBlock>
        <div className="t-copy-sm">
          {issueNumber && <p>{issueNumber}</p>}
          {issue.volume && <p>{issue.volume.title}</p>}
          <Styled.ItemPrimaryMetadata>
            {issue.journal && <li>{issue.journal.title}</li>}
            {issue.published.value && (
              <li>
                <PrecisionDate
                  data={issue.published}
                  label={t("common.published")}
                />
              </li>
            )}
          </Styled.ItemPrimaryMetadata>
          {issue.articles.pageInfo && (
            <p className="t-copy-italic t-copy-light t-capitalize">
              {issue.articles.pageInfo.totalCount}{" "}
              {t("schema.nglp.journal_article", {
                count: issue.articles.pageInfo.totalCount,
              })}
            </p>
          )}
        </div>
        {issue.summary && (
          <Styled.ItemSummary className="t-copy-light">
            {issue.summary}
          </Styled.ItemSummary>
        )}
        {showReadMore && (
          <NamedLink
            route="collection"
            routeParams={{ slug: issue.slug }}
            passHref
          >
            <Styled.ItemReadMore as={ReadMoreLink} />
          </NamedLink>
        )}
      </Styled.ItemTextBlock>
    </Styled.Wrapper>
  ) : null;
}

interface Props {
  /* Collection data */
  data?: IssueSummaryFragment$key | null;
  showReadMore?: boolean;
}

const fragment = graphql`
  fragment IssueSummaryFragment on Collection
  @argumentDefinitions(showJournal: { type: "Boolean", defaultValue: false }) {
    id
    title
    subtitle
    slug
    summary
    cover: thumbnail {
      ...CoverImageFragment
    }
    published {
      value
      ...PrecisionDateFragment
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Collection {
        title
      }
    }
    journal: ancestorOfType(schema: "nglp:journal") @include(if: $showJournal) {
      ... on Collection {
        title
      }
    }
    properties: schemaProperties {
      ... on StringProperty {
        content
        path
      }
    }
    articles: items(schema: "nglp:journal_article") {
      pageInfo {
        totalCount
      }
    }
  }
`;
