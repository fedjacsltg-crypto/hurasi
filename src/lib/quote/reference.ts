/** Génère un numéro de référence unique lisible : HRS-YYYYMMDD-XXXXX */
export function generateReferenceNumber(): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `HRS-${date}-${random}`;
}
