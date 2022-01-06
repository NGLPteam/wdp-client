import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import * as Styled from "./FeaturedIssues.styles";
import { ArrowLink, PrecisionDate, NamedLink } from "components/atomic";
import CoverImage from "components/atomic/CoverImage";
import { FeaturedIssueFragment$key } from "@/relay/FeaturedIssueFragment.graphql";

export default function FeaturedIssue({ data }: Props) {
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
    <>
      {issue.thumbnail?.storage && (
        <NamedLink
          route="collection"
          routeParams={{ slug: issue.slug }}
          passHref
        >
          <Styled.ItemCoverLink>
            <CoverImage
              id={issue.id}
              title={issue.title}
              data={issue.thumbnail}
              maxWidth={120}
              maxHeight={160}
            />
          </Styled.ItemCoverLink>
        </NamedLink>
      )}
      <div>
        <Styled.ItemTitleBlock>
          <h4>
            <NamedLink
              route="collection"
              routeParams={{ slug: issue.slug }}
              passHref
            >
              <a>{issue.title}</a>
            </NamedLink>
          </h4>
          {issue.subtitle && (
            <h5 className="t-copy-italic">{issue.subtitle}</h5>
          )}
        </Styled.ItemTitleBlock>
        <div className="t-copy-sm">
          {issue.volume && <p>{issue.volume.title}</p>}
          <Styled.ItemPrimaryMetadata>
            {issueNumber && <li>{issueNumber}</li>}
            {issue.published.value && (
              <li>
                <PrecisionDate
                  data={issue.published}
                  label={t("common.published")}
                />
              </li>
            )}
          </Styled.ItemPrimaryMetadata>
          {/*<p className="t-copy-italic t-copy-light">Secondary metadata</p>*/}
        </div>
        {issue.summary && (
          <Styled.ItemSummary className="t-copy-light">
            {issue.summary}
          </Styled.ItemSummary>
        )}
        <NamedLink
          route="collection"
          routeParams={{ slug: issue.slug }}
          passHref
        >
          <Styled.ItemReadMore as={ArrowLink}>
            {t("common.read_more")}
          </Styled.ItemReadMore>
        </NamedLink>
      </div>
    </>
  ) : null;
}

interface Props {
  /* Collection data */
  data?: FeaturedIssueFragment$key | null;
}

const fragment = graphql`
  fragment FeaturedIssueFragment on Collection {
    id
    title
    subtitle
    slug
    summary
    thumbnail {
      storage
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
    properties: schemaProperties {
      ... on StringProperty {
        content
        path
      }
    }
  }
`;
