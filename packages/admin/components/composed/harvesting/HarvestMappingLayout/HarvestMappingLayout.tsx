import { graphql } from "react-relay";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { PageHeader, BackToAll } from "components/layout";
import type { HarvestMappingLayoutFragment$key } from "@/relay/HarvestMappingLayoutFragment.graphql";

export default function HarvestMappingLayout({
  children,
  data,
}: {
  children: React.ReactNode;
  data?: HarvestMappingLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("harvestMapping", { slug });
  const { harvestSource } = useMaybeFragment(fragment, data) ?? {};

  return (
    <section>
      {harvestSource && (
        <BackToAll
          route="harvestSource.mappings"
          query={{ slug: harvestSource.slug }}
          label={harvestSource.name}
        />
      )}
      <PageHeader title="[Mapping Identifier Here]" tabRoutes={manageRoutes} />
      {children}
    </section>
  );
}

const fragment = graphql`
  fragment HarvestMappingLayoutFragment on HarvestMapping {
    harvestSource {
      slug
      name
    }
  }
`;
