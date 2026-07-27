"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("quoteForm");
  const tOptions = useTranslations("quoteOptions");
  const productTypeLabels = Object.fromEntries(
    Object.keys(tOptions.raw("productType")).map((k) => [k, tOptions(`productType.${k}`)])
  );
  const moistureLabels = Object.fromEntries(
    Object.keys(tOptions.raw("moisture")).map((k) => [k, tOptions(`moisture.${k}`)])
  );
  const surfaceFinishLabels = Object.fromEntries(
    Object.keys(tOptions.raw("surfaceFinish")).map((k) => [k, tOptions(`surfaceFinish.${k}`)])
  );
  const machiningLabels = Object.fromEntries(
    Object.keys(tOptions.raw("machining")).map((k) => [k, tOptions(`machining.${k}`)])
  );
  const packagingLabels = Object.fromEntries(
    Object.keys(tOptions.raw("packaging")).map((k) => [k, tOptions(`packaging.${k}`)])
  );
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
        <p className="text-caption uppercase tracking-[0.12em] text-accent">{t("thankYouTitle")}</p>
        <h3 className="mt-4 font-display text-heading-l">
          {t("successTitle")}
        </h3>
        <p className="mt-4 text-body-m text-fg/70">
          {t("successBody")}
        </p>
        {referenceNumber && (
          <p className="mt-6 tabular-nums text-caption uppercase tracking-[0.1em] text-fg/50">
            {t("referenceLabel")}: {referenceNumber}
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
        <legend className="mb-6 font-display text-heading-m">{t("sectionCustomerInfo")}</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label={t("company")} name="company" required />
          <SelectField label={t("country")} name="country" options={COUNTRY_OPTIONS} required />
          <Field label={t("contactPerson")} name="contactPerson" required />
          <Field label={t("businessEmail")} name="email" type="email" required />
          <Field label={t("phoneNumber")} name="phone" type="tel" dir="ltr" />
          <SelectField
            label={t("preferredLanguage")}
            name="preferredLanguage"
            options={PREFERRED_LANGUAGE_OPTIONS}
          />
        </div>
      </fieldset>

      {/* Product */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">{t("sectionProduct")}</legend>
        <SelectField
          label={t("productType")}
          name="productType"
          options={PRODUCT_TYPE_OPTIONS}
          optionLabels={productTypeLabels}
          required
        />
      </fieldset>

      {/* Wood Specifications */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">{t("sectionWoodSpecs")}</legend>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className={labelClass}>{t("species")}</p>
            <p className="mt-2 border-b border-fg/10 py-2 text-body-m text-fg/70">
              African Mahogany (Khaya)
            </p>
          </div>
          <SelectField label={t("grade")} name="grade" options={GRADE_OPTIONS} />
          <SelectField
            label={t("moistureContent")}
            name="moistureContent"
            options={MOISTURE_OPTIONS}
            optionLabels={moistureLabels}
          />
        </div>
      </fieldset>

      {/* Dimensions + live calculator */}
      <fieldset>
        <legend className="mb-2 font-display text-heading-m">{t("sectionDimensions")}</legend>
        <p className="mb-6 text-body-s text-fg/50">{t("dimensionsHint")}</p>

        <div className="space-y-4">
          {dimensions.map((row) => (
            <div key={row.id} className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:items-end">
              <NumberField
                label={t("thickness")}
                value={row.thickness}
                onChange={(v) => updateRow(row.id, "thickness", v)}
              />
              <NumberField
                label={t("width")}
                value={row.width}
                onChange={(v) => updateRow(row.id, "width", v)}
              />
              <NumberField
                label={t("length")}
                value={row.length}
                onChange={(v) => updateRow(row.id, "length", v)}
              />
              <NumberField
                label={t("quantity")}
                value={row.quantity}
                onChange={(v) => updateRow(row.id, "quantity", v)}
              />
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                className="justify-self-start border-b border-fg/20 pb-2 text-body-s text-fg/50 hover:border-fg hover:text-fg transition-colors sm:justify-self-auto"
              >
                {t("remove")}
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addRow}
          className="mt-6 border-b border-fg/20 pb-1 text-body-s hover:border-fg transition-colors"
        >
          {t("addDimension")}
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
                {t("containerEstimateTitle")}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat label={t("totalVolume")} value={`${estimate.totalVolumeM3} m³`} />
                <Stat label={t("estWeight")} value={`${estimate.estimatedWeightKg.toLocaleString()} kg`} />
                <Stat label={t("totalPieces")} value={estimate.totalPieces.toLocaleString()} />
                <Stat
                  label={t("bestFit")}
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
                  {t("fillRateNote", { rate: estimate.bestFit.fillRate })}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </fieldset>

      {/* Surface Finish */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">{t("sectionSurfaceFinish")}</legend>
        <SelectField
          label={t("finish")}
          name="surfaceFinish"
          options={SURFACE_FINISH_OPTIONS}
          optionLabels={surfaceFinishLabels}
        />
      </fieldset>

      {/* Machining Options */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">{t("sectionMachining")}</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MACHINING_OPTIONS.map((option) => (
            <label key={option} className="flex items-center gap-2 text-body-s text-fg/70">
              <input
                type="checkbox"
                checked={machining.includes(option)}
                onChange={() => toggleMachining(option)}
                className="h-4 w-4 accent-current"
              />
              {machiningLabels[option] ?? option}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Packaging */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">{t("sectionPackaging")}</legend>
        <SelectField
          label={t("packaging")}
          name="packaging"
          options={PACKAGING_OPTIONS}
          optionLabels={packagingLabels}
        />
      </fieldset>

      {/* Volume */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">{t("sectionVolume")}</legend>
        <div className="grid gap-6 sm:grid-cols-3">
          <Field label={t("quantityPiecesM3")} name="quantityValue" />
          <Field label={t("monthlyDemand")} name="monthlyDemand" />
          <Field label={t("annualDemand")} name="annualDemand" />
        </div>
      </fieldset>

      {/* Destination */}
      <fieldset>
        <legend className="mb-6 font-display text-heading-m">{t("sectionDestination")}</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField label={t("destinationCountry")} name="destinationCountry" options={COUNTRY_OPTIONS} />
          <Field label={t("finalPort")} name="finalPort" />
          <SelectField label={t("incoterm")} name="incoterm" options={INCOTERM_OPTIONS} />
          <Field label={t("deliveryDate")} name="deliveryDate" type="date" />
        </div>
      </fieldset>

      {/* Attachments — UI ready, upload backend to be connected (see note to client) */}
      <fieldset>
        <legend className="mb-2 font-display text-heading-m">{t("sectionAttachments")}</legend>
        <p className="mb-4 text-body-s text-fg/50">{t("attachmentsHint")}</p>
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
          {t("additionalComments")}
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
          {t("privacyConsent")}
        </label>
      </div>

      {status === "error" && (
        <p className="text-body-s text-[color:var(--color-state-error)]">
          {t("errorMessage")}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? t("sending") : t("submit")}
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
  optionLabels,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  /** Libellés traduits affichés à l'écran — la valeur soumise (name=)
   *  reste toujours la chaîne anglaise canonique d'origine. */
  optionLabels?: Record<string, string>;
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
            {optionLabels?.[o] ?? o}
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
