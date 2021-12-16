import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { MetadataProperty } from "components/layout";
import { ArticleIssueMetadataFragment$key } from "@/relay/ArticleIssueMetadataFragment.graphql";

export default function ArticleIssueMetadata({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return issue ? (
    <MetadataProperty label="Issue">
      {issue.issueTitleMeta ? (
        <>
          {issue.issueTitleMeta.content} <br />
        </>
      ) : issue.issueNumber ? (
        <div>Issue {issue.issueNumber.content}</div>
      ) : (
        "--"
      )}
      {issue.firstPage?.integerValue ? (
        <div>
          {issue.lastPage?.integerValue
            ? t("common.pages_first_last", {
                first: issue.firstPage.integerValue,
                last: issue.lastPage.integerValue,
              })
            : t("common.page_x", { value: issue.firstPage.integerValue })}
        </div>
      ) : null}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: ArticleIssueMetadataFragment$key | null;
}

const fragment = graphql`
  fragment ArticleIssueMetadataFragment on Item {
    issueTitleMeta: schemaProperty(fullPath: "issue.title") {
      ... on StringProperty {
        content
      }
    }
    issueNumber: schemaProperty(fullPath: "issue.number") {
      ... on StringProperty {
        content
      }
    }
    firstPage: schemaProperty(fullPath: "issue.fpage") {
      ... on IntegerProperty {
        integerValue
      }
    }
    lastPage: schemaProperty(fullPath: "issue.lpage") {
      ... on IntegerProperty {
        integerValue
      }
    }
  }
`;
