import { buildEnvironment as environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import {
  sitemapItemsChildrenQuery,
  sitemapItemsChildrenQuery$data,
} from "@/relay/sitemapItemsChildrenQuery.graphql";
import { buildSiteMap, getItemsSitemap } from "helpers";

function generateSiteMap(data: sitemapItemsChildrenQuery$data) {
  return data.item?.items ? getItemsSitemap(data.item.items) : "";
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
  const data = await fetchQuery<sitemapItemsChildrenQuery>(env, query, {
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
  query sitemapItemsChildrenQuery($slug: Slug!, $page: Int!) {
    item(slug: $slug) {
      items(page: $page, perPage: 50) {
        ...getItemsSitemapFragment
      }
    }
  }
`;
