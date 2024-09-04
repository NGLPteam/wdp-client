import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import { getStaticGlobalContextDataQuery } from "@/relay/getStaticGlobalContextDataQuery.graphql";

export default async function getStaticGlobalContextData() {
  const { data: globalStaticData } =
    await fetchQuery<getStaticGlobalContextDataQuery>(query, {});

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
      entities {
        suppressExternalLinks
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
