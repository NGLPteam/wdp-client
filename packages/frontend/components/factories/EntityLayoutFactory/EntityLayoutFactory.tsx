import { graphql, readInlineData } from "relay-runtime";
import EntityLayout from "components/composed/entity/EntityLayout";
import JournalLayout from "components/composed/journal/JournalLayout";
import IssueLayout from "components/composed/issue/IssueLayout";
import ArticleLayout from "components/composed/article/ArticleLayout";
import VolumeLayout from "components/composed/volume/VolumeLayout";
import SeriesLayout from "components/composed/series/SeriesLayout";
import { EntityLayoutFactoryFragment$key } from "@/relay/EntityLayoutFactoryFragment.graphql";

export default function EntityLayoutFactory({ data, children }: Props) {
  const entity = readInlineData(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal":
      return <JournalLayout data={entity}>{children}</JournalLayout>;

    case "journal_volume":
      return <VolumeLayout data={entity}>{children}</VolumeLayout>;

    case "journal_issue":
      return <IssueLayout data={entity}>{children}</IssueLayout>;

    case "article":
    case "journal_article":
    case "dissertation":
    case "paper":
      return <ArticleLayout data={entity}>{children}</ArticleLayout>;

    case "series":
      return <SeriesLayout data={entity}>{children}</SeriesLayout>;

    default:
      return <EntityLayout data={entity}>{children}</EntityLayout>;
  }
}

interface Props {
  data: EntityLayoutFactoryFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityLayoutFactoryFragment on AnyEntity @inline {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...JournalLayoutFragment
      ...IssueLayoutFragment
      ...VolumeLayoutFragment
      ...SeriesLayoutFragment
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...ArticleLayoutFragment
    }
  }
`;
