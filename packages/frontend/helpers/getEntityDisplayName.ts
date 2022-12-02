import { graphql } from "relay-runtime";
import { readInlineData } from "react-relay";
import hasNumericIssueTitle from "./hasNumericIssueTitle";
import { getEntityDisplayNameFragment$key } from "@/relay/getEntityDisplayNameFragment.graphql";

export default function getEntityDisplayName(
  data: getEntityDisplayNameFragment$key
) {
  const entity = readInlineData(fragment, data);

  const hasNumericTitle = hasNumericIssueTitle(entity?.title);

  const vol = entity?.volumeNumber?.content;
  const volTitle = entity?.volume?.title
    ? entity?.volume?.title
    : vol
    ? `Volume ${vol}`
    : null;

  const issue = entity?.issueNumber?.content;
  const issueTitle = entity?.title
    ? entity?.title
    : issue
    ? `Issue ${issue}`
    : null;

  return volTitle && hasNumericTitle
    ? `${volTitle}, ${issueTitle}`
    : issueTitle;
}

const fragment = graphql`
  fragment getEntityDisplayNameFragment on AnyEntity @inline {
    ... on Collection {
      title
      volume: ancestorOfType(schema: "nglp:journal_volume") {
        ... on Collection {
          title
        }
      }
      issueNumber: schemaProperty(fullPath: "number") {
        ... on StringProperty {
          content
        }
      }
      volumeNumber: schemaProperty(fullPath: "volume.id") {
        ... on StringProperty {
          content
        }
      }
    }
  }
`;
