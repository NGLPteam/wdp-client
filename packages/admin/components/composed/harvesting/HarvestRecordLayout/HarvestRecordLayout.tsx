import { graphql } from "react-relay";
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
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("harvestRecord", { slug });
  const { harvestSource, identifier } = useMaybeFragment(fragment, data) ?? {};

  const backToProps = harvestSource
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
