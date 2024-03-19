import { buildEnvironment as environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import { buildSiteMap, getEntitySitemap } from "helpers";
import {
  sitemapCommunityQuery,
  sitemapCommunityQuery$data,
} from "@/relay/sitemapCommunityQuery.graphql";

function generateSiteMap(data: sitemapCommunityQuery$data) {
  return data.community ? getEntitySitemap(data.community) : "";
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
  const data = await fetchQuery<sitemapCommunityQuery>(env, query, {
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
  query sitemapCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...getEntitySitemapFragment
    }
  }
`;
