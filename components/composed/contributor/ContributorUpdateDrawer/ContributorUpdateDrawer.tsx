import React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { QueryWrapper } from "components/api";
import type { ContributorUpdateDrawerQuery as Query } from "__generated__/ContributorUpdateDrawerQuery.graphql";
import { getContributorDisplayName } from "../ContributorDisplayName";

import { useDrawerHelper } from "hooks";
import { graphql } from "react-relay";

export default function ContributorUpdateDrawer({
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
      initialVariables={{ contributorSlug: drawerSlug }}
    >
      {({ data }) => {
        return (
          <Drawer
            label={t("actions.edit.contributor")}
            header={
              data?.contributor?.__typename === "PersonContributor"
                ? getContributorDisplayName(data?.contributor) ||
                  t("drawers.editContributor.title")
                : t("drawers.editContributor.title")
            }
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {data && data.contributor && (
              <ContributorUpdateForm
                data={data.contributor}
                onSuccess={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query ContributorUpdateDrawerQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      __typename
      ... on OrganizationContributor {
        slug
        legalName
      }
      ... on PersonContributor {
        slug
        givenName
        familyName
      }
      ...ContributorUpdateFormFragment
    }
  }
`;
