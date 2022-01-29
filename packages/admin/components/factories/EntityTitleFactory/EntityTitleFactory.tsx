import { graphql, useFragment } from "react-relay";
import { EntityTitleFactoryFragment$key } from "@/relay/EntityTitleFactoryFragment.graphql";

export default function EntityTitleFactory({ data }: Props) {
  const entity = useFragment(fragment, data);
  const ancestors = entity.namedAncestors?.map((node) => node.ancestor.title);

  switch (entity.schemaVersion.identifier) {
    case "journal_issue":
    case "journal_volume":
      return (
        <>
          `${ancestors ? [entity.title, ...ancestors].join(": ") : entity.title}
          `
        </>
      );
    default:
      return <>{entity.title}</>;
  }
}

interface Props {
  data: EntityTitleFactoryFragment$key;
}

const fragment = graphql`
  fragment EntityTitleFactoryFragment on Entity {
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
