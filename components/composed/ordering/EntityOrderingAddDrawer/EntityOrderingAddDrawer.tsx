import * as React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import EntityOrderingAddForm from "components/composed/ordering/EntityOrderingAddForm";

import type { EntityOrderingAddDrawerQuery as Query } from "__generated__/EntityOrderingAddDrawerQuery.graphql";

export default function EntityOrderingAddDrawer({
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
        const entity = data ? data.item ?? data.collection : undefined;
        return (
          <Drawer
            label={t("actions.add.ordering")}
            header={t("drawers.addOrdering.title")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {entity && (
              <EntityOrderingAddForm
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
  query EntityOrderingAddDrawerQuery($entitySlug: Slug!) {
    item(slug: $entitySlug) {
      ...EntityOrderingAddFormFragment
    }
    collection(slug: $entitySlug) {
      ...EntityOrderingAddFormFragment
    }
  }
`;
