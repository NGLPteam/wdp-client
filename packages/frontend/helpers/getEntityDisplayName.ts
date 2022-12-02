import { graphql } from "relay-runtime";
import { readInlineData } from "react-relay";
import hasNumericIssueTitle from "./hasNumericIssueTitle";
import { getEntityDisplayNameFragment$key } from "@/relay/getEntityDisplayNameFragment.graphql";
import getEntityVolumeNumber from "./getEntityVolumeNumber";

export default function getEntityDisplayName(
  data: getEntityDisplayNameFragment$key
) {
  const entity = readInlineData(fragment, data);

  const hasNumericTitle = hasNumericIssueTitle(entity?.title);

  const vol = getEntityVolumeNumber(entity);

  const volTitle = entity?.volume?.title
    ? entity?.volume?.title
    : vol
    ? `Volume ${vol}`
    : null;

  const number = entity?.issueNumber?.content;
  const entityTitle = entity?.title
    ? entity?.title
    : number
    ? `Issue ${number}`
    : null;

  return volTitle && hasNumericTitle
    ? `${volTitle}, ${entityTitle}`
    : entityTitle;
}

const fragment = graphql`
  fragment getEntityDisplayNameFragment on AnyEntity @inline {
    ... on Collection {
      title
      volume: ancestorByName(name: "volume") {
        ... on Collection {
          title
        }
      }
      issueNumber: schemaProperty(fullPath: "number") {
        ... on StringProperty {
          content
        }
      }
      ...getEntityVolumeNumberFragment
    }
  }
`;
