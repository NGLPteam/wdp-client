import { ServerResponse } from "node:http";

const MAXAGE = process.env.NEXT_PUBLIC_CACHE_MAXAGE || "86400";
const REVALIDATE = process.env.NEXT_PUBLIC_CACHE_REVALIDATE || "59";

export default function setCacheDefaults(res: ServerResponse) {
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${MAXAGE}, stale-while-revalidate=${REVALIDATE}`
  );
}
