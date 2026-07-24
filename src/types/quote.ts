export interface DimensionRow {
  id: string;
  thickness: number | "";
  width: number | "";
  length: number | "";
  quantity: number | "";
}

export interface ContactFormData {
  fullName: string;
  company: string;
  position: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  preferredLanguage: string;
  industry: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
  /** Champ honeypot — doit toujours rester vide (Phase anti-spam). */
  website: string;
}

export interface QuoteFormData {
  company: string;
  country: string;
  contactPerson: string;
  email: string;
  phone: string;
  preferredLanguage: string;
  productType: string;
  species: string;
  grade: string;
  moistureContent: string;
  moistureCustom: string;
  dimensions: DimensionRow[];
  surfaceFinish: string;
  machiningOptions: string[];
  packaging: string;
  quantityUnit: "pieces" | "m3" | "container";
  quantityValue: string;
  monthlyDemand: string;
  annualDemand: string;
  destinationCountry: string;
  finalPort: string;
  incoterm: string;
  deliveryDate: string;
  comments: string;
  privacyAccepted: boolean;
  website: string;
}

export interface ContainerEstimate {
  totalVolumeM3: number;
  estimatedWeightKg: number;
  totalPieces: number;
  bestFit: {
    type: "20ft" | "40ft" | "40hc" | "multiple-40hc";
    fillRate: number;
    containersNeeded: number;
  } | null;
}
