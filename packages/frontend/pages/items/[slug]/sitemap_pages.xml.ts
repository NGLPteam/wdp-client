import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import { EXTERNAL_DATA_URL } from "helpers";
import {
  sitemapPagesItemQuery,
  sitemapPagesItemQueryResponse,
} from "@/relay/sitemapPagesItemQuery.graphql";

function generateSiteMap(data: sitemapPagesItemQueryResponse) {
  const slug = data?.item?.slug;

  const pages = data?.item?.pages?.nodes.map(({ slug, updatedAt }) => {
    return `
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/item/${slug}/page/${slug}`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </url>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}/item/${slug}</loc>
       <lastmod>${data?.item?.updatedAt}</lastmod>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/item/${slug}/search</loc>
     </url>
     ${pages?.join("")}
   </urlset>
 `;
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
  const data = await fetchQuery<sitemapPagesItemQuery>(env, query, {
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
  query sitemapPagesItemQuery($slug: Slug!) {
    item(slug: $slug) {
      slug
      updatedAt
      pages {
        nodes {
          slug
          updatedAt
        }
      }
    }
  }
`;
