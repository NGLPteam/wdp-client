import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import startCase from "lodash/startCase";
import { formatDate } from "@wdp/lib/helpers";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { PageHeader, BackToAll } from "components/layout";
import { ButtonControlRoute, ButtonControlGroup } from "components/atomic";
import HtmlHead from "components/global/HtmlHead";
import type { HarvestAttemptLayoutFragment$key } from "@/relay/HarvestAttemptLayoutFragment.graphql";
import PruneEntitiesModal from "../PruneEntitiesModal";

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
  const {
    id,
    harvestSource,
    harvestMapping,
    harvestSet,
    beganAt,
    targetEntity,
  } = useMaybeFragment(fragment, data) ?? {};

  const params = useSearchParams();
  const backTo = params.get("backTo");

  const backToProps =
    backTo === "harvestMapping" && harvestMapping
      ? {
          route: "harvestMapping.harvestAttempts",
          query: { slug: harvestMapping.slug },
          label: `${startCase(t("glossary.harvest_mapping"))}${
            harvestSource?.name ? `—${harvestSource?.name}` : ""
          }`,
        }
      : harvestSource
        ? {
            route: "harvestSource.harvestAttempts",
            query: { slug: harvestSource.slug },
            label: harvestSource.name,
          }
        : null;

  const set = harvestSet?.identifier
    ? t("harvesting.set", { set: harvestSet.identifier })
    : "";
  const title = `[${startCase(
    targetEntity?.harvestTargetKind.toLowerCase(),
  )}: ${targetEntity?.title}]${set}${t("harvesting.at", {
    at: formatDate(beganAt ?? ""),
  })}`;

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      {id && <PruneEntitiesModal id={id} title={title} type="attempt" />}
      {targetEntity?.slug && (
        <ButtonControlRoute
          route={targetEntity.harvestTargetKind.toLowerCase()}
          query={{ slug: targetEntity.slug }}
          icon="linkExternal"
        >
          {t("harvesting.view_target")}
        </ButtonControlRoute>
      )}
    </ButtonControlGroup>
  );

  return (
    <>
      <HtmlHead title={title} />
      <section>
        {backToProps && <BackToAll {...backToProps} />}
        <PageHeader title={title} tabRoutes={manageRoutes} buttons={buttons} />
        {children}
      </section>
    </>
  );
}

const fragment = graphql`
  fragment HarvestAttemptLayoutFragment on HarvestAttempt {
    id
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
    targetEntity {
      harvestTargetKind
      title
      slug
    }
  }
`;
