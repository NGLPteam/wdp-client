import { useId } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import HeroTemplate from "@/components/templates/Hero";
import NavigationTemplate from "@/components/templates/EntityNavigation";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemTemplateQuery as Query } from "@/relay/pageItemTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { BasePageParams } from "@/types/page";

export default async function TemplatePage({
  params: { slug },
}: BasePageParams) {
  const uid = useId();

  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { item } = data ?? {};

  if (!item) return notFound();

  const { hero, navigation, main } = item.layouts;

  const { templates } = main ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      {hero && <HeroTemplate data={hero} />}
      <NavigationTemplate data={navigation} skipToId={`${uid}-tab-content`} />
      {!!templates?.length &&
        templates.map((t, i) => (
          <TemplateFactory key={i} data={t} entityData={item} />
        ))}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemTemplateQuery($slug: Slug!) {
    item(slug: $slug) {
      ...FactoryTemplatesEntityFragment
      layouts {
        hero {
          ...HeroTemplateFragment
        }
        navigation {
          ...EntityNavigationTemplateFragment
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
