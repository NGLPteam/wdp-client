import { graphql, readInlineData } from "relay-runtime";
import { getEntityVolumeNumberFragment$key } from "@/relay/getEntityVolumeNumberFragment.graphql";

export default function getEntityVolumeNumber(
  data: getEntityVolumeNumberFragment$key,
) {
  const entity = readInlineData(fragment, data);

  return entity?.vol?.number?.content
    ? entity.vol.number.content
    : entity?.volumeNumber?.content;
}

const fragment = graphql`
  fragment getEntityVolumeNumberFragment on AnyEntity @inline {
    ... on Collection {
      vol: ancestorByName(name: "volume") {
        ... on Collection {
          number: schemaProperty(fullPath: "id") {
            ... on StringProperty {
              content
            }
          }
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
