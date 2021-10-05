import React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { RouteHelper } from "routes";
import { useDrawerHelper, useDestroyer } from "hooks";
import { QueryWrapper } from "components/api";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";

import type {
  ItemUpdateDrawerQuery as Query,
  ItemUpdateDrawerQueryResponse as Response,
} from "__generated__/ItemUpdateDrawerQuery.graphql";

export default function ItemUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();
  const route = RouteHelper.findRouteByName("item");

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  /* Render route and delete buttons */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Child routes - Collections, items, manage */
    const routes = route?.routes?.map((route) => ({
      route: route.name,
      label: route.label,
      query: { slug: drawerSlug },
    }));

    /* Delete button */
    const handleDelete = () => {
      if (data.item) {
        destroy.item(
          { itemId: data.item.id },
          data?.item?.title || t("glossary.item.label")
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions routes={routes} handleDelete={handleDelete} />;
  }

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
          buttons={renderButtons(data)}
        >
          {data && data.item && (
            <>
              <ItemUpdateForm
                data={data.item}
                onSaveAndClose={dialog.hide}
                onCancel={dialog.hide}
              />
              <SchemaInstanceForm
                instance={data?.item}
                successNotification="forms.item.update.schemaSuccess"
                failureNotification="forms.item.update.schemaFailure"
                onSaveAndClose={dialog.hide}
                onCancel={dialog.hide}
              />
            </>
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query ItemUpdateDrawerQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      id
      title
      ...ItemUpdateFormFragment
      ...SchemaInstanceFormFragment
    }
  }
`;
