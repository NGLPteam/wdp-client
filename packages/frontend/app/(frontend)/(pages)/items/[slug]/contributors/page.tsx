import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import ContributionsBlock from "components/composed/contribution/ContributionsBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemContributorsQuery as Query } from "@/relay/pageItemContributorsQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function ItemContributorsPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { item } = data ?? {};

  if (!item) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <ContributionsBlock
        data={item.contributions}
        background="neutral00"
        paddingBottom="xxl"
      />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemContributorsQuery($slug: Slug!) {
    item(slug: $slug) {
      contributions {
        ...ContributionsBlockFragment
      }
    }
  }
`;
