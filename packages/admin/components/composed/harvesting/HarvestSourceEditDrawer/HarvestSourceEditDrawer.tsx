import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper, useDestroyer } from "hooks";
import { RouteHelper } from "routes";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
// import HarvestSourceUpdateForm from "components/composed/harvestSource/HarvestSourceUpdateForm";
import type {
  HarvestSourceEditDrawerQuery as Query,
  HarvestSourceEditDrawerQuery$data as Response,
} from "@/relay/HarvestSourceEditDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function HarvestSourceUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();
  const detailsRoute = RouteHelper.findRouteByName("harvestSource.details");

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  /* Render route and delete buttons */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Child routes - Collections, items, manage */
    const routes = detailsRoute
      ? [
          {
            route: detailsRoute.name,
            label: detailsRoute.label,
            query: { slug: drawerSlug },
          },
        ]
      : undefined;

    /* Delete button */
    const handleDelete = () => {
      if (data.harvestSource?.id) {
        destroy.harvestSource(
          { harvestSourceId: data.harvestSource.id },
          data.harvestSource?.name ?? t("glossary.harvestSource"),
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions routes={routes} handleDelete={handleDelete} />;
  }

  return (
    <LazyLoadQueryWrapper<Query> query={query} variables={{ slug: drawerSlug }}>
      {({ data }) => {
        return (
          <Drawer
            label={t("actions.edit.harvest_source")}
            header={
              data?.harvestSource?.name ?? t("actions.edit.harvest_source")
            }
            dialog={dialog}
            hideOnClickOutside={false}
            buttons={renderButtons(data)}
          >
            <div>edit form here</div>
          </Drawer>
        );
      }}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query HarvestSourceEditDrawerQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      id
      name
      identifier
      slug
      metadataFormat
      baseURL
      description
    }
  }
`;
