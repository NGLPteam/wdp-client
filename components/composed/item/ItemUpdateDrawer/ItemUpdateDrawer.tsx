import React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
import { QueryWrapper } from "components/api";
import type { ItemUpdateDrawerQuery as Query } from "__generated__/ItemUpdateDrawerQuery.graphql";

import { useDrawerHelper } from "hooks";
import { graphql } from "react-relay";

export default function ItemUpdateDrawer({
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
      initialVariables={{ itemSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.item")}
          header={data?.item?.title || t("drawers.editItem.title")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.item && (
            <ItemUpdateForm data={data.item} onSuccess={dialog.hide} />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query ItemUpdateDrawerQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      title
      ...ItemUpdateFormFragment
    }
  }
`;
