import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import ContributionsBlock from "@/components/composed/contribution/ContributionsBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesItemContributorsQuery as Query } from "@/relay/pageTemplatesItemContributorsQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export async function generateStaticParams() {
  return [];
}

export default async function ItemContributorsPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { item } = data ?? {};

  if (!item || !slug) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <ContributionsBlock data={item} slug={slug} background="neutral00" />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplatesItemContributorsQuery($slug: Slug!) {
    item(slug: $slug) {
      ...ContributionsBlockFragment
    }
  }
`;
