import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import {
  useChildRouteLinks,
  useMaybeFragment,
  useRouteSlug,
  useLatestPresentValue,
} from "hooks";
import { RouteHelper } from "routes";
import HtmlHead from "components/global/HtmlHead";
import {
  PageHeader,
  ContentSidebar,
  ContentHeader,
  BackToAll,
} from "components/layout";
import type { ContributorLayoutFragment$key } from "@/relay/ContributorLayoutFragment.graphql";
import { getContributorDisplayName } from "../ContributorDisplayName";

export default function ContributorLayout({
  children,
  data,
  useRouteHeader,
}: {
  children: React.ReactNode;
  data?: ContributorLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const activeRoute = RouteHelper.activeRoute();
  const manageRoutes = useChildRouteLinks("contributor", { slug });
  const contributor = useMaybeFragment(fragment, data);
  const { current: memoizedContributor } = useLatestPresentValue(contributor);

  const title = getContributorDisplayName(memoizedContributor);

  return (
    <>
      <HtmlHead title={title} />
      <section>
        <BackToAll route="contributors" />
        <PageHeader title={title} sidebarLinks={manageRoutes} />
        <ContentSidebar sidebarLinks={manageRoutes}>
          {useRouteHeader && activeRoute && activeRoute.label && (
            <ContentHeader
              headerStyle="secondary"
              title={t(activeRoute.label)}
            />
          )}
          {children}
        </ContentSidebar>
      </section>
    </>
  );
}

const fragment = graphql`
  fragment ContributorLayoutFragment on Contributor {
    __typename
    ... on OrganizationContributor {
      slug
      legalName
    }
    ... on PersonContributor {
      givenName
      familyName
    }
  }
`;
