import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const slug = body?.result?.slug?.current as string | undefined;

    revalidateTag("posts", "page");

    if (slug) {
      revalidateTag(`post-${slug}`, "page");
    }

    return NextResponse.json({
      revalidated: true,
      slug: slug ?? "all",
      now: Date.now(),
    });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}