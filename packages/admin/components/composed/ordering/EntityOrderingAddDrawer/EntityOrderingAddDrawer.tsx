import * as React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import Drawer from "components/layout/Drawer";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import EntityOrderingAddForm from "components/composed/ordering/EntityOrderingAddForm";
import type { DialogProps } from "reakit/Dialog";

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
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ entitySlug: drawerSlug }}
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
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query EntityOrderingAddDrawerQuery($entitySlug: Slug!) {
    ...EntityOrderingAddFormFragment
  }
`;
