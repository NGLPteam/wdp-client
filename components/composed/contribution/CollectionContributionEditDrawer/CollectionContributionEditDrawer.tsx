import React from "react";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { useDrawerHelper } from "hooks";
import { DialogProps } from "reakit/Dialog";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import type { CollectionContributionEditDrawerQuery as Query } from "__generated__/CollectionContributionEditDrawerQuery.graphql";
import ContributionUpdateForm from "components/composed/contribution/ContributionUpdateForm";

export default function CollectionContributionEditDrawer({
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
      initialVariables={{ collectionContributionSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.collectionContribution")}
          header={t("drawers.editCollectionContribution.title")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.collectionContribution && (
            <ContributionUpdateForm
              data={data.collectionContribution}
              onSuccess={dialog.hide}
            />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}
const query = graphql`
  query CollectionContributionEditDrawerQuery(
    $collectionContributionSlug: Slug!
  ) {
    collectionContribution(slug: $collectionContributionSlug) {
      ...ContributionUpdateFormFragment
      role
      collection {
        title
      }
    }
  }
`;
