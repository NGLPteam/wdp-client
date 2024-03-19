// import { graphql } from "react-relay";
import { readInlineData, graphql } from "relay-runtime";
import { getEntityDisplayNameFragment$key } from "@/relay/getEntityDisplayNameFragment.graphql";
import getEntityVolumeNumber from "./getEntityVolumeNumber";

export default function getEntityDisplayName(
  data: getEntityDisplayNameFragment$key,
) {
  const entity = readInlineData(fragment, data);

  const vol = getEntityVolumeNumber(entity);

  const volTitle = entity?.vol?.title
    ? entity?.vol?.title
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
      vol: ancestorByName(name: "volume") {
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
