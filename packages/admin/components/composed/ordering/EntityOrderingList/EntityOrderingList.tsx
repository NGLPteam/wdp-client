import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { OperationType } from "relay-runtime";
import type { ModelTableActionProps } from "react-table";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";
import { EntityOrderingListFragment$key } from "@/relay/EntityOrderingListFragment.graphql";
import {
  EntityOrderingListDataFragment,
  EntityOrderingListDataFragment$key,
} from "@/relay/EntityOrderingListDataFragment.graphql";
import { PageHeader } from "components/layout";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityOrderingList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: Props) {
  const { t } = useTranslation();

  const destroy = useDestroyer();

  const drawerHelper = useDrawerHelper();

  /* Get the order data */
  const sourceEntity = useMaybeFragment<EntityOrderingListFragment$key>(
    fragment,
    data
  );

  const collectionOrderings = useMaybeFragment<EntityOrderingListDataFragment$key>(
    orderingsfragment,
    sourceEntity?.orderings
  );

  /* Set the table columns */
  const columns = [
    ModelColumns.StringColumn<EntityOrderingNode>({
      Header: <>{t("lists.name_column")}</>,
      id: "name",
    }),
    ModelColumns.BooleanColumn<EntityOrderingNode>({
      Header: <>{t("lists.inherited_from_schema_column")}</>,
      id: "inheritedFromSchema",
    }),
    ModelColumns.BooleanColumn<EntityOrderingNode>({
      Header: <>{t("lists.disabled_column")}</>,
      id: "disabled",
    }),
    ModelColumns.CreatedAtColumn<EntityOrderingNode>(),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleDelete: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      destroy.ordering(
        { orderingId: row.original.id },
        row.original.name || "glossary.ordering"
      ),
    handleEdit: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      drawerHelper.open("editOrdering", {
        drawerSlug: sourceEntity?.slug || "",
        drawerIdentifier: row.original.identifier || "",
      }),
  };
  /* eslint-enable no-console */

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addOrdering"
        drawerQuery={{
          drawerSlug: sourceEntity?.slug,
        }}
        icon="plus"
        actions="self.update"
      >
        {t("actions.add.ordering")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, EntityOrderingListDataFragment, EntityOrderingNode>
      modelName="ordering"
      columns={columns}
      data={collectionOrderings}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      actions={actions}
      buttons={buttons}
    />
  );
}

type EntityOrderingNode = EntityOrderingListDataFragment["edges"][number]["node"];

interface Props extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityOrderingListFragment$key;
}

export default EntityOrderingList;

const orderingsfragment = graphql`
  fragment EntityOrderingListDataFragment on OrderingConnection {
    edges {
      node {
        id
        name
        slug
        inheritedFromSchema
        disabled
        createdAt
        identifier
      }
    }
    ...ModelListPageFragment
  }
`;

const fragment = graphql`
  fragment EntityOrderingListFragment on AnyEntity {
    ... on Item {
      slug
      orderings(page: $page) {
        ...EntityOrderingListDataFragment
      }
    }
    ... on Collection {
      slug
      orderings(page: $page) {
        ...EntityOrderingListDataFragment
      }
    }
  }
`;
