import * as React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import EntityPageAddForm from "components/composed/pages/EntityPageAddForm";
import Drawer from "components/layout/Drawer";
import { QueryWrapper } from "components/api";

import type { EntityPageAddDrawerQuery as Query } from "__generated__/EntityPageAddDrawerQuery.graphql";

export default function EntityPageAddDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  const { drawerSlug } = params;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ entitySlug: drawerSlug }}
    >
      {({ data }) => {
        const entity = data
          ? data.item ?? data.collection ?? data.community
          : undefined;
        return (
          <Drawer
            header={t("actions.add.page_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {entity && (
              <EntityPageAddForm
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
  query EntityPageAddDrawerQuery($entitySlug: Slug!) {
    item(slug: $entitySlug) {
      ...EntityPageAddFormFragment
    }
    collection(slug: $entitySlug) {
      ...EntityPageAddFormFragment
    }
    community(slug: $entitySlug) {
      ...EntityPageAddFormFragment
    }
  }
`;
