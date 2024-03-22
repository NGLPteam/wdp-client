import { graphql } from "relay-runtime";
import { redirect } from "next/navigation";
import { RouteHelper } from "routes/RouteHelper";
import InstanceCommunities from "components/composed/instance/InstanceCommunities";
import InstanceHero from "components/composed/instance/InstanceHero";
import fetchQuery from "@/lib/relay/fetchQuery";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { InstanceContentLayoutQuery } from "@/relay/InstanceContentLayoutQuery.graphql";

export default async function HomePage() {
  const { data: instance, records } =
    await fetchQuery<InstanceContentLayoutQuery>(query, {});

  const total = instance?.communities?.pageInfo?.totalCount ?? 0;
  const firstSlug = instance?.communities?.edges[0]?.node?.slug ?? null;
  const redirectRoute = RouteHelper.findRouteByName("community");

  if (total === 1 && firstSlug && redirectRoute) {
    const href = redirectRoute?.path.replace("[slug]", firstSlug);
    redirect(href);
  }

  return instance ? (
    <UpdateClientEnvironment records={records}>
      <InstanceHero data={instance} />
      <InstanceCommunities data={instance.communities} />
    </UpdateClientEnvironment>
  ) : null;
}

const query = graphql`
  query InstanceContentLayoutQuery {
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
