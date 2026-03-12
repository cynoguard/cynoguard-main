// Sanity Webhook endpoint
// Sanity calls this URL whenever a post is published/updated
// This clears the Next.js cache so fresh content appears immediately
//
// Set up in Sanity: Settings → API → Webhooks → Add webhook
// URL: https://yourdomain.com/api/revalidate
// Trigger on: Create, Update, Delete of "post" documents
// Secret: set SANITY_REVALIDATE_SECRET in your env

import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Validate the secret so only Sanity can trigger revalidation
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const slug = body?.result?.slug?.current as string | undefined;

    // Revalidate all posts (list page)
    revalidateTag("posts");

    // Also revalidate the specific post if we know its slug
    if (slug) {
      revalidateTag(`post-${slug}`);
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