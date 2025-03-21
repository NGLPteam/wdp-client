import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import MainLayout from "@/components/templates/MainLayout";
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

  const computedBgStart =
    main?.templates?.[0]?.templateKind === "DETAIL" ? "LIGHT" : undefined;

  return (
    <UpdateClientEnvironment records={records}>
      <MainLayout data={main} computedBgStart={computedBgStart} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCollectionTemplateQuery($slug: Slug!) {
    collection(slug: $slug) {
      layouts {
        main {
          ...MainLayoutFragment
          templates {
            ... on TemplateInstance {
              templateKind
            }
          }
        }
      }
    }
  }
`;
