import React from "react";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { useDrawerHelper } from "hooks";
import { DialogProps } from "reakit/Dialog";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import type { ItemContributionEditDrawerQuery as Query } from "__generated__/ItemContributionEditDrawerQuery.graphql";
import ContributionUpdateForm from "components/composed/contribution/ContributionUpdateForm";

export default function ItemContributionEditDrawer({
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
      initialVariables={{ itemContributionSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.itemContribution")}
          header={t("drawers.editItemContribution.title")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.itemContribution && (
            <ContributionUpdateForm
              data={data.itemContribution}
              onSuccess={dialog.hide}
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
      role
      item {
        title
      }
    }
  }
`;
