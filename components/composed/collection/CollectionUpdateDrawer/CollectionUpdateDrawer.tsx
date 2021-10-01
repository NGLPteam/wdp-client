import React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper } from "hooks";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";

import type { CollectionUpdateDrawerQuery as Query } from "__generated__/CollectionUpdateDrawerQuery.graphql";

export default function CollectionUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ collectionSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.collection")}
          header={data?.collection?.title || t("drawers.editCollection.title")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.collection && (
            <CollectionUpdateForm
              data={data.collection}
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
  query CollectionUpdateDrawerQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      title
      ...CollectionUpdateFormFragment
    }
  }
`;
