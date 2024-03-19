import { readInlineData, graphql } from "relay-runtime";
import { getEntityDisplayNumberFragment$key } from "@/relay/getEntityDisplayNumberFragment.graphql";
import getEntityVolumeNumber from "./getEntityVolumeNumber";

export default function getEntityDisplayNumber(
  data: getEntityDisplayNumberFragment$key,
) {
  const entity = readInlineData(fragment, data);

  const vol = getEntityVolumeNumber(entity);

  const number = entity?.issueNumber?.content;

  return vol ? `Vol. ${vol}, No. ${number}` : number ? `No. ${number}` : null;
}

const fragment = graphql`
  fragment getEntityDisplayNumberFragment on AnyEntity @inline {
    ... on Collection {
      issueNumber: schemaProperty(fullPath: "number") {
        ... on StringProperty {
          content
        }
      }
      ...getEntityVolumeNumberFragment
    }
  }
`;
