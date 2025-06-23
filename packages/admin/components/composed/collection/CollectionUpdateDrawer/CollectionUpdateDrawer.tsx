import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDestroyer, useDrawerHelper } from "hooks";
import { useViewerContext } from "contexts";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import { RouteHelper } from "routes";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import EntityPurgeModal from "components/composed/entity/EntityPurgeModal";
import CollectionUpdateForm from "../CollectionUpdateForm";
import type {
  CollectionUpdateDrawerQuery as Query,
  CollectionUpdateDrawerQuery$data as Response,
} from "__generated__/CollectionUpdateDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

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

  const { globalAdmin } = useViewerContext();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  /* Render route and delete buttons */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    const filteredRoutes = route?.routes?.filter((route) => {
      if (route.childKinds) {
        const allowed = route.childKinds.every((kind) =>
          data?.collection?.schemaVersion?.enforcedChildKinds.includes(kind),
        );
        if (!allowed) return false;
      }
      return true;
    });

    /* Child routes - Collections, items, manage */
    const routes = filteredRoutes?.map((route) => ({
      route: route.name,
      label: route.label,
      query: { slug: drawerSlug },
    }));

    /* Delete button */
    const handleDelete = () => {
      if (data.collection) {
        destroy.collection(
          { collectionId: data.collection.id },
          data?.collection?.title || t("glossary.collection"),
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    const purgeButton = data?.collection ? (
      <EntityPurgeModal
        id={data.collection.id}
        title={data.collection.title}
        entityType="collection"
        handleDelete={handleDelete}
        afterPurge={() => {
          if (dialog?.hide) dialog.hide();
        }}
      />
    ) : null;

    return (
      <DrawerActions
        routes={routes}
        allowedActions={data?.collection?.allowedActions}
        {...(globalAdmin ? { purgeButton } : { handleDelete })}
      />
    );
  }

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ collectionSlug: drawerSlug }}
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
            </>
          )}
        </Drawer>
      )}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query CollectionUpdateDrawerQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      id
      title
      ...CollectionUpdateFormFragment
      schemaVersion {
        enforcedChildKinds
      }
      allowedActions
    }
  }
`;
