import { useTranslation } from "react-i18next";
import { graphql } from "relay-runtime";
import type { DialogProps } from "reakit/Dialog";
import ContributionCreateForm from "../ContributionCreateForm";
import { useDrawerHelper } from "hooks";
import { Drawer } from "components/layout";
import { QueryWrapper } from "components/api";
import type { ContributorContributionCreateDrawerQuery as Query } from "__generated__/ContributorContributionCreateDrawerQuery.graphql";

export default function ContributorContributionCreateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  // Check if we have a contribution or contributor id
  if (
    !Object.prototype.hasOwnProperty.call(params, "drawerSlug") &&
    !Object.prototype.hasOwnProperty.call(params, "drawerContributionType")
  ) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug, drawerContributionType } = params;

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: drawerSlug }}>
      {({ data }) =>
        data?.contributor?.id ? (
          <Drawer
            header={t("actions.create.contribution")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <ContributionCreateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              contributorId={data.contributor.id}
              contributorName={
                data.contributor.legalName ||
                `${data.contributor.givenName} ${data.contributor.familyName}`
              }
              type={drawerContributionType}
            />
          </Drawer>
        ) : null
      }
    </QueryWrapper>
  );
}

const query = graphql`
  query ContributorContributionCreateDrawerQuery($slug: Slug!) {
    contributor(slug: $slug) {
      ... on OrganizationContributor {
        id
        legalName
      }
      ... on PersonContributor {
        id
        givenName
        familyName
      }
    }
  }
`;
