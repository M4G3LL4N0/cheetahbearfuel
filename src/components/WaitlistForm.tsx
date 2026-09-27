"use client";

import { useState } from "react";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

export default function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim().toLowerCase();

    setFormState({ status: "submitting", message: "" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setFormState({
          status: "error",
          message:
            data.error ??
            "The waitlist is not taking signups right now. Try again soon.",
        });
        return;
      }

      form.reset();
      setFormState({
        status: "success",
        message: "You are in. First drop intel is coming your way.",
      });
    } catch {
      setFormState({
        status: "error",
        message: "Network error. Try again in a minute.",
      });
    }
  };

  const isSubmitting = formState.status === "submitting";

  return (
    <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="min-h-12 flex-1 rounded-lg border border-white/14 bg-white/[0.07] px-4 text-base font-bold text-white outline-none transition placeholder:text-white/38 focus:border-[#00d7ff] focus:ring-2 focus:ring-[#00d7ff]/40"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-12 rounded-lg bg-white px-5 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#ffb000] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Joining" : "Join"}
        </button>
      </div>
      <p
        aria-live="polite"
        className={`mt-4 min-h-6 text-sm font-bold ${
          formState.status === "error" ? "text-[#ff7a18]" : "text-[#00d7ff]"
        }`}
      >
        {formState.message}
      </p>
    </form>
  );
}
