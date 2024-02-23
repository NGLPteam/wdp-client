import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import {
  sitemapCollectionsChildrenQuery,
  sitemapCollectionsChildrenQuery$data,
} from "@/relay/sitemapCollectionsChildrenQuery.graphql";
import { buildSiteMap, getCollectionsSitemap } from "helpers";

function generateSiteMap(data: sitemapCollectionsChildrenQuery$data) {
  return data.collection?.collections
    ? getCollectionsSitemap(data.collection.collections)
    : "";
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({
  res,
  query: urlQuery,
}: GetServerSidePropsContext) {
  const slug = routeQueryArrayToString(urlQuery?.slug);
  const page = parseInt(routeQueryArrayToString(urlQuery?.page), 10);

  const env = environment();
  const data = await fetchQuery<sitemapCollectionsChildrenQuery>(env, query, {
    slug,
    page,
  }).toPromise();

  if (data) {
    const sitemap = generateSiteMap(data);
    buildSiteMap(res, sitemap);
  }

  return {
    props: {},
  };
}

export default SiteMap;

const query = graphql`
  query sitemapCollectionsChildrenQuery($slug: Slug!, $page: Int!) {
    collection(slug: $slug) {
      collections(page: $page, perPage: 50) {
        ...getCollectionsSitemapFragment
      }
    }
  }
`;
