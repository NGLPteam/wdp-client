import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import HeroTemplate from "@/components/templates/Hero";
import NavigationTemplate from "@/components/templates/EntityNavigation";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageCollectionTemplateQuery as Query } from "@/relay/pageCollectionTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function TemplatePage() {
  const slug = "rXaGvy9U0LBVCwz1ToRo7tbov2R2L00";

  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { collection } = data ?? {};

  if (!collection) return notFound();

  const { hero, navigation, main } = collection.layouts;

  const { templates } = main ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      <HeroTemplate data={collection} layoutData={hero} />
      <NavigationTemplate data={navigation} />
      {!!templates?.length &&
        templates.map((t, i) => <TemplateFactory key={i} data={t} />)}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCollectionTemplateQuery($slug: Slug!) {
    collection(slug: $slug) {
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
