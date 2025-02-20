import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDrawerHelper } from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  HarvestSourcesListFragment$data,
  HarvestSourcesListFragment$key,
} from "@/relay/HarvestSourcesListFragment.graphql";
import type { ModelTableActionProps } from "@tanstack/react-table";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestSourcesListFragment$key;
};

type HarvestSourceNode = HarvestSourcesListFragment$data["nodes"][number];

function HarvestSourcesList({ data, headerStyle, hideHeader }: Props) {
  const sourcesData =
    useFragment<HarvestSourcesListFragment$key>(fragment, data) ?? {};

  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  const columns = [
    ModelColumns.StringColumn<HarvestSourceNode>({
      id: "name",
      header: () => "Name",
    }),
    ModelColumns.StringColumn<HarvestSourceNode>({
      id: "metadataFormat",
      header: () => "Format",
    }),
    ModelColumns.StringColumn<HarvestSourceNode>({
      id: "harvestSets.pageInfo.totalCount",
      header: () => "Harvest Sets",
    }),
    ModelColumns.StringColumn<HarvestSourceNode>({
      id: "harvestRecords.pageInfo.totalCount",
      header: () => "Harvest Records",
    }),
    ModelColumns.StringColumn<HarvestSourceNode>({
      id: "baseURL",
      header: () => "URL",
    }),
    // ModelColumns.EmailColumn<HarvestSourceNode>(),
    // ModelColumns.BooleanColumn<HarvestSourceNode>({
    //   header: () => <>{t("lists.admin_column")}</>,
    //   id: "globalAdmin",
    //   enableSorting: true,
    // }),
    // ModelColumns.CreatedAtColumn<HarvestSourceNode>({ enableSorting: true }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<HarvestSourceNode>) => {
      drawerHelper.open("editHarvestSource", { drawerSlug: row.original.slug });
    },
  };

  return (
    <ModelListPage<HarvestSourcesListFragment$data["nodes"], HarvestSourceNode>
      modelName="harvest_source"
      columns={columns}
      data={sourcesData}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      actions={actions}
    />
  );
}

const fragment = graphql`
  fragment HarvestSourcesListFragment on HarvestSourceConnection {
    nodes {
      name
      identifier
      slug
      metadataFormat
      baseURL
      harvestSets {
        pageInfo {
          totalCount
        }
      }
      harvestRecords {
        pageInfo {
          totalCount
        }
      }
      description
    }
    ...ModelListPageFragment
  }
`;

export default HarvestSourcesList;
