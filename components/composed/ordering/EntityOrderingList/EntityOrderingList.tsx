import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { OperationType } from "relay-runtime";
import { useMaybeFragment } from "hooks";
import {
  EntityOrderingListFragment,
  EntityOrderingListFragment$key,
} from "@/relay/EntityOrderingListFragment.graphql";
import { PageHeader } from "components/layout";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityOrderingList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: Props) {
  const { t } = useTranslation();
  /* Get the order data */
  /* eslint-disable max-len */
  const collectionOrderings = useMaybeFragment<EntityOrderingListFragment$key>(
    fragment,
    data
  );
  /* eslint-enable max-len */

  /* Set the table columns */
  const columns = [
    ModelColumns.StringColumn<EntityOrderingNode>({
      Header: <>{t("columns.name")}</>,
      id: "name",
    }),
  ];

  return (
    <ModelListPage<T, EntityOrderingListFragment, EntityOrderingNode>
      modelName="ordering"
      columns={columns}
      data={collectionOrderings}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

type EntityOrderingNode = EntityOrderingListFragment["nodes"][number];

interface Props extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityOrderingListFragment$key;
}

export default EntityOrderingList;

const fragment = graphql`
  fragment EntityOrderingListFragment on OrderingConnection {
    nodes {
      id
      name
      slug
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;
