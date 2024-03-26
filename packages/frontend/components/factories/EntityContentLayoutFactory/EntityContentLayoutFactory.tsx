import { Suspense } from "react";
import { graphql, readInlineData } from "relay-runtime";
import JournalContent from "components/composed/journal/JournalContent";
import ArticleText from "components/composed/article/ArticleText";
import ArticleContributor from "components/composed/article/ArticleContributor";
import HowToCite from "components/composed/article/HowToCite";
import { LoadingBlock } from "components/atomic";
import { EntityContentLayoutFactoryFragment$key } from "@/relay/EntityContentLayoutFactoryFragment.graphql";
import EntityOrderingLayoutFactory from "../EntityOrderingLayoutFactory";

export default function EntityContentLayoutFactory({ data, params }: Props) {
  const entity = readInlineData(fragment, data);

  switch (entity?.schemaDefinition?.identifier) {
    case "journal":
      return <JournalContent data={entity} />;

    case "article":
    case "journal_article":
    case "dissertation":
    case "paper":
      return (
        <Suspense fallback={<LoadingBlock />}>
          <ArticleText data={entity} />
          <ArticleContributor data={entity?.contributions} />
          <HowToCite data={entity} />
        </Suspense>
      );

    // By default, return the entity's layout and show ordering content
    default:
      return (
        <Suspense fallback={<LoadingBlock />}>
          {entity && (
            <EntityOrderingLayoutFactory data={entity} params={params} />
          )}
        </Suspense>
      );
  }
}

interface Props {
  data: EntityContentLayoutFactoryFragment$key | null;
  params: React.ComponentProps<typeof EntityOrderingLayoutFactory>["params"];
}

const fragment = graphql`
  fragment EntityContentLayoutFactoryFragment on AnyEntity @inline {
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
