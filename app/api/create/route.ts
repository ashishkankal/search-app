import { createPost } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.json();
  const data = await createPost(formData);

  return NextResponse.json({ success: true });
}
