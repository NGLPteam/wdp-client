import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import HeroTemplate from "@/components/templates/Hero";
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

  const { hero, main } = collection.layouts;

  const { templates } = main ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      <HeroTemplate data={collection} layoutData={hero} />
      {!!templates?.length &&
        templates.map((t, i) => (
          <TemplateFactory key={i} data={t} entityData={collection} />
        ))}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCollectionTemplateQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...HeroTemplateFragment
      ...FactoryTemplatesEntityFragment
      layouts {
        hero {
          ...HeroTemplateLayoutFragment
        }
        main {
          templates {
            ...FactoryTemplatesFragment
          }
        }
      }
    }
  }
`;
