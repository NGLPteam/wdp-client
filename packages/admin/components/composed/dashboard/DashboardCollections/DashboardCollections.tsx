import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { OperationType } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ContentHeader } from "components/layout";
import ModelList from "components/composed/model/ModelList";
import { ViewOptions } from "utils/view-options";
import ModelColumns from "components/composed/model/ModelColumns";
import ModelPagination from "components/composed/model/ModelPagination";
import ModelPageCountActions from "components/composed/model/ModelPageCountActions";
import { DashboardCollectionsFragment$key } from "@/relay/DashboardCollectionsFragment.graphql";
import {
  DashboardCollectionsListFragment$data,
  DashboardCollectionsListFragment$key,
} from "@/relay/DashboardCollectionsListFragment.graphql";

export default function DashboardCollections({ data }: Props) {
  const queryData = useFragment(fragment, data);

  const collections = useMaybeFragment<DashboardCollectionsListFragment$key>(
    listFragment,
    queryData.viewer.collections,
  );

  const { t } = useTranslation();

  /** Columns */
  const columns = [
    ModelColumns.EntityThumbnailColumn<Node>(),
    ModelColumns.NameColumn<Node>({
      id: "title",
      accessorKey: "title",
      route: "collection",
    }),
    ModelColumns.SchemaColumn<Node>(),
  ];

  return (
    <section>
      <ContentHeader
        headerStyle="secondary"
        title={t("glossary.collection_plural")}
      />
      <ModelPageCountActions data={collections} />
      <ModelList<OperationType, DashboardCollectionsListFragment$data, Node>
        view={ViewOptions.grid}
        columns={columns}
        data={collections}
        modelName="collection"
      />
      <ModelPagination data={collections} />
    </section>
  );
}

interface Props {
  data: DashboardCollectionsFragment$key;
}

const fragment = graphql`
  fragment DashboardCollectionsFragment on Query
  @argumentDefinitions(
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: RECENT }
  ) {
    viewer {
      collections(page: $page, order: $order, perPage: 10) {
        ...DashboardCollectionsListFragment
      }
    }
  }
`;

type Node = DashboardCollectionsListFragment$data["nodes"][number];

const listFragment = graphql`
  fragment DashboardCollectionsListFragment on CollectionConnection {
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
