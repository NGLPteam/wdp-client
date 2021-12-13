import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ArticleIssueMetadataFragment$key } from "@/relay/ArticleIssueMetadataFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function ArticleIssueMetadata({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

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
          Pages {issue.firstPage.integerValue}
          {issue.lastPage?.integerValue && ` - ${issue.lastPage.integerValue}`}
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
