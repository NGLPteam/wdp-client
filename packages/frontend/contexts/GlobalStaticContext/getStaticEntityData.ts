import { environment } from "@wdp/lib/app";
import { fetchQuery, graphql, readInlineData } from "relay-runtime";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { getStaticEntityDataQuery } from "@/relay/getStaticEntityDataQuery.graphql";

export default async function getStaticEntityData(
  context: GetServerSidePropsContext
) {
  const { query: urlQuery, resolvedUrl } = context;

  const slug = routeQueryArrayToString(urlQuery?.slug);

  if (!slug) return;

  const env = environment();

  const isCommunity = resolvedUrl.includes("communities");
  const isCollection = resolvedUrl.includes("collections");
  const isItem = resolvedUrl.includes("items");

  const data = await fetchQuery<getStaticEntityDataQuery>(env, query, {
    slug,
    isCommunity,
    isCollection,
    isItem,
  }).toPromise();

  if (data) {
    return readInlineData(
      fragment,
      data.community || data.collection || data.item || null
    );
  }
}

const query = graphql`
  query getStaticEntityDataQuery(
    $slug: Slug!
    $isCommunity: Boolean!
    $isCollection: Boolean!
    $isItem: Boolean!
  ) {
    community(slug: $slug) @include(if: $isCommunity) {
      ...getStaticEntityDataFragment
    }
    collection(slug: $slug) @include(if: $isCollection) {
      ...getStaticEntityDataFragment
    }
    item(slug: $slug) @include(if: $isItem) {
      ...getStaticEntityDataFragment
    }
  }
`;

const fragment = graphql`
  fragment getStaticEntityDataFragment on AnyEntity @inline {
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
