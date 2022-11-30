import { ParsedUrlQuery } from "querystring";
import { environment } from "@wdp/lib/app";
import { fetchQuery, graphql, readInlineData } from "relay-runtime";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { getStaticCommunityDataQuery } from "@/relay/getStaticCommunityDataQuery.graphql";

export default async function getStaticCommunityData(urlQuery: ParsedUrlQuery) {
  const slug = routeQueryArrayToString(urlQuery?.slug);

  if (!slug) return;

  const env = environment();

  const data = await fetchQuery<getStaticCommunityDataQuery>(env, query, {
    slug,
  }).toPromise();

  if (data) {
    return readInlineData(fragment, data.community);
  }
}

const query = graphql`
  query getStaticCommunityDataQuery($slug: Slug!) {
    community(slug: $slug) {
      ...getStaticCommunityDataFragment
    }
  }
`;

const fragment = graphql`
  fragment getStaticCommunityDataFragment on AnyEntity @inline {
    ... on Entity {
      title
      summary
      thumbnail {
        storage
        medium {
          webp {
            url
            width
            height
          }
        }
      }
      thumbnailMetadata {
        alt
      }
      heroImage {
        storage
        medium {
          webp {
            url
            width
            height
          }
        }
      }
      heroImageMetadata {
        alt
      }
    }
  }
`;
