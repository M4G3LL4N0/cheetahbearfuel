import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type");
  if (contentType !== "application/json") {
    return NextResponse.json(
      { ok: false, error: "Invalid content type" },
      { status: 415 }
    );
  }

  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim().toLowerCase();

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from("waitlist_signups")
      .insert([{ 
        email,
        created_at: new Date().toISOString(),
        ip_address: req.ip || req.headers.get("x-forwarded-for") || "unknown"
      }]);

    if (error) {
      console.error("Waitlist signup error:", error);
      if (error.code === "23505") {
        return NextResponse.json(
          { ok: false, error: "This email is already on the waitlist" },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { ok: false, error: "Failed to process signup" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
