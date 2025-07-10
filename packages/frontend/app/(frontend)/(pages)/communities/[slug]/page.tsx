import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import MainLayout from "@/components/templates/MainLayout";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplateQuery as Query } from "@/relay/pageTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { BasePageParams } from "@/types/page";

export async function generateStaticParams() {
  return [];
}

export default async function TemplatePage({
  params: { slug },
}: BasePageParams) {
  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { community } = data ?? {};

  if (!community) return notFound();

  const { main } = community.layouts;

  return (
    <UpdateClientEnvironment records={records}>
      <MainLayout data={main} computedBgStart="NONE" />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplateQuery($slug: Slug!) {
    community(slug: $slug) {
      layouts {
        main {
          ...MainLayoutFragment
        }
      }
    }
  }
`;
