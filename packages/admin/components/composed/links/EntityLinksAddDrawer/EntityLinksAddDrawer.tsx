import * as React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "relay-runtime";
import EntityLinksAddForm from "components/composed/links/EntityLinksAddForm";
import Drawer from "components/layout/Drawer";
import { QueryWrapper } from "components/api";

import type { EntityLinksAddDrawerQuery as Query } from "__generated__/EntityLinksAddDrawerQuery.graphql";

export default function EntityLinksAddDrawer({
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
            header={t("actions.add.link_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {entity && (
              <EntityLinksAddForm
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
  query EntityLinksAddDrawerQuery($entitySlug: Slug!) {
    item(slug: $entitySlug) {
      ...EntityLinksAddFormFragment
    }
    collection(slug: $entitySlug) {
      ...EntityLinksAddFormFragment
    }
  }
`;
