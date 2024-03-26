import { graphql, readInlineData } from "relay-runtime";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";
import { getSchemaTranslationKey } from "helpers/translations";
import BrowseListLayout from "components/layout/BrowseListLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import {
  EntityDescendantsLayoutFragment$data,
  EntityDescendantsLayoutFragment$key,
} from "@/relay/EntityDescendantsLayoutFragment.graphql";
import EntityDescendantOrderSelect from "../EntityDescendantOrderSelect";

export default function EntityDescendantsLayout({ data, schema }: Props) {
  const decendants = readInlineData(fragment, data);

  return decendants ? (
    <BrowseListLayout
      data={decendants.pageInfo}
      header={[getSchemaTranslationKey(schema), { count: 2 }]}
      orderComponent={<EntityDescendantOrderSelect />}
      items={decendants.edges.map(({ node: { descendant } }: Node) => (
        <EntitySummaryFactory key={descendant.slug} data={descendant} />
      ))}
    />
  ) : (
    <LoadingBlock />
  );
}

interface Props {
  data: EntityDescendantsLayoutFragment$key | null;
  schema: string;
}

type Node = EntityDescendantsLayoutFragment$data["edges"][number];

const fragment = graphql`
  fragment EntityDescendantsLayoutFragment on EntityDescendantConnection
  @inline {
    edges {
      node {
        descendant {
          ... on Sluggable {
            slug
          }
          ... on Entity {
            ...EntitySummaryFactoryFragment @arguments(showJournal: true)
          }
        }
      }
    }
    pageInfo {
      ...BrowseListLayoutFragment
    }
  }
`;
