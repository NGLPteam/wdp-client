import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityOrderingLayoutFactory from "../EntityOrderingLayoutFactory";
import JournalContent from "components/composed/journal/JournalContent";
import ArticleText from "components/composed/article/ArticleText";
import ArticleContributor from "components/composed/article/ArticleContributor";
import HowToCite from "components/composed/article/HowToCite";
import { EntityContentLayoutFactoryFragment$key } from "@/relay/EntityContentLayoutFactoryFragment.graphql";

export default function EntityContentLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  switch (entity?.schemaDefinition?.identifier) {
    case "journal":
      return <JournalContent data={entity} />;

    case "article":
    case "journal_article":
    case "dissertation":
    case "paper":
      return (
        <>
          <ArticleText data={entity} />
          <ArticleContributor data={entity?.contributions} />
          <HowToCite data={entity} />
        </>
      );

    // By default, return the entity's layout and show ordering content
    default:
      return <EntityOrderingLayoutFactory data={entity} />;
  }
}

interface Props {
  data?: EntityContentLayoutFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityContentLayoutFactoryFragment on AnyEntity
  @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...EntityOrderingLayoutFactoryFragment
      ...JournalContentFragment
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFactoryFragment
      ...EntityOrderingLayoutFactoryFragment
      ...ArticleTextFragment
      ...HowToCiteFragment

      contributions {
        ...ArticleContributorFragment
      }
    }
  }
`;
