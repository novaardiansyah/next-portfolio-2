import { NextRequest, NextResponse } from "next/server";
import { apiFetch } from "@/lib/apiClient";

export async function POST(req: NextRequest) {
  try {
    let body = await req.json();
    body.user_agent = req.headers.get("user-agent") || "nextjs";
    body.ip_address = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    const data = await apiFetch("contact-messages", {
      method: "POST",
      body
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Something went wrong!' }, { status: 500 });
  }
}