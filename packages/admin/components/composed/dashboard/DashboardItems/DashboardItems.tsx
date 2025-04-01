import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import capitalize from "lodash/capitalize";
import { ContentHeader } from "components/layout";
import ModelList from "components/composed/model/ModelList";
import { ViewOptions } from "utils/view-options";
import ModelColumns from "components/composed/model/ModelColumns";
import ModelPagination from "components/composed/model/ModelPagination";
import ModelPageCountActions from "components/composed/model/ModelPageCountActions";
import { DashboardItemsFragment$key } from "@/relay/DashboardItemsFragment.graphql";
import {
  DashboardItemsListFragment$data,
  DashboardItemsListFragment$key,
} from "@/relay/DashboardItemsListFragment.graphql";

export default function DashboardItems({ data }: Props) {
  const queryData = useFragment(fragment, data);

  const items = useMaybeFragment<DashboardItemsListFragment$key>(
    listFragment,
    queryData.viewer.items,
  );

  const { t } = useTranslation();

  /** Columns */
  const columns = [
    ModelColumns.EntityThumbnailColumn<Node>(),
    ModelColumns.NameColumn<Node>({
      id: "title",
      accessorKey: "title",
      route: "item",
    }),
    ModelColumns.SchemaColumn<Node>(),
  ];

  return (
    <section>
      <ContentHeader
        headerStyle="secondary"
        title={capitalize(t("glossary.item_other"))}
      />
      <ModelPageCountActions data={items} />
      <ModelList<DashboardItemsListFragment$data, Node>
        view={ViewOptions.grid}
        columns={columns}
        data={items}
        modelName="item"
      />
      <ModelPagination data={items} />
    </section>
  );
}

interface Props {
  data: DashboardItemsFragment$key;
}

const fragment = graphql`
  fragment DashboardItemsFragment on Query
  @argumentDefinitions(
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: RECENT }
  ) {
    viewer {
      items(access: UPDATE, page: $page, order: $order, perPage: 10) {
        ...DashboardItemsListFragment
      }
    }
  }
`;

type Node = DashboardItemsListFragment$data["nodes"][number];

const listFragment = graphql`
  fragment DashboardItemsListFragment on ItemConnection {
    nodes {
      id
      title
      slug
      schemaVersion {
        name
        number
      }
      ...EntityThumbnailColumnFragment
    }
    ...ModelPageCountActionsFragment
    ...ModelPaginationFragment
  }
`;
