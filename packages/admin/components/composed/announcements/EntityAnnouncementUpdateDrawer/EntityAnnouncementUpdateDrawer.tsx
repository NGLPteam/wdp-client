import * as React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import EntityAnnouncementUpdateForm from "components/composed/announcements/EntityAnnouncementUpdateForm";
import Drawer from "components/layout/Drawer";
import { QueryWrapper } from "components/api";

import type { EntityAnnouncementUpdateDrawerQuery as Query } from "__generated__/EntityAnnouncementUpdateDrawerQuery.graphql";

export default function EntityAnnouncementUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  const { drawerSlug, drawerAnnouncementSlug } = params;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        entitySlug: drawerSlug,
        announcementSlug: drawerAnnouncementSlug,
      }}
    >
      {({ data }) => {
        const entity = data
          ? data.item ?? data.collection ?? data.community
          : undefined;
        return (
          <Drawer
            header={t("actions.edit.announcement_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {entity && (
              <EntityAnnouncementUpdateForm
                data={entity}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query EntityAnnouncementUpdateDrawerQuery(
    $entitySlug: Slug!
    $announcementSlug: Slug!
  ) {
    item(slug: $entitySlug) {
      ...EntityAnnouncementUpdateFormFragment
    }
    collection(slug: $entitySlug) {
      ...EntityAnnouncementUpdateFormFragment
    }
    community(slug: $entitySlug) {
      ...EntityAnnouncementUpdateFormFragment
    }
  }
`;
