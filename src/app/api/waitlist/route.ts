import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const { getSupabaseClient } = await import("@/lib/supabase");
    const supabase = getSupabaseClient();

    const { error } = await supabase.from("waitlist_signups").insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { ok: false, error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { ok: false, error: error.message || "Failed to join waitlist." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
