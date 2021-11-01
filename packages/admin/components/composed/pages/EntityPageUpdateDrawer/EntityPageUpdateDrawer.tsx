import * as React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import EntityPageUpdateForm from "components/composed/pages/EntityPageUpdateForm";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";

import type { EntityPageUpdateDrawerQuery as Query } from "__generated__/EntityPageUpdateDrawerQuery.graphql";

export default function EntityPageUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  const { drawerSlug, drawerPageSlug } = params;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ entitySlug: drawerSlug, pageSlug: drawerPageSlug }}
    >
      {({ data }) => {
        const entity = data
          ? data.item ?? data.collection ?? data.community
          : undefined;
        return (
          <Drawer
            label={t("actions.edit.page")}
            header={t("actions.edit.page_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {entity && (
              <EntityPageUpdateForm
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
  query EntityPageUpdateDrawerQuery($entitySlug: Slug!, $pageSlug: String!) {
    item(slug: $entitySlug) {
      ...EntityPageUpdateFormFragment
    }
    collection(slug: $entitySlug) {
      ...EntityPageUpdateFormFragment
    }
    community(slug: $entitySlug) {
      ...EntityPageUpdateFormFragment
    }
  }
`;
