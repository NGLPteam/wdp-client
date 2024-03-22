import { buildEnvironment as environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import { buildSiteMap, getEntitySitemap } from "helpers";
import {
  sitemapItemsQuery,
  sitemapItemsQuery$data,
} from "@/relay/sitemapItemsQuery.graphql";

function generateSiteMap(data: sitemapItemsQuery$data) {
  return data.item ? getEntitySitemap(data.item) : "";
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
  const data = await fetchQuery<sitemapItemsQuery>(env, query, {
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
  query sitemapItemsQuery($slug: Slug!) {
    item(slug: $slug) {
      ...getEntitySitemapFragment
    }
  }
`;
