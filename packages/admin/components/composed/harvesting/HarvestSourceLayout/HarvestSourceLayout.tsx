import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import {
  useChildRouteLinks,
  useMaybeFragment,
  useRouteSlug,
  useLatestPresentValue,
} from "hooks";
import { ButtonControlGroup, ButtonControlRoute } from "components/atomic";
import { PageHeader, BackToAll } from "components/layout";
import type { HarvestSourceLayoutFragment$key } from "@/relay/HarvestSourceLayoutFragment.graphql";

export default function HarvestSourceLayout({
  children,
  data,
}: {
  children: React.ReactNode;
  data?: HarvestSourceLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("harvestSource", { slug });
  const harvestSource = useMaybeFragment(fragment, data);
  const { current: memoizedHarvestSource } =
    useLatestPresentValue(harvestSource);

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      {slug && (
        <ButtonControlRoute
          route="harvestSource.mappings.new"
          query={{ slug }}
          icon="plus"
        >
          {t("actions.add.harvest_mapping")}
        </ButtonControlRoute>
      )}
    </ButtonControlGroup>
  );

  return (
    <section>
      <BackToAll route="harvesting" />
      <PageHeader
        title={memoizedHarvestSource?.name}
        tabRoutes={manageRoutes}
        tabLinksOnly
        buttons={buttons}
      />
      {children}
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
