import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import HeroTemplate from "@/components/templates/Hero";
import NavigationTemplate from "@/components/templates/EntityNavigation";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemTemplateQuery as Query } from "@/relay/pageItemTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function TemplatePage() {
  const slug = "Yv3YGPBhqvnmI27Ybum7Nzf6xEgmnOKE";

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
      <HeroTemplate data={item} layoutData={hero} />
      <NavigationTemplate data={navigation} />
      {!!templates?.length &&
        templates.map((t, i) => <TemplateFactory key={i} data={t} />)}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemTemplateQuery($slug: Slug!) {
    item(slug: $slug) {
      ...HeroTemplateFragment
      layouts {
        hero {
          ...HeroTemplateLayoutFragment
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
