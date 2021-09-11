import React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import { QueryWrapper } from "components/api";
import type { CollectionUpdateDrawerQuery as Query } from "__generated__/CollectionUpdateDrawerQuery.graphql";

import { useDrawerHelper } from "hooks";
import { graphql } from "react-relay";

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
