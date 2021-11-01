import React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper, useDestroyer } from "hooks";
import { RouteHelper } from "routes";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import CommunityUpdateForm from "components/composed/community/CommunityUpdateForm";

import type {
  CommunityUpdateDrawerQuery as Query,
  CommunityUpdateDrawerQueryResponse as Response,
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
          data?.community?.title || t("glossary.community")
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions routes={routes} handleDelete={handleDelete} />;
  }

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ communitySlug: drawerSlug }}
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
    </QueryWrapper>
  );
}

const query = graphql`
  query CommunityUpdateDrawerQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      id
      title
      ...CommunityUpdateFormFragment
    }
  }
`;
