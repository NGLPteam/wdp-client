import { graphql } from "react-relay";
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
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("harvestAttempt", { slug });
  const { harvestSource } = useMaybeFragment(fragment, data) ?? {};

  return (
    <section>
      {harvestSource && (
        <BackToAll
          route="harvestSource.harvestAttempts"
          query={{ slug: harvestSource.slug }}
          label={harvestSource.name}
        />
      )}
      <PageHeader title="[Attempt Identifier Here]" tabRoutes={manageRoutes} />
      {children}
    </section>
  );
}

const fragment = graphql`
  fragment HarvestAttemptLayoutFragment on HarvestAttempt {
    harvestSource {
      slug
      name
    }
  }
`;
