// TODO: Where should this live? Should we have a root routes/ folder?
import NextNamedRoutes from "./NextNamedRoutes";

const RouteHelper = new NextNamedRoutes();

// Define routes
// communities
RouteHelper.add("communities", "/communities");
RouteHelper.add("community", "/community/[slug]");
RouteHelper.add("community.child.collections", "/community/[slug]/collections");
RouteHelper.add("community.child.items", "/community/[slug]/items");
RouteHelper.add("community.manage", "/community/[slug]/manage");

// collections
RouteHelper.add("collections", "/collections");
RouteHelper.add("collection", "/collection/[slug]");
RouteHelper.add(
  "collection.child.collections",
  "/collection/[slug]/collections"
);
RouteHelper.add("collection.child.items", "/collection/[slug]/items");
RouteHelper.add("collection.manage", "/collection/[slug]/manage");

// items
RouteHelper.add("items", "/items");
RouteHelper.add("item", "/item/[slug]");
RouteHelper.add("item.child.items", "/item/[slug]/items");
RouteHelper.add("item.manage", "/item/[slug]/manage");

// users
RouteHelper.add("users", "/users");
RouteHelper.add("user", "/user/[slug]");

// contributors
RouteHelper.add("contributors", "/contributors");
RouteHelper.add("contributor", "/contributor/[slug]");

export const modelMap = {
  COMMUNITY: "communities",
  COLLECTION: "collections",
  ITEM: "items",
  USER: "users",
  CONTRIBUTOR: "contributors",
};

export { RouteHelper };
