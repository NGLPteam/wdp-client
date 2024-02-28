import { buildEnvironment as environment } from "@wdp/lib/app";
import { fetchQuery, graphql } from "relay-runtime";
import { getStaticGlobalContextDataQuery } from "@/relay/getStaticGlobalContextDataQuery.graphql";

export default async function getStaticGlobalContextData() {
  const env = environment();
  const globalStaticData = await fetchQuery<getStaticGlobalContextDataQuery>(
    env,
    query,
    {}
  ).toPromise();

  return globalStaticData;
}

const query = graphql`
  query getStaticGlobalContextDataQuery {
    globalConfiguration {
      site {
        providerName
        installationName
        installationHomePageCopy
        logoMode
        footer {
          description
          copyrightStatement
        }
      }
    }
    allCommunities: communities(order: POSITION_ASCENDING) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
