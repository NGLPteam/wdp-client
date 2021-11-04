import * as React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import Drawer from "components/layout/Drawer";
import CollectionAddForm from "components/composed/collection/CollectionAddForm";
import QueryWrapper from "components/api/QueryWrapper";

import type { CollectionAddDrawerQuery as Query } from "@/relay/CollectionAddDrawerQuery.graphql";

export default function CollectionAddDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { drawerSlug } = params;
  const { t } = useTranslation();

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ parentSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          dialog={dialog}
          hideOnClickOutside={false}
          label={t("actions.add.collection")}
          header={t("actions.add.collection_header")}
        >
          {data && (
            <CollectionAddForm
              data={data}
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
  query CollectionAddDrawerQuery($parentSlug: Slug!) {
    ...CollectionAddFormFragment
  }
`;
