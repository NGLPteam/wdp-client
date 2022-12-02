import { graphql, readInlineData } from "relay-runtime";
import { getEntityDisplayNumberFragment$key } from "@/relay/getEntityDisplayNumberFragment.graphql";

export default function getEntityDisplayNumber(
  data?: getEntityDisplayNumberFragment$key | null
) {
  if (!data) return;

  const entity = readInlineData(fragment, data);

  const vol = entity?.volume?.number?.content
    ? entity.volume.number.content
    : entity?.volumeNumber?.content;
  console.info("vol", vol);

  const issue = entity?.issueNumber?.content;

  return vol ? `Vol. ${vol}, No. ${issue}` : issue ? `No. ${issue}` : null;
}

const fragment = graphql`
  fragment getEntityDisplayNumberFragment on AnyEntity @inline {
    ... on Collection {
      volume: ancestorOfType(schema: "nglp:journal_volume") {
        ... on Collection {
          title
          number: schemaProperty(fullPath: "volume.id") {
            ... on StringProperty {
              content
            }
          }
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
