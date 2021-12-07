import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import * as Styled from "./FeaturedIssues.styles";
import { ArrowLink, PrecisionDate } from "components/atomic";
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
    <NamedLink route="collection" routeParams={{ slug: issue.slug }} passHref>
      <Styled.ItemLink>
        <Styled.ItemCoverBlock>
          <CoverImage data={issue.thumbnail} maxWidth={120} maxHeight={160} />
        </Styled.ItemCoverBlock>
        <div>
          <Styled.ItemTitleBlock>
            <h4>{issue.title}</h4>
            {/* <h5 className="t-copy-italic">Subtitle</h5> */}
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
            <p className="t-copy-italic t-copy-light">Secondary metadata</p>
          </div>
          {issue.summary && (
            <Styled.ItemSummary className="t-copy-light">
              {issue.summary}
            </Styled.ItemSummary>
          )}
          <Styled.ItemReadMore as={ArrowLink} label={t("common.read_more")} />
        </div>
      </Styled.ItemLink>
    </NamedLink>
  ) : null;
}

interface Props {
  /* Collection data */
  data?: FeaturedIssueFragment$key | null;
}

const fragment = graphql`
  fragment FeaturedIssueFragment on Collection {
    title
    slug
    summary
    thumbnail {
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
