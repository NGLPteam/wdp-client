import { ServerResponse } from "http";

const MAXAGE = process.env.NEXT_PUBLIC_SITEMAP_CACHE_MAXAGE || "86400";
const REVALIDATE = process.env.NEXT_PUBLIC_SITEMAP_CACHE_REVALIDATE || "59";

export default async function buildSiteMap(
  res: ServerResponse,
  sitemap: string,
) {
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${MAXAGE}, stale-while-revalidate=${REVALIDATE}`,
  );
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
