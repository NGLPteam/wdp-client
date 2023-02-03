import { graphql } from "relay-runtime";
import { readInlineData } from "react-relay";
import getEntityVolumeNumber from "./getEntityVolumeNumber";
import { getEntityDisplayNameFragment$key } from "@/relay/getEntityDisplayNameFragment.graphql";

export default function getEntityDisplayName(
  data: getEntityDisplayNameFragment$key
) {
  const entity = readInlineData(fragment, data);

  const vol = getEntityVolumeNumber(entity);

  const volTitle = entity?.volumeByName?.title
    ? entity?.volumeByName?.title
    : vol
    ? `Volume ${vol}`
    : null;

  const number = entity?.issueNumber?.content;
  const entityTitle = entity?.title
    ? entity?.title
    : number
    ? `Issue ${number}`
    : null;

  return volTitle ? `${volTitle}, ${entityTitle}` : entityTitle;
}

const fragment = graphql`
  fragment getEntityDisplayNameFragment on AnyEntity @inline {
    ... on Collection {
      title
      volumeByName: ancestorByName(name: "volume") {
        ... on Collection {
          title
        }
      }
      issueNumber: schemaProperty(fullPath: "number") {
        ... on StringProperty {
          content
        }
      }
    }

    ...getEntityVolumeNumberFragment
  }
`;
