import { graphql, readInlineData } from "relay-runtime";
import EntityPageLayout from "components/composed/entity/EntityPageLayout";
import IssuePageLayout from "components/composed/issue/IssuePageLayout";
import IssueSidebarNav from "components/composed/issue/IssueSidebarNav";
import { EntityPageLayoutFactoryFragment$key } from "@/relay/EntityPageLayoutFactoryFragment.graphql";

export default function EntityPageLayoutFactory({ data }: Props) {
  const entity = readInlineData(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal_issue":
      return (
        <IssueSidebarNav data={entity}>
          <IssuePageLayout data={entity.page} />
        </IssueSidebarNav>
      );

    default:
      return <EntityPageLayout data={entity.page} />;
  }
}

interface Props {
  data: EntityPageLayoutFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityPageLayoutFactoryFragment on AnyEntity @inline {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...IssueSidebarNavFragment

      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
        ...IssuePageLayoutFragment
      }
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
      }
    }
  }
`;
