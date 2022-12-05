import { graphql } from "relay-runtime";
import { readInlineData } from "react-relay";
import hasNumericIssueTitle from "./hasNumericIssueTitle";
import getEntityVolumeNumber from "./getEntityVolumeNumber";
import { getEntityDisplayNameFragment$key } from "@/relay/getEntityDisplayNameFragment.graphql";

export default function getEntityDisplayName(
  data: getEntityDisplayNameFragment$key
) {
  const entity = readInlineData(fragment, data);

  const hasNumericTitle = hasNumericIssueTitle(entity?.title);

  const vol = getEntityVolumeNumber(entity);

  const volTitle = vol ? `Vol ${vol}` : null;

  const number = entity?.issueNumber?.content;
  const entityTitle = number ? `No. ${number}` : entity?.title;

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
