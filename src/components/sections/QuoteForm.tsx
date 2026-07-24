"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { estimateContainer } from "@/lib/quote/container-calculator";
import {
  COUNTRY_OPTIONS,
  GRADE_OPTIONS,
  INCOTERM_OPTIONS,
  MACHINING_OPTIONS,
  MOISTURE_OPTIONS,
  PACKAGING_OPTIONS,
  PREFERRED_LANGUAGE_OPTIONS,
  PRODUCT_TYPE_OPTIONS,
  SURFACE_FINISH_OPTIONS,
} from "@/lib/quote/constants";
import type { DimensionRow, QuoteFormData } from "@/types/quote";

const emptyRow = (): DimensionRow => ({
  id: crypto.randomUUID(),
  thickness: "",
  width: "",
  length: "",
  quantity: "",
});

const fieldClass =
  "w-full border-b border-fg/20 bg-transparent py-2 text-body-m focus:border-fg focus:outline-none";
const labelClass = "text-caption uppercase tracking-[0.08em] text-fg/50";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const galleryApplication = searchParams.get("application");
  const galleryPrefill = galleryApplication
    ? `Inspired by: ${galleryApplication}${
        searchParams.get("species") ? ` — ${searchParams.get("species")}` : ""
      }`
    : "";

  const [dimensions, setDimensions] = useState<DimensionRow[]>([emptyRow()]);
  const [machining, setMachining] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  const estimate = useMemo(() => estimateContainer(dimensions), [dimensions]);

  function updateRow(id: string, field: keyof DimensionRow, value: string) {
    setDimensions((rows) =>
      rows.map((r) =>
        r.id === id ? { ...r, [field]: value === "" ? "" : Number(value) } : r
      )
    );
  }

  function addRow() {
    setDimensions((rows) => [...rows, emptyRow()]);
  }

  function removeRow(id: string) {
    setDimensions((rows) => (rows.length > 1 ? rows.filter((r) => r.id !== id) : rows));
  }

  function toggleMachining(option: string) {
    setMachining((prev) =>
      prev.includes(option) ? prev.filter((m) => m !== option) : [...prev, option]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    // Honeypot — un vrai visiteur ne remplit jamais ce champ (Phase anti-spam)
    if (fd.get("website")) {
      setStatus("success"); // on feint le succès pour ne pas alerter un bot
      return;
    }

    const payload: Partial<QuoteFormData> = {
      company: String(fd.get("company") || ""),
      country: String(fd.get("country") || ""),
      contactPerson: String(fd.get("contactPerson") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      preferredLanguage: String(fd.get("preferredLanguage") || ""),
      productType: String(fd.get("productType") || ""),
      species: "african-mahogany",
      grade: String(fd.get("grade") || ""),
      moistureContent: String(fd.get("moistureContent") || ""),
      dimensions,
      surfaceFinish: String(fd.get("surfaceFinish") || ""),
      machiningOptions: machining,
      packaging: String(fd.get("packaging") || ""),
      quantityValue: String(fd.get("quantityValue") || ""),
      destinationCountry: String(fd.get("destinationCountry") || ""),
      finalPort: String(fd.get("finalPort") || ""),
      incoterm: String(fd.get("incoterm") || ""),
      deliveryDate: String(fd.get("deliveryDate") || ""),
      comments: String(fd.get("comments") || ""),
      privacyAccepted: fd.get("privacyAccepted") === "on",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Request failed");
      setReferenceNumber(data.referenceNumber);
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
        className="mx-auto max-w-[560px] py-24 text-center"
      >
        <p className="text-caption uppercase tracking-[0.12em] text-accent">Thank You</p>
        <h3 className="mt-4 font-display text-heading-l">
          Your quotation request has been successfully received.
        </h3>
        <p className="mt-4 text-body-m text-fg/70">
          Our export department will review your request and respond as soon as possible.
        </p>
        {referenceNumber && (
          <p className="mt-6 tabular-nums text-caption uppercase tracking-[0.1em] text-fg/50">
            Reference: {referenceNumber}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-14">
      {/* Honeypot — masqué visuellement, jamais avec display:none (certains bots l'ignorent) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {/* Customer Information */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Customer Information</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Company *" name="company" required />
          <SelectField label="Country *" name="country" options={COUNTRY_OPTIONS} required />
          <Field label="Contact Person *" name="contactPerson" required />
          <Field label="Business Email *" name="email" type="email" required />
          <Field label="Phone Number" name="phone" type="tel" dir="ltr" />
          <SelectField
            label="Preferred Language"
            name="preferredLanguage"
            options={PREFERRED_LANGUAGE_OPTIONS}
          />
        </div>
      </fieldset>

      {/* Product */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Product</legend>
        <SelectField label="Product Type *" name="productType" options={PRODUCT_TYPE_OPTIONS} required />
      </fieldset>

      {/* Wood Specifications */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Wood Specifications</legend>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className={labelClass}>Species</p>
            <p className="mt-2 border-b border-fg/10 py-2 text-body-m text-fg/70">
              African Mahogany (Khaya)
            </p>
          </div>
          <SelectField label="Grade" name="grade" options={GRADE_OPTIONS} />
          <SelectField label="Moisture Content" name="moistureContent" options={MOISTURE_OPTIONS} />
        </div>
      </fieldset>

      {/* Dimensions + live calculator */}
      <fieldset>
        <legend className="mb-2 font-display text-heading-m">Dimensions</legend>
        <p className="mb-6 text-body-s text-fg/50">
          Add one row per size — thickness × width × length, with quantity.
        </p>

        <div className="space-y-4">
          {dimensions.map((row) => (
            <div key={row.id} className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:items-end">
              <NumberField
                label="Thickness (mm)"
                value={row.thickness}
                onChange={(v) => updateRow(row.id, "thickness", v)}
              />
              <NumberField
                label="Width (mm)"
                value={row.width}
                onChange={(v) => updateRow(row.id, "width", v)}
              />
              <NumberField
                label="Length (mm)"
                value={row.length}
                onChange={(v) => updateRow(row.id, "length", v)}
              />
              <NumberField
                label="Quantity (pcs)"
                value={row.quantity}
                onChange={(v) => updateRow(row.id, "quantity", v)}
              />
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                className="justify-self-start border-b border-fg/20 pb-2 text-body-s text-fg/50 hover:border-fg hover:text-fg transition-colors sm:justify-self-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addRow}
          className="mt-6 border-b border-fg/20 pb-1 text-body-s hover:border-fg transition-colors"
        >
          + Add another dimension
        </button>

        {/* Estimateur automatique de conteneur — fonctionnalité différenciante */}
        <AnimatePresence>
          {estimate && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 border border-accent/30 bg-accent/5 p-6"
            >
              <p className="text-caption uppercase tracking-[0.1em] text-accent">
                Automatic Container Estimate
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat label="Total Volume" value={`${estimate.totalVolumeM3} m³`} />
                <Stat label="Est. Weight" value={`${estimate.estimatedWeightKg.toLocaleString()} kg`} />
                <Stat label="Total Pieces" value={estimate.totalPieces.toLocaleString()} />
                <Stat
                  label="Best Fit"
                  value={
                    estimate.bestFit
                      ? estimate.bestFit.type === "multiple-40hc"
                        ? `${estimate.bestFit.containersNeeded} × 40' HC`
                        : estimate.bestFit.type.toUpperCase()
                      : "—"
                  }
                />
              </div>
              {estimate.bestFit && (
                <p className="mt-4 text-body-s text-fg/60">
                  Estimated fill rate: {estimate.bestFit.fillRate}%. This is an approximate
                  estimate for planning purposes and does not account for actual stacking
                  or dunnage — final loading is confirmed by our export team.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </fieldset>

      {/* Surface Finish */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Surface Finish</legend>
        <SelectField label="Finish" name="surfaceFinish" options={SURFACE_FINISH_OPTIONS} />
      </fieldset>

      {/* Machining Options */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Machining Options</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MACHINING_OPTIONS.map((option) => (
            <label key={option} className="flex items-center gap-2 text-body-s text-fg/70">
              <input
                type="checkbox"
                checked={machining.includes(option)}
                onChange={() => toggleMachining(option)}
                className="h-4 w-4 accent-current"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Packaging */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Packaging</legend>
        <SelectField label="Packaging" name="packaging" options={PACKAGING_OPTIONS} />
      </fieldset>

      {/* Volume */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Volume</legend>
        <div className="grid gap-6 sm:grid-cols-3">
          <Field label="Quantity (pieces or m³)" name="quantityValue" />
          <Field label="Monthly Demand" name="monthlyDemand" />
          <Field label="Annual Demand" name="annualDemand" />
        </div>
      </fieldset>

      {/* Destination */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">Destination</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField label="Destination Country" name="destinationCountry" options={COUNTRY_OPTIONS} />
          <Field label="Final Port" name="finalPort" />
          <SelectField label="Incoterm" name="incoterm" options={INCOTERM_OPTIONS} />
          <Field label="Desired Delivery Date" name="deliveryDate" type="date" />
        </div>
      </fieldset>

      {/* Attachments — UI ready, upload backend to be connected (see note to client) */}
      <fieldset>
        <legend className="mb-2 font-display text-heading-m">Attachments</legend>
        <p className="mb-4 text-body-s text-fg/50">
          PDF, DWG, DXF, images or technical drawings — max 50 MB.
        </p>
        <input
          type="file"
          multiple
          accept=".pdf,.dwg,.dxf,.zip,image/*"
          className="block w-full text-body-s text-fg/60 file:mr-4 file:border file:border-fg/20 file:bg-transparent file:px-4 file:py-2 file:text-caption file:uppercase file:tracking-[0.08em]"
        />
      </fieldset>

      {/* Comments */}
      <fieldset>
        <label className={labelClass} htmlFor="comments">
          Additional Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={4}
          defaultValue={galleryPrefill}
          className={`${fieldClass} mt-2 resize-none`}
        />
      </fieldset>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacyAccepted"
          name="privacyAccepted"
          required
          className="mt-1 h-4 w-4 accent-current"
        />
        <label htmlFor="privacyAccepted" className="text-body-s text-fg/60">
          I agree to the Privacy Policy and consent to HURASI processing my data to
          respond to this request.
        </label>
      </div>

      {status === "error" && (
        <p className="text-body-s text-[color:var(--color-state-error)]">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request My Quotation"}
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

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | "";
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input
        type="number"
        min={0}
        dir="ltr"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldClass} mt-2 tabular-nums`}
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="tabular-nums font-display text-heading-m text-fg">{value}</p>
      <p className="mt-1 text-caption uppercase tracking-[0.08em] text-fg/50">{label}</p>
    </div>
  );
}
