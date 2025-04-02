import { graphql } from "react-relay";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { PageHeader, BackToAll } from "components/layout";
import type { HarvestRecordLayoutFragment$key } from "@/relay/HarvestRecordLayoutFragment.graphql";

export default function HarvestRecordLayout({
  children,
  data,
}: {
  children: React.ReactNode;
  data?: HarvestRecordLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("harvestRecord", { slug });
  const { harvestSource, identifier } = useMaybeFragment(fragment, data) ?? {};

  return (
    <section>
      {harvestSource && (
        <BackToAll
          route="harvestSource.harvestRecords"
          query={{ slug: harvestSource.slug }}
          label={harvestSource.name}
        />
      )}
      <PageHeader title={identifier} tabRoutes={manageRoutes} />
      {children}
    </section>
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
