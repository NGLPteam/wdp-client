import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import MainLayoutGrid from "@/components/templates/MainGrid";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemTemplateQuery as Query } from "@/relay/pageItemTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { BasePageParams } from "@/types/page";
import TextTemplate from "@/components/templates/Text";

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

  const { templates } = main ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      <MainLayoutGrid>
        {!!templates?.length &&
          templates.map((t, i) => <TemplateFactory key={i} data={t} />)}
        <TextTemplate />
      </MainLayoutGrid>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemTemplateQuery($slug: Slug!) {
    item(slug: $slug) {
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
