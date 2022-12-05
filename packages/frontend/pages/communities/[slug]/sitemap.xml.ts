import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import getEntitySitemap from "helpers/getEntitySitemap";
import {
  sitemapCommunityQuery,
  sitemapCommunityQueryResponse,
} from "@/relay/sitemapCommunityQuery.graphql";

function generateSiteMap(data: sitemapCommunityQueryResponse) {
  return data.community ? getEntitySitemap(data.community) : null;
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
  // We make an API call to gather the URLs for our site
  const data = await fetchQuery<sitemapCommunityQuery>(env, query, {
    slug,
  }).toPromise();

  if (data) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
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
