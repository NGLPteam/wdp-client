import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayout from "components/composed/entity/EntityLayout";
import JournalLayout from "components/composed/journal/JournalLayout";
import ArticleLayout from "components/composed/article/ArticleLayout";
import JournalContent from "components/composed/journal/JournalContent";
import ArticleText from "components/composed/article/ArticleText";
import ArticleContributor from "components/composed/article/ArticleContributor";
import HowToCite from "components/composed/article/HowToCite";
import EntityContent from "components/composed/entity/EntityContent";
import IssueLayout from "components/composed/issue/IssueLayout";
import { EntityContentLayoutFactoryFragment$key } from "@/relay/EntityContentLayoutFactoryFragment.graphql";
import VolumeLayout from "components/composed/volume/VolumeLayout";
import SeriesLayout from "components/composed/series/SeriesLayout";

export default function EntityContentLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  switch (entity?.schemaDefinition?.identifier) {
    case "journal":
      return (
        <JournalLayout data={entity}>
          <JournalContent data={entity} />
        </JournalLayout>
      );

    case "issue":
    case "journal_issue":
      return (
        <IssueLayout data={entity}>
          <EntityContent data={entity} />
        </IssueLayout>
      );

    case "volume":
    case "journal_volume":
      return (
        <VolumeLayout data={entity}>
          <EntityContent data={entity} />
        </VolumeLayout>
      );

    case "series":
      return (
        <SeriesLayout data={entity}>
          <EntityContent data={entity} />
        </SeriesLayout>
      );

    case "article":
    case "journal_article":
    case "dissertation":
      return (
        <>
          <ArticleLayout data={entity}>
            <ArticleText data={entity} />
          </ArticleLayout>
          <ArticleContributor data={entity?.contributions} />
          <HowToCite data={entity} />
        </>
      );

    default:
      return (
        <EntityLayout data={entity}>
          <EntityContent data={entity} />
        </EntityLayout>
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

      ...EntityLayoutFragment
      ...EntityContentFragment
      ...JournalLayoutFragment
      ...JournalContentFragment
      ...IssueLayoutFragment
      ...VolumeLayoutFragment
      ...SeriesLayoutFragment
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...EntityContentFragment
      ...ArticleLayoutFragment
      ...ArticleTextFragment
      ...HowToCiteFragment

      contributions {
        ...ArticleContributorFragment
      }
    }
  }
`;
