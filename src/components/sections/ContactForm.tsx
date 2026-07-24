"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  COUNTRY_OPTIONS,
  INDUSTRY_OPTIONS,
  PREFERRED_LANGUAGE_OPTIONS,
} from "@/lib/quote/constants";

const fieldClass =
  "w-full border-b border-fg/20 bg-transparent py-2 text-body-m focus:border-fg focus:outline-none";
const labelClass = "text-caption uppercase tracking-[0.08em] text-fg/50";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);

    if (fd.get("website")) {
      setStatus("success");
      return;
    }

    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 text-center"
      >
        <p className="text-caption uppercase tracking-[0.12em] text-accent">Thank You</p>
        <h3 className="mt-4 font-display text-heading-l">Your message has been sent.</h3>
        <p className="mt-4 text-body-m text-fg/70">
          Our team will get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name *" name="fullName" required />
        <Field label="Company *" name="company" required />
        <Field label="Position" name="position" />
        <SelectField label="Country *" name="country" options={COUNTRY_OPTIONS} required />
        <Field label="City" name="city" />
        <Field label="Phone Number" name="phone" type="tel" dir="ltr" />
        <Field label="Business Email *" name="email" type="email" required />
        <SelectField
          label="Preferred Language"
          name="preferredLanguage"
          options={PREFERRED_LANGUAGE_OPTIONS}
        />
        <SelectField label="Industry" name="industry" options={INDUSTRY_OPTIONS} />
        <Field label="Subject *" name="subject" required />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} mt-2 resize-none`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacyAccepted"
          name="privacyAccepted"
          required
          className="mt-1 h-4 w-4 accent-current"
        />
        <label htmlFor="privacyAccepted" className="text-body-s text-fg/60">
          I agree to the Privacy Policy.
        </label>
      </div>

      {status === "error" && (
        <p className="text-body-s text-[color:var(--color-state-error)]">
          Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  dir,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  dir?: "ltr";
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        dir={dir}
        className={`${fieldClass} mt-2`}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        style={{ colorScheme: "dark" }}
        className={`${fieldClass} mt-2 bg-bg`}
      >
        <option value="" style={{ backgroundColor: "#0a0a0a", color: "#fafaf8" }}></option>
        {options.map((o) => (
          <option key={o} value={o} style={{ backgroundColor: "#0a0a0a", color: "#fafaf8" }}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
