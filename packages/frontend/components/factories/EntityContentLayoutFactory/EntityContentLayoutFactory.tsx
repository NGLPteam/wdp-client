import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayout from "components/composed/entity/EntityLayout";
import JournalLayout from "components/composed/journal/JournalLayout";
import IssueLayout from "components/composed/issue/IssueLayout";
import ArticleLayout from "components/composed/article/ArticleLayout";
import { EntityContentLayoutFactoryFragment$key } from "@/relay/EntityContentLayoutFactoryFragment.graphql";
import JournalInfo from "components/composed/journal/JournalInfo";
import ArticleText from "components/composed/article/ArticleText";
import ArticleContributor from "components/composed/article/ArticleContributor";
import IssueContent from "components/composed/issue/IssueContent";
import IssueSidebarNav from "components/composed/issue/IssueSidebarNav";

export default function EntityContentLayoutFactory({ data, children }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal":
      return (
        <JournalLayout data={entity}>
          <JournalInfo data={entity} />
        </JournalLayout>
      );

    case "journal_issue":
      return (
        <IssueLayout data={entity}>
          <IssueSidebarNav data={entity}>
            <IssueContent data={entity} />
          </IssueSidebarNav>
        </IssueLayout>
      );

    case "article":
    case "journal_article":
      return (
        <>
          <ArticleLayout data={entity}>
            <ArticleText data={entity} />
          </ArticleLayout>
          <ArticleContributor data={entity?.contributions} />
        </>
      );

    default:
      return <EntityLayout data={entity}>{children}</EntityLayout>;
  }
}

interface Props {
  data?: EntityContentLayoutFactoryFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityContentLayoutFactoryFragment on AnyEntity {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...JournalLayoutFragment
      ...JournalInfoFragment
      ...IssueLayoutFragment
      ...IssueSidebarNavFragment
      ...IssueContentFragment
    }
    ... on Item {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFragment
      ...ArticleLayoutFragment
      ...ArticleTextFragment

      contributions {
        ...ArticleContributorFragment
      }
    }
  }
`;
