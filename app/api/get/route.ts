import { fetchPosts } from "@/lib/db";
import { mapPosts } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;

  const q = searchParams.get("q") || "";
  const posts = await fetchPosts(q);
  return NextResponse.json(posts.map(mapPosts));
}
