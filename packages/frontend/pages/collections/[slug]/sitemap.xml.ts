import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import {
  sitemapCollectionsQuery,
  sitemapCollectionsQuery$data,
} from "@/relay/sitemapCollectionsQuery.graphql";
import { buildSiteMap, getEntitySitemap } from "helpers";

function generateSiteMap(data: sitemapCollectionsQuery$data) {
  return data.collection ? getEntitySitemap(data.collection) : "";
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({
  res,
  query: urlQuery,
}: GetServerSidePropsContext) {
  const slug = routeQueryArrayToString(urlQuery?.slug);

  const env = environment();
  const data = await fetchQuery<sitemapCollectionsQuery>(env, query, {
    slug,
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
  query sitemapCollectionsQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...getEntitySitemapFragment
    }
  }
`;
