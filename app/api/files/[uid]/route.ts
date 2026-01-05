import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ uid: string }> }
) {
  try {
    const { uid } = await params;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_GO_URL}/files/d/${uid}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GO_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch files", data: [] },
      { status: 500 }
    );
  }
}
