import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDestroyer, useDrawerHelper } from "hooks";
import EntityPermalinksUpdateForm from "components/composed/permalinks/EntityPermalinksUpdateForm";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import type { DialogProps } from "reakit/Dialog";
import type {
  EntityPermalinksUpdateDrawerQuery as Query,
  EntityPermalinksUpdateDrawerQuery$data as Response,
} from "__generated__/EntityPermalinksUpdateDrawerQuery.graphql";

export default function EntityPermalinksUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerPermalinkSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerPermalinkSlug, drawerAllowEntityChange } = params;

  /* Render delete button */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Delete button */
    const handleDelete = () => {
      if (data.permalink?.id) {
        destroy.permalink(
          { permalinkId: data.permalink.id },
          t("glossary.permalink"),
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions handleDelete={handleDelete} />;
  }

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ permalinkSlug: drawerPermalinkSlug }}
      fetchPolicy="store-and-network"
    >
      {({ data }) => (
        <Drawer
          header={t("actions.edit.permalink")}
          dialog={dialog}
          hideOnClickOutside={false}
          buttons={renderButtons(data)}
        >
          {data && data.permalink && (
            <EntityPermalinksUpdateForm
              data={data.permalink}
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              allowEntityChange={drawerAllowEntityChange === "true"}
            />
          )}
        </Drawer>
      )}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query EntityPermalinksUpdateDrawerQuery($permalinkSlug: Slug!) {
    permalink(slug: $permalinkSlug) {
      ...EntityPermalinksUpdateFormFragment
      id
      uri
    }
  }
`;
