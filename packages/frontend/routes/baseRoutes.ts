import type { BaseRoute } from "@wdp/lib/routes";

export const baseRoutes: BaseRoute[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "community.home",
    path: "/community/[slug]",
  },
];
