import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayoutFactory from "../EntityLayoutFactory";
import EntityOrderingLayoutFactory from "../EntityOrderingLayoutFactory";
import JournalLayout from "components/composed/journal/JournalLayout";
import ArticleLayout from "components/composed/article/ArticleLayout";
import JournalContent from "components/composed/journal/JournalContent";
import ArticleText from "components/composed/article/ArticleText";
import ArticleContributor from "components/composed/article/ArticleContributor";
import HowToCite from "components/composed/article/HowToCite";
import { EntityContentLayoutFactoryFragment$key } from "@/relay/EntityContentLayoutFactoryFragment.graphql";
import EntityCitationMetaTags from "components/composed/entity/EntityCitationMetaTags";

export default function EntityContentLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  switch (entity?.schemaDefinition?.identifier) {
    case "journal":
      return (
        <JournalLayout data={entity}>
          <JournalContent data={entity} />
        </JournalLayout>
      );

    case "article":
    case "journal_article":
    case "dissertation":
    case "paper":
      return (
        <>
          <EntityCitationMetaTags data={entity} />
          <ArticleLayout data={entity}>
            <ArticleText data={entity} />
          </ArticleLayout>
          <ArticleContributor data={entity?.contributions} />
          <HowToCite data={entity} />
        </>
      );

    // By default, return the entity's layout and show ordering content
    default:
      return (
        <EntityLayoutFactory data={entity}>
          <EntityOrderingLayoutFactory data={entity} />
        </EntityLayoutFactory>
      );
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

      ...EntityLayoutFactoryFragment
      ...EntityOrderingLayoutFactoryFragment
      ...JournalLayoutFragment
      ...JournalContentFragment
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFactoryFragment
      ...EntityOrderingLayoutFactoryFragment
      ...ArticleLayoutFragment
      ...ArticleTextFragment
      ...HowToCiteFragment

      contributions {
        ...ArticleContributorFragment
      }
    }

    ...EntityCitationMetaTagsFragment
  }
`;
