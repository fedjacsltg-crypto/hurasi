import { CONTAINER_SPECS, SPECIES_DENSITY_KG_M3 } from "./constants";
import type { ContainerEstimate, DimensionRow } from "@/types/quote";

/**
 * Estimateur automatique de conteneur — fonctionnalité différenciante
 * demandée par le client. Calcule le volume total, le poids estimé,
 * et détermine le meilleur conteneur (20', 40', 40' HC) avec le taux
 * de remplissage correspondant.
 *
 * Hypothèses volontairement documentées (à affiner avec de vraies
 * données HURASI si disponibles) :
 * - Densité utilisée : Acajou Africain ~600 kg/m³ (bois séché)
 * - Capacités conteneurs : valeurs standards indicatives du secteur
 * - Le calcul ne modélise pas l'arrimage réel (cales perdues, formes
 *   irrégulières) — c'est une ESTIMATION, présentée comme telle à
 *   l'utilisateur, jamais comme un chiffre d'expédition garanti.
 */
export function estimateContainer(
  rows: DimensionRow[],
  species: string = "african-mahogany"
): ContainerEstimate | null {
  const validRows = rows.filter(
    (r) =>
      typeof r.thickness === "number" &&
      typeof r.width === "number" &&
      typeof r.length === "number" &&
      typeof r.quantity === "number" &&
      r.thickness > 0 &&
      r.width > 0 &&
      r.length > 0 &&
      r.quantity > 0
  );

  if (validRows.length === 0) return null;

  let totalVolumeM3 = 0;
  let totalPieces = 0;

  for (const row of validRows) {
    const t = row.thickness as number;
    const w = row.width as number;
    const l = row.length as number;
    const qty = row.quantity as number;
    // mm³ → m³
    const pieceVolumeM3 = (t / 1000) * (w / 1000) * (l / 1000);
    totalVolumeM3 += pieceVolumeM3 * qty;
    totalPieces += qty;
  }

  const density = SPECIES_DENSITY_KG_M3[species] ?? SPECIES_DENSITY_KG_M3["african-mahogany"];
  const estimatedWeightKg = totalVolumeM3 * density;

  const bestFit = determineBestFit(totalVolumeM3, estimatedWeightKg);

  return {
    totalVolumeM3: round(totalVolumeM3, 3),
    estimatedWeightKg: round(estimatedWeightKg, 0),
    totalPieces,
    bestFit,
  };
}

function determineBestFit(
  volumeM3: number,
  weightKg: number
): ContainerEstimate["bestFit"] {
  const options: Array<{
    key: "20ft" | "40ft" | "40hc";
    spec: { usableVolumeM3: number; maxPayloadKg: number; label: string };
  }> = [
    { key: "20ft", spec: CONTAINER_SPECS["20ft"] },
    { key: "40ft", spec: CONTAINER_SPECS["40ft"] },
    { key: "40hc", spec: CONTAINER_SPECS["40hc"] },
  ];

  for (const { key, spec } of options) {
    const volumeFits = volumeM3 <= spec.usableVolumeM3;
    const weightFits = weightKg <= spec.maxPayloadKg;
    if (volumeFits && weightFits) {
      const fillRate = Math.max(
        volumeM3 / spec.usableVolumeM3,
        weightKg / spec.maxPayloadKg
      );
      return { type: key, fillRate: round(fillRate * 100, 1), containersNeeded: 1 };
    }
  }

  // Ne tient dans aucun conteneur unique — estimer le nombre de 40' HC nécessaires
  const hc = CONTAINER_SPECS["40hc"];
  const byVolume = Math.ceil(volumeM3 / hc.usableVolumeM3);
  const byWeight = Math.ceil(weightKg / hc.maxPayloadKg);
  const containersNeeded = Math.max(byVolume, byWeight, 1);
  const fillRate = Math.max(
    volumeM3 / (hc.usableVolumeM3 * containersNeeded),
    weightKg / (hc.maxPayloadKg * containersNeeded)
  );

  return {
    type: "multiple-40hc",
    fillRate: round(fillRate * 100, 1),
    containersNeeded,
  };
}

function round(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
