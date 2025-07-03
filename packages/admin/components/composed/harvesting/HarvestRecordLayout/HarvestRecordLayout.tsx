import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import startCase from "lodash/startCase";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { PageHeader, BackToAll } from "components/layout";
import HtmlHead from "components/global/HtmlHead";
import type { HarvestRecordLayoutFragment$key } from "@/relay/HarvestRecordLayoutFragment.graphql";

export default function HarvestRecordLayout({
  children,
  data,
}: {
  children: React.ReactNode;
  data?: HarvestRecordLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("harvestRecord", { slug });
  const { harvestSource, identifier } = useMaybeFragment(fragment, data) ?? {};

  const params = useSearchParams();
  const backTo = params.get("backTo");
  const backToSlug = params.get("backToSlug");

  const backToProps =
    backTo === "harvestAttempt" && !!backToSlug
      ? {
          route: "harvestAttempt.harvestRecords",
          query: { slug: backToSlug },
          label: startCase(t("glossary.harvest_attempt")),
        }
      : backTo === "harvestMapping" && !!backToSlug
        ? {
            route: "harvestMapping.harvestRecords",
            query: { slug: backToSlug },
            label: startCase(t("glossary.harvest_mapping")),
          }
        : harvestSource
          ? {
              route: "harvestSource.harvestRecords",
              query: { slug: harvestSource.slug },
              label: harvestSource.name,
            }
          : null;

  return (
    <>
      <HtmlHead title={identifier} />
      <section>
        {backToProps && <BackToAll {...backToProps} />}
        <PageHeader title={identifier} tabRoutes={manageRoutes} />
        {children}
      </section>
    </>
  );
}

const fragment = graphql`
  fragment HarvestRecordLayoutFragment on HarvestRecord {
    identifier
    harvestSource {
      slug
      name
    }
  }
`;
