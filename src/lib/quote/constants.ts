/** Densité moyenne de l'Acajou Africain (Khaya spp.) séché, en kg/m³ —
 *  utilisée pour l'estimation de poids du calculateur de conteneur.
 *  Valeur indicative standard pour cette essence (~560-640 kg/m³ selon
 *  taux d'humidité) ; à affiner avec de vraies données labo si besoin. */
export const SPECIES_DENSITY_KG_M3: Record<string, number> = {
  "african-mahogany": 600,
};

/** Capacités utiles standards des conteneurs maritimes (volume interne
 *  utilisable et charge utile maximale) — valeurs indicatives usuelles
 *  du secteur bois, à ajuster si HURASI a des données de chargement
 *  réelles plus précises. */
export const CONTAINER_SPECS = {
  "20ft": { usableVolumeM3: 28, maxPayloadKg: 25000, label: "20' Standard" },
  "40ft": { usableVolumeM3: 58, maxPayloadKg: 27000, label: "40' Standard" },
  "40hc": { usableVolumeM3: 68, maxPayloadKg: 27500, label: "40' High Cube" },
} as const;

export const INDUSTRY_OPTIONS = [
  "Importer",
  "Wholesaler",
  "Architect",
  "Interior Designer",
  "Furniture Manufacturer",
  "Construction Company",
  "Hotel",
  "Developer",
  "Yacht Builder",
  "Other",
];

export const PRODUCT_TYPE_OPTIONS = [
  "Rough Sawn Lumber",
  "Kiln Dried Lumber",
  "Decking",
  "Flooring",
  "Wall Panels",
  "Stair Components",
  "Custom Products",
  "Other",
];

export const GRADE_OPTIONS = ["FAS", "Select", "Prime", "A", "AB", "B", "Custom"];

export const MOISTURE_OPTIONS = ["Green", "Air Dried", "Kiln Dried", "Custom %"];

export const SURFACE_FINISH_OPTIONS = [
  "Rough Sawn",
  "Planed (S4S)",
  "S2S",
  "Chamfered",
  "Finger Jointed",
  "Tongue & Groove",
  "Deck Profile",
  "Custom Profile",
  "Other",
];

export const MACHINING_OPTIONS = [
  "Rounded Edges",
  "Grooves",
  "End Matching",
  "Custom CNC",
  "Bevel",
  "Radius",
  "Special Profile",
  "Custom Machining",
];

export const PACKAGING_OPTIONS = [
  "Bundles",
  "Wrapped",
  "Export Pallets",
  "Container Loading",
  "Custom Packaging",
];

export const INCOTERM_OPTIONS = ["EXW", "FOB", "CIF", "DAP", "Other"];

export const PREFERRED_LANGUAGE_OPTIONS = [
  "English",
  "French",
  "Portuguese",
  "Russian",
  "Arabic",
  "Chinese",
];

/** Liste de pays volontairement large mais non exhaustive — à étendre
 *  si besoin. Triée alphabétiquement pour l'UI. */
export const COUNTRY_OPTIONS = [
  "Algeria","Angola","Argentina","Australia","Austria","Bahrain","Belgium","Brazil",
  "Cameroon","Canada","Chile","China","Colombia","Democratic Republic of the Congo",
  "Denmark","Egypt","Ethiopia","Finland","France","Gabon","Germany","Ghana","Greece",
  "India","Indonesia","Ireland","Italy","Ivory Coast","Japan","Jordan","Kenya",
  "Kuwait","Lebanon","Malaysia","Mexico","Morocco","Mozambique","Netherlands",
  "New Zealand","Nigeria","Norway","Oman","Poland","Portugal","Qatar","Romania",
  "Russia","Saudi Arabia","Senegal","Singapore","South Africa","South Korea",
  "Spain","Sweden","Switzerland","Tanzania","Thailand","Tunisia","Turkey",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States",
  "Vietnam","Zambia","Zimbabwe","Other",
];
