import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { username } = await params;
  return NextResponse.json({
    message: `Sent a message to ${username}`,
  });
}
