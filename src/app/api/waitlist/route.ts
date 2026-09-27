import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Send JSON with an email address." },
      { status: 415 }
    );
  }

  try {
    const body = (await request.json()) as { email?: unknown };
    const email = String(body.email ?? "").trim().toLowerCase();

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    const { getSupabaseClient } = await import("@/lib/supabase");
    const supabase = getSupabaseClient();

    const { error } = await supabase.from("waitlist_signups").insert({
      email,
      created_at: new Date().toISOString(),
      ip_address:
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        request.headers.get("x-real-ip") ??
        null,
      user_agent: request.headers.get("user-agent"),
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { ok: false, error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }

      console.error("Waitlist signup error:", error);
      return NextResponse.json(
        { ok: false, error: "Waitlist signup failed. Try again soon." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";

    if (message.includes("NEXT_PUBLIC_SUPABASE")) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Waitlist storage is not configured yet. Add Supabase env vars in Vercel.",
        },
        { status: 503 }
      );
    }

    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { ok: false, error: "Waitlist signup failed. Try again soon." },
      { status: 500 }
    );
  }
}
