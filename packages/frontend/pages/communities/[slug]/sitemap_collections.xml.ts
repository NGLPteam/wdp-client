import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import getCollectionsSitemap from "helpers/getCollectionsSitemap";
import {
  sitemapCollectionsCommunityQuery,
  sitemapCollectionsCommunityQueryResponse,
} from "@/relay/sitemapCollectionsCommunityQuery.graphql";

function generateSiteMap(data: sitemapCollectionsCommunityQueryResponse) {
  return data.community?.collections
    ? getCollectionsSitemap(data.community.collections)
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
  // We make an API call to gather the URLs for our site
  const data = await fetchQuery<sitemapCollectionsCommunityQuery>(env, query, {
    slug,
    page,
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
  query sitemapCollectionsCommunityQuery($slug: Slug!, $page: Int!) {
    community(slug: $slug) {
      collections(page: $page, perPage: 50) {
        ...getCollectionsSitemapFragment
      }
    }
  }
`;
