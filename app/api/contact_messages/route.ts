import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let body = await req.json();
    
    const userAgent = req.headers.get("user-agent") || "nextjs";
    body.user_agent = userAgent;
    body.ip_address = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const res = await fetch(`${apiURL}/contact-messages`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "User-Agent": userAgent
      }
    });

    const data = await res.json();
    return NextResponse.json({ status: res.status, ...data });
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Something went wrong!' }, { status: 500 });
  }
}