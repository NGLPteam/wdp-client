import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

export async function DELETE(_request: NextRequest) {
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

  const authorization = headers().get("Authorization");
  const secret = authorization?.startsWith("Bearer")
    ? authorization.replace("Bearer ", "")
    : null;

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

  revalidatePath("/", "layout");

  return Response.json({
    revalidated: true,
    now: Date.now(),
  });
}
