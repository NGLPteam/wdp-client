import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper, useDestroyer } from "hooks";
// import { RouteHelper } from "routes";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import HarvestMappingEditForm from "components/composed/harvesting/HarvestMappingEditForm";
import type {
  HarvestMappingEditDrawerQuery as Query,
  HarvestMappingEditDrawerQuery$data as Response,
} from "@/relay/HarvestMappingEditDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function HarvestMappingUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  const { drawerSlug } = params ?? {};

  if (!drawerSlug) {
    drawerHelper.close();
    return null;
  }

  /* Render route and delete buttons */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Delete button */
    const handleDelete = () => {
      if (data.harvestMapping?.id) {
        destroy.harvestMapping({ harvestMappingId: data.harvestMapping?.id });
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions handleDelete={handleDelete} />;
  }

  return (
    <LazyLoadQueryWrapper<Query> query={query} variables={{ slug: drawerSlug }}>
      {({ data }) => {
        return (
          <Drawer
            label={t("actions.edit.harvest_mapping")}
            header={t("actions.edit.harvest_mapping")}
            dialog={dialog}
            hideOnClickOutside={false}
            buttons={renderButtons(data)}
          >
            {data?.harvestMapping && (
              <HarvestMappingEditForm
                data={data.harvestMapping}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query HarvestMappingEditDrawerQuery($slug: Slug!) {
    harvestMapping(slug: $slug) {
      id
      ...HarvestMappingEditFormFragment
    }
  }
`;
