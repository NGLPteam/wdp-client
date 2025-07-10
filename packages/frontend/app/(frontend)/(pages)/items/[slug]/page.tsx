import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import MainLayout from "@/components/templates/MainLayout";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemTemplateQuery as Query } from "@/relay/pageItemTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { BasePageParams } from "@/types/page";
import { FullTextCheckRedirect } from "@/components/templates/FullTextCheck/FullTextCheck";

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

  const { item } = data ?? {};

  if (!item) return notFound();

  const { main } = item.layouts;

  return (
    <UpdateClientEnvironment records={records}>
      <FullTextCheckRedirect redirectPath={`/items/${slug}/metadata`}>
        <MainLayout data={main} />
      </FullTextCheckRedirect>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemTemplateQuery($slug: Slug!) {
    item(slug: $slug) {
      layouts {
        main {
          ...MainLayoutFragment
        }
      }
    }
  }
`;
