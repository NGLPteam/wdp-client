import React from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { ModelTableActionProps } from "react-table";
import { useDestroyer, useDrawerHelper, useMaybeFragment } from "hooks";
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

  return (
    <ModelListPage<T, EntityPagesListDataFragment, Node>
      modelName={"page"}
      columns={columns}
      data={pagesData}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
      actions={actions}
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
        thumbnail: heroImage {
          image: medium {
            png {
              url
              height
              width
              alt
            }
          }
        }
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
