import { graphql } from "relay-runtime";
import { redirect } from "next/navigation";
import { RouteHelper } from "routes/RouteHelper";
import InstanceCommunities from "components/composed/instance/InstanceCommunities";
import InstanceHero from "components/composed/instance/InstanceHero";
import AppLayout from "@/components/global/AppLayout";
import fetchQuery from "@/lib/relay/fetchQuery";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { pageInstanceContentLayoutQuery as Query } from "@/relay/pageInstanceContentLayoutQuery.graphql";

export default async function HomePage() {
  const { data: instance, records } = await fetchQuery<Query>(query, {});

  const total = instance?.communities?.pageInfo?.totalCount ?? 0;
  const firstSlug = instance?.communities?.edges[0]?.node?.slug ?? null;
  const redirectRoute = RouteHelper.findRouteByName("community");

  if (total === 1 && firstSlug && redirectRoute) {
    const href = redirectRoute?.path.replace("[slug]", firstSlug);
    redirect(href);
  }

  return instance ? (
    <UpdateClientEnvironment records={records}>
      <AppLayout>
        <InstanceHero data={instance} />
        <InstanceCommunities data={instance.communities} />
      </AppLayout>
    </UpdateClientEnvironment>
  ) : null;
}

const query = graphql`
  query pageInstanceContentLayoutQuery {
    communities(order: POSITION_ASCENDING) {
      edges {
        node {
          slug
        }
      }
      pageInfo {
        totalCount
      }
      ...InstanceCommunitiesFragment
    }
    ...InstanceHeroFragment
  }
`;
