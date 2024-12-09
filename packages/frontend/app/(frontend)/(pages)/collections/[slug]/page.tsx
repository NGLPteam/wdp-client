import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageCollectionTemplateQuery as Query } from "@/relay/pageCollectionTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { BasePageParams } from "@/types/page";

export default async function TemplatePage({
  params: { slug },
}: BasePageParams) {
  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { collection } = data ?? {};

  if (!collection) return notFound();

  const { main } = collection.layouts;

  const { templates } = main ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      {!!templates?.length &&
        templates.map((t, i) => <TemplateFactory key={i} data={t} />)}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCollectionTemplateQuery($slug: Slug!) {
    collection(slug: $slug) {
      layouts {
        main {
          templates {
            ...FactoryTemplatesFragment
          }
        }
      }
    }
  }
`;
