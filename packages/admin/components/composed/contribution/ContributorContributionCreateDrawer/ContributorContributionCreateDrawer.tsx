import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper } from "hooks";
import { Drawer } from "components/layout";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import ContributionCreateForm from "../ContributionCreateForm";
import type { DialogProps } from "reakit/Dialog";
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
    <LazyLoadQueryWrapper<Query> query={query} variables={{ slug: drawerSlug }}>
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
    </LazyLoadQueryWrapper>
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
