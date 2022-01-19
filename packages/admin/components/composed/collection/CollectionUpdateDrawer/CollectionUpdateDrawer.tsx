import React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDestroyer, useDrawerHelper } from "hooks";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";

import type {
  CollectionUpdateDrawerQuery as Query,
  CollectionUpdateDrawerQueryResponse as Response,
} from "__generated__/CollectionUpdateDrawerQuery.graphql";
import { RouteHelper } from "routes";
import DrawerActions from "components/layout/Drawer/DrawerActions";

export default function CollectionUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();
  const route = RouteHelper.findRouteByName("collection");

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
      if (data.collection) {
        destroy.collection(
          { collectionId: data.collection.id },
          data?.collection?.title || t("glossary.collection")
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions routes={routes} handleDelete={handleDelete} />;
  }

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ collectionSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.collection")}
          header={data?.collection?.title || t("actions.edit.collection")}
          dialog={dialog}
          hideOnClickOutside={false}
          buttons={renderButtons(data)}
        >
          {data && data.collection && (
            <>
              <CollectionUpdateForm
                data={data.collection}
                onSaveAndClose={dialog.hide}
                onCancel={dialog.hide}
              />
              <SchemaInstanceForm
                instance={data.collection}
                schemaKind="COLLECTION"
                successNotification="messages.update.schema_success"
                failureNotification="messages.update.schema_failure"
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
  query CollectionUpdateDrawerQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      id
      title
      ...CollectionUpdateFormFragment
      ...SchemaInstanceFormFragment
    }
  }
`;
