import { graphql, readInlineData } from "relay-runtime";
import { getEntityTitleFragment$key } from "@/relay/getEntityTitleFragment.graphql";

export default function getEntityTitle(data: Props) {
  const entity = readInlineData(fragment, data);

  const ancestors = entity.namedAncestors?.map((node) => node.ancestor.title);

  switch (entity.schemaVersion.identifier) {
    case "journal_issue":
    case "journal_volume":
      return `${
        ancestors ? [entity.title, ...ancestors].join(": ") : entity.title
      }`;
    default:
      return entity.title;
  }
}

type Props = getEntityTitleFragment$key;

const fragment = graphql`
  fragment getEntityTitleFragment on Entity @inline {
    __typename
    title
    schemaVersion {
      identifier
    }

    ... on Collection {
      namedAncestors {
        ancestor {
          ... on Entity {
            title
          }
        }
      }
    }

    ... on Item {
      namedAncestors {
        ancestor {
          ... on Entity {
            title
          }
        }
      }
    }
  }
`;
