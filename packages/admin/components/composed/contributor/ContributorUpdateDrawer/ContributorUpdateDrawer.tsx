import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper, useDestroyer } from "hooks";
import { RouteHelper } from "routes";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { getContributorDisplayName } from "../ContributorDisplayName";
import type { DialogProps } from "reakit/Dialog";
import type {
  ContributorUpdateDrawerQuery as Query,
  ContributorUpdateDrawerQuery$data as Response,
} from "__generated__/ContributorUpdateDrawerQuery.graphql";

export default function ContributorUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();
  const detailsRoute = RouteHelper.findRouteByName("contributor.details");

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  /* Render route and delete buttons */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Child routes - Collections, items, manage */
    const routes = detailsRoute
      ? [
          {
            route: detailsRoute.name,
            label: detailsRoute.label,
            query: { slug: drawerSlug },
          },
        ]
      : undefined;

    /* Delete button */
    const handleDelete = () => {
      if (data.contributor?.id) {
        destroy.contributor(
          { contributorId: data.contributor.id },
          data?.contributor?.legalName ||
            (data?.contributor?.givenName
              ? `${data?.contributor?.givenName} ${data?.contributor?.familyName}`
              : t("glossary.contributor")),
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions routes={routes} handleDelete={handleDelete} />;
  }

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ contributorSlug: drawerSlug }}
    >
      {({ data }) => {
        return (
          <Drawer
            label={t("actions.edit.contributor")}
            header={
              data?.contributor?.__typename === "PersonContributor"
                ? getContributorDisplayName(data?.contributor) ||
                  t("actions.edit.contributor")
                : t("actions.edit.contributor")
            }
            dialog={dialog}
            hideOnClickOutside={false}
            buttons={renderButtons(data)}
          >
            {data && data.contributor && (
              <ContributorUpdateForm
                data={data.contributor}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query ContributorUpdateDrawerQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      __typename
      ... on OrganizationContributor {
        id
        slug
        legalName
      }
      ... on PersonContributor {
        id
        slug
        givenName
        familyName
      }
      ...ContributorUpdateFormFragment
    }
  }
`;
