import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageCollectionTemplateQuery as Query } from "@/relay/pageCollectionTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function TemplatePage() {
  const slug = "rXaGvy9U0LBVCwz1ToRo7tbov2R2L00";
  // const slug = "12d7ooyhn8ZxTJQXup656HQ4Y2mm8Rw";
  // const slug = "mG5OKmPhOyEmFEMwsn3Z3UvJ0qQ5ODX";

  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <TemplateFactory data={{ ...collection }} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCollectionTemplateQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...FactoryTemplatesFragment
    }
  }
`;
