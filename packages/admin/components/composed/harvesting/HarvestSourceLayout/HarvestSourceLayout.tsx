import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import {
  useChildRouteLinks,
  useMaybeFragment,
  useRouteSlug,
  useLatestPresentValue,
} from "hooks";
import { RouteHelper } from "routes";

import {
  PageHeader,
  ContentSidebar,
  ContentHeader,
  BackToAll,
} from "components/layout";
import type { HarvestSourceLayoutFragment$key } from "@/relay/HarvestSourceLayoutFragment.graphql";

export default function HarvestSourceLayout({
  children,
  data,
  useRouteHeader,
}: {
  children: React.ReactNode;
  data?: HarvestSourceLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const activeRoute = RouteHelper.activeRoute();
  const manageRoutes = useChildRouteLinks("harvestSource", { slug });
  const harvestSource = useMaybeFragment(fragment, data);
  const { current: memoizedHarvestSource } =
    useLatestPresentValue(harvestSource);

  return (
    <section>
      <BackToAll route="harvesting" />
      <PageHeader
        title={memoizedHarvestSource?.name}
        sidebarLinks={manageRoutes}
      />
      <ContentSidebar sidebarLinks={manageRoutes}>
        {useRouteHeader && activeRoute && activeRoute.label && (
          <ContentHeader headerStyle="secondary" title={t(activeRoute.label)} />
        )}
        {children}
      </ContentSidebar>
    </section>
  );
}

const fragment = graphql`
  fragment HarvestSourceLayoutFragment on HarvestSource {
    __typename
    slug
    name
  }
`;
