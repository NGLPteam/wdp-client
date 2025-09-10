import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { baseRoutes } from "@/routes/baseRoutes";
import type { BaseRoute } from "@wdp/lib/routes";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

export async function DELETE(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const type = searchParams.get("type");

  if (!REVALIDATE_SECRET)
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message:
          "Cannot complete request. Client is missing REVALIDATE_SECRET variable.",
      },
      {
        status: 500,
      },
    );

  if (!secret || secret !== REVALIDATE_SECRET)
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: "Unauthorized: missing or invalid revalidate token.",
      },
      {
        status: 403,
      },
    );

  if (!slug || typeof slug !== "string")
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: "Missing entity slug param.",
      },
      {
        status: 400,
      },
    );

  const route = baseRoutes.find((route: BaseRoute) => route.name === type);

  const subroutes =
    route?.routes?.filter(
      (route: BaseRoute) =>
        !route.name.includes("search") && !route.name.includes("browse"),
    ) ?? [];

  const routes = [route, ...subroutes];

  routes.forEach((route?: BaseRoute) => {
    const path = route?.path?.replace("[slug]", slug);

    if (!path) return;

    if (path.includes("[")) return revalidatePath(path, "page");

    return revalidatePath(path);
  });

  return Response.json({
    revalidated: true,
    now: Date.now(),
  });
}
