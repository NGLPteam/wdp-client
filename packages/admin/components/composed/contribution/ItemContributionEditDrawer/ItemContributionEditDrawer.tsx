import { useTranslation } from "react-i18next";
import { graphql } from "relay-runtime";
import { useDrawerHelper, useDestroyer } from "hooks";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import ContributionUpdateForm from "components/composed/contribution/ContributionUpdateForm";
import type {
  ItemContributionEditDrawerQuery as Query,
  ItemContributionEditDrawerQuery$data as Response,
} from "__generated__/ItemContributionEditDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function ItemContributionEditDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  /* Render delete button */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Delete button */
    const handleDelete = () => {
      if (data.itemContribution?.id) {
        destroy.contribution(
          { contributionId: data.itemContribution.id },
          t("glossary.contribution"),
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions handleDelete={handleDelete} />;
  }

  const { drawerSlug } = params;
  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ itemContributionSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          header={t("actions.edit.item_contribution")}
          dialog={dialog}
          hideOnClickOutside={false}
          buttons={renderButtons()}
        >
          {data && data.itemContribution && (
            <ContributionUpdateForm
              data={data.itemContribution}
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
  query ItemContributionEditDrawerQuery($itemContributionSlug: Slug!) {
    itemContribution(slug: $itemContributionSlug) {
      ...ContributionUpdateFormFragment
      id
      role
      item {
        title
      }
    }
  }
`;
