import React, { useCallback } from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { ModelTableActionProps } from "react-table";
import usePagePosition from "./usePagePosition";
import {
  useDestroyer,
  useDrawerHelper,
  useMaybeFragment,
  useQueryStateContext,
} from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type { EntityPagesListFragment$key } from "@/relay/EntityPagesListFragment.graphql";
import type {
  EntityPagesListDataFragment,
  EntityPagesListDataFragment$key,
} from "@/relay/EntityPagesListDataFragment.graphql";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityPagesList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: EntityPagesListProps) {
  const { t } = useTranslation();
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const submitPagePosition = usePagePosition();
  const { retry } = useQueryStateContext();

  /* eslint-disable max-len */
  const sourceEntity = useMaybeFragment<EntityPagesListFragment$key>(
    fragment,
    data
  );
  const pagesData = useMaybeFragment<EntityPagesListDataFragment$key>(
    linksFragment,
    sourceEntity?.pages
  );
  /* eslint-enable max-len */

  /** Columns */
  const columns = [
    ModelColumns.PageHeroColumn<Node>(),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("lists.name_column")}</>,
      id: "title",
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("lists.slug_column")}</>,
      id: "slug",
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editPage", {
        drawerSlug: sourceEntity?.slug,
        drawerPageSlug: row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) =>
      destroy.page(
        { pageId: row.original.id },
        row.original.title || "glossary.page"
      ),
    handleView: ({ row }: ModelTableActionProps<Node>) => {
      const typeRoute =
        row.original.entity?.__typename === "Collection"
          ? "collections"
          : row.original.entity?.__typename === "items"
          ? "items"
          : "communities";

      return row.original.slug
        ? `/${typeRoute}/${row.original.entity?.slug}/page/${row.original.slug}`
        : null;
    },
  };

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addPage"
        drawerQuery={{
          drawerSlug: sourceEntity?.slug ? sourceEntity.slug : "",
        }}
        icon="plus"
        actions="self.update"
      >
        {t("actions.add.page")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  const handleDragEnd = useCallback(
    async (source: number, destination: number) => {
      const dragNode = pagesData?.edges[source]?.node;
      // Get the node that was dragged
      if (!dragNode) return;
      // Save the new position
      await submitPagePosition({
        destination: destination + 1,
        data: dragNode,
      });
      // Reload the list
      retry();
    },
    [retry, pagesData, submitPagePosition]
  );

  return (
    <ModelListPage<T, EntityPagesListDataFragment, Node>
      modelName={"page"}
      columns={columns}
      data={pagesData}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
      actions={actions}
      onDragEnd={handleDragEnd}
    />
  );
}

interface EntityPagesListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityPagesListFragment$key | null;
}

type Node = EntityPagesListDataFragment["edges"][number]["node"];

const linksFragment = graphql`
  fragment EntityPagesListDataFragment on PageConnection {
    edges {
      node {
        id
        title
        slug
        entity {
          __typename
          ... on Sluggable {
            slug
          }
        }
        ...usePagePositionFragment
        ...PageHeroColumnFragment
      }
    }
    ...ModelListPageFragment
  }
`;

const fragment = graphql`
  fragment EntityPagesListFragment on AnyEntity {
    ... on Community {
      slug
      pages(page: $page, perPage: 20) {
        ...EntityPagesListDataFragment
      }
    }
    ... on Collection {
      slug
      pages(page: $page, perPage: 20) {
        ...EntityPagesListDataFragment
      }
    }
    ... on Item {
      slug
      pages(page: $page, perPage: 20) {
        ...EntityPagesListDataFragment
      }
    }
  }
`;

export default EntityPagesList;
