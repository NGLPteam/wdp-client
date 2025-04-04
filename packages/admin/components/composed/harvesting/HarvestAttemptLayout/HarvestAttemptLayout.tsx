import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import startCase from "lodash/startCase";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { PageHeader, BackToAll } from "components/layout";
import type { HarvestAttemptLayoutFragment$key } from "@/relay/HarvestAttemptLayoutFragment.graphql";

export default function HarvestAttemptLayout({
  children,
  data,
}: {
  children: React.ReactNode;
  data?: HarvestAttemptLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("harvestAttempt", { slug });
  const { harvestSource, harvestMapping, harvestSet, beganAt } =
    useMaybeFragment(fragment, data) ?? {};

  const params = useSearchParams();
  const backTo = params.get("backTo");

  const backToProps =
    backTo === "harvestMapping" && harvestMapping
      ? {
          route: "harvestMapping.harvestAttempts",
          query: { slug: harvestMapping.slug },
          label: startCase(t("glossary.harvest_mapping")),
        }
      : harvestSource
        ? {
            route: "harvestSource.harvestAttempts",
            query: { slug: harvestSource.slug },
            label: harvestSource.name,
          }
        : null;

  return (
    <section>
      {backToProps && <BackToAll {...backToProps} />}
      <PageHeader
        title={`${harvestSource?.name}:${
          harvestSet?.identifier ?? t("harvesting.set_placeholder")
        }:${beganAt}`}
        tabRoutes={manageRoutes}
      />
      {children}
    </section>
  );
}

const fragment = graphql`
  fragment HarvestAttemptLayoutFragment on HarvestAttempt {
    beganAt
    harvestSource {
      slug
      name
    }
    harvestSet {
      identifier
    }
    harvestMapping {
      slug
    }
  }
`;
