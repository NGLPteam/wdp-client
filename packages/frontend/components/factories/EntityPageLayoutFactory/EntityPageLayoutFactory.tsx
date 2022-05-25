import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { EntityPageLayoutFactoryFragment$key } from "@/relay/EntityPageLayoutFactoryFragment.graphql";
import EntityPageLayout from "components/composed/entity/EntityPageLayout";
import IssuePageLayout from "components/composed/issue/IssuePageLayout";
import IssueSidebarNav from "components/composed/issue/IssueSidebarNav";
import { LoadingBlock } from "components/atomic";

export default function EntityPageLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);
  const { loading } = usePageContext();

  if (loading) return <LoadingBlock />;

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
  data?: EntityPageLayoutFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityPageLayoutFactoryFragment on AnyEntity {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...IssueSidebarNavFragment
      ...EntityLayoutFactoryFragment

      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
        ...IssuePageLayoutFragment
      }
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFactoryFragment

      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
      }
    }
  }
`;
