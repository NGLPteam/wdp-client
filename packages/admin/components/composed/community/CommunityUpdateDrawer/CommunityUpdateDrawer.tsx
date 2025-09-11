import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper, useDestroyer } from "hooks";
import { useViewerContext } from "contexts";
import { RouteHelper } from "routes";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import CommunityUpdateForm from "components/composed/community/CommunityUpdateForm";
import EntityPurgeModal from "components/composed/entity/EntityPurgeModal";
import ClearEntityCacheButton from "components/atomic/buttons/ButtonControl/patterns/ButtonControlClearEntityCache";
import type { DialogProps } from "reakit/Dialog";

import type {
  CommunityUpdateDrawerQuery as Query,
  CommunityUpdateDrawerQuery$data as Response,
} from "__generated__/CommunityUpdateDrawerQuery.graphql";

export default function CommunityUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();
  const route = RouteHelper.findRouteByName("community");

  const { globalAdmin } = useViewerContext();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  /* Render route and delete buttons */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Child routes - Collections, items, manage */
    const routes = route?.routes?.map((route) => ({
      route: route.name,
      label: route.label,
      query: { slug: drawerSlug },
    }));

    /* Delete button */
    const handleDelete = () => {
      if (data.community) {
        destroy.community(
          { communityId: data.community.id },
          data?.community?.title || t("glossary.community"),
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    const purgeButton = data?.community ? (
      <EntityPurgeModal
        id={data.community.id}
        title={data.community.title}
        entityType="community"
        handleDelete={handleDelete}
        afterPurge={() => {
          if (dialog?.hide) dialog.hide();
        }}
      />
    ) : null;

    return (
      <DrawerActions
        routes={routes}
        allowedActions={data?.community?.allowedActions}
        clearCacheButton={<ClearEntityCacheButton id={data?.community?.id} />}
        {...(globalAdmin ? { purgeButton } : { handleDelete })}
      />
    );
  }

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ communitySlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.community")}
          header={data?.community?.title || t("actions.edit.community")}
          dialog={dialog}
          hideOnClickOutside={false}
          buttons={renderButtons(data)}
        >
          {data && data.community && (
            <CommunityUpdateForm
              data={data.community}
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
            />
          )}
        </Drawer>
      )}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query CommunityUpdateDrawerQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      id
      title
      ...CommunityUpdateFormFragment
      allowedActions
    }
  }
`;
