import * as React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import Drawer from "components/layout/Drawer";
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
        return (
          <Drawer
            header={t("actions.add.ordering_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {data && (
              <EntityOrderingAddForm
                data={data}
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
    ...EntityOrderingAddFormFragment
  }
`;
