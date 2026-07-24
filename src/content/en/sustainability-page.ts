export interface LifeCyclePhase {
  id: string;
  title: string;
  stages: string[];
  image: string;
  imageAlt: string;
}

export interface SimpleSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
}

export const sustainabilityIntro = {
  eyebrow: "Sustainability",
  title: "Growing Tomorrow's Forests",
  subtitle:
    "Sustainably managed African Mahogany plantations that combine environmental responsibility, scientific forestry, and premium timber production.",
  heroImage: "/images/sustainability/sustainable-forestry.jpg",
};

export const philosophySection: SimpleSection = {
  id: "philosophy",
  title: "Our Philosophy",
  paragraphs: [
    "Sustainability at HURASI is not a separate initiative — it is integrated into every forestry and industrial decision we make.",
    "Long-term thinking guides how we plan each plantation cycle, decades before a single board reaches a customer. Responsible management means measuring outcomes not only in volume, but in forest health, soil condition, and water quality over time.",
    "We treat forest stewardship, resource efficiency, and respect for biodiversity as operating requirements, not marketing themes — and we hold ourselves to continuous improvement as new forestry science and monitoring tools become available.",
  ],
};

export const whyPlantationSection: SimpleSection = {
  id: "why-plantation",
  title: "Why Plantation African Mahogany?",
  paragraphs: [
    "Plantation-grown African Mahogany exists to reduce pressure on natural forests while meeting real, growing demand for this species.",
    "Because the resource is cultivated under controlled conditions, every log has a known origin, a documented growth history, and a verifiable chain of custody — advantages that natural-forest sourcing cannot offer at scale.",
  ],
  bullets: [
    "Reduced pressure on natural forests",
    "Controlled, planned production",
    "Known origin and growth history",
    "Full traceability from seedling to shipment",
    "Higher, more consistent wood quality",
    "Reliable, predictable long-term supply",
    "Scientific forest management at every stage",
  ],
};

export const lifeCyclePhases: LifeCyclePhase[] = [
  {
    id: "seed-nursery",
    title: "Seed Selection & Nursery",
    stages: ["Seed Selection", "Nursery", "Young Seedlings"],
    image: "/images/sustainability/seed-to-forest.jpg",
    imageAlt: "Young African Mahogany seedling in nursery conditions",
  },
  {
    id: "establishment-monitoring",
    title: "Establishment & Growth Monitoring",
    stages: [
      "Field Planting",
      "Growth Monitoring",
      "Soil Management",
      "Water Management",
    ],
    image: "/images/sustainability/scientific-management.jpg",
    imageAlt: "Forestry team monitoring tree growth in the plantation",
  },
  {
    id: "silviculture",
    title: "Silviculture & Health Monitoring",
    stages: [
      "Pruning",
      "Formative Pruning",
      "Thinning Operations",
      "Health Monitoring",
      "Forest Inventory",
    ],
    image: "/images/sustainability/technology-innovation.jpg",
    imageAlt: "Drone-based monitoring above the mahogany canopy",
  },
  {
    id: "harvest-transport",
    title: "Responsible Harvest & Transport",
    stages: ["Responsible Harvest", "Log Transportation"],
    image: "/images/sustainability/responsible-harvesting.jpg",
    imageAlt: "Selective harvesting of mature mahogany logs",
  },
  {
    id: "processing-export",
    title: "Processing & Worldwide Export",
    stages: [
      "Sawmill",
      "Kiln Drying",
      "Manufacturing",
      "Quality Inspection",
      "Packaging",
      "Worldwide Export",
    ],
    image: "/images/sustainability/efficient-production.jpg",
    imageAlt: "Sawmill processing of mahogany lumber",
  },
];

export const scientificSection: SimpleSection = {
  id: "scientific-forestry",
  title: "Scientific Forestry Management",
  paragraphs: [
    "Every plantation decision begins with data. Site selection accounts for climate adaptation, soil analysis, and drainage — factors that determine growth performance decades in advance.",
    "Genetic quality, tree spacing, and root development are managed to optimize growth rate without compromising stem form or wood density. Diameter monitoring and forest inventory are conducted at regular intervals to track stand performance against expected growth curves.",
    "GIS mapping and drone-based monitoring support precise, block-by-block forest data collection, feeding a digital traceability system that connects every log back to its plantation block of origin.",
  ],
  image: "/images/sustainability/technology-innovation.jpg",
  imageAlt: "GIS and drone monitoring technology used across HURASI plantations",
};

export const silvicultureSection: SimpleSection = {
  id: "silviculture-practice",
  title: "Responsible Silviculture",
  paragraphs: [
    "Selective pruning and canopy management support straight stem growth and reduce knot formation, improving both structural quality and appearance of the finished lumber.",
    "Disease prevention relies on integrated pest management rather than blanket chemical treatment, preserving natural biological balance within the plantation.",
    "Water and soil conservation practices are applied throughout the growth cycle to protect long-term site productivity — the plantation's ability to support future rotations is treated as a primary constraint, not an afterthought.",
  ],
  bullets: [
    "Selective and formative pruning",
    "Canopy management",
    "Integrated pest management",
    "Water conservation",
    "Soil conservation",
    "Growth optimization for stem quality",
  ],
};

export const biodiversitySection: SimpleSection = {
  id: "biodiversity",
  title: "Biodiversity",
  paragraphs: [
    "Plantation forestry and biodiversity conservation are not mutually exclusive when management is planned at the landscape level.",
    "Native vegetation corridors are maintained between plantation blocks, supporting wildlife movement across the property. Riparian buffers along watercourses protect water quality and preserve habitat for species dependent on riverine ecosystems.",
    "Landscape-level planning identifies and protects areas of native vegetation, balancing productive plantation area with habitat conservation.",
  ],
  image: "/images/sustainability/biodiversity-protection.jpg",
  imageAlt: "Watercourse and native vegetation buffer within the plantation landscape",
};

export const carbonSection: SimpleSection = {
  id: "carbon",
  title: "Carbon",
  paragraphs: [
    "As African Mahogany trees grow, they capture atmospheric CO₂ through photosynthesis and store carbon within their wood fibre.",
    "This carbon remains stored within the wood after harvest — the amount of time it stays out of the atmosphere depends on the lifespan of the product it becomes. Long-life applications such as furniture, joinery, and architectural millwork extend that storage period well beyond the growth cycle itself.",
    "We present this as a scientific characteristic of wood as a material, not as an offset claim — plantation forestry is one part of a broader sustainability picture, not a complete solution on its own.",
  ],
  image: "/images/sustainability/carbon-storage.jpg",
  imageAlt: "Looking up through the mature mahogany canopy",
};

export const fscSection: SimpleSection = {
  id: "fsc-certification",
  title: "FSC Certification",
  paragraphs: [
    "Both our forestry operations and our sawmill are independently certified under the Forest Stewardship Council (FSC) system — a globally recognized standard for responsible forest management.",
    "FSC certification requires documented compliance across environmental, social, and economic criteria: responsible forest management practices, verified Chain of Custody from forest to finished product, and independent third-party auditing.",
    "For our customers, this certification provides externally verified assurance — not a self-declared claim — that the timber they purchase originates from a responsibly managed source.",
  ],
  bullets: [
    "Responsible forest management",
    "Verified Chain of Custody",
    "Independent third-party certification",
    "Defined environmental requirements",
    "Social responsibility criteria",
    "Economic sustainability standards",
  ],
  image: "/images/sustainability/certified-quality.jpg",
  imageAlt: "FSC certification stamp on packaged mahogany boards",
};

export const manufacturingSection: SimpleSection = {
  id: "responsible-manufacturing",
  title: "Responsible Manufacturing",
  paragraphs: [
    "Sustainability continues past the forest gate. Our sawmill operations are designed to maximize wood recovery from every log, reducing waste at the point of processing.",
    "Kiln drying is optimized for energy efficiency, and sawmill by-products — offcuts, sawdust, and bark — are reused as biomass fuel rather than discarded. Dust collection and water management systems support a cleaner, more controlled production environment.",
    "Quality control is applied at each stage of processing, supporting a culture of continuous improvement across the entire manufacturing operation.",
  ],
};

export const globalResponsibilitySection: SimpleSection = {
  id: "global-responsibility",
  title: "Global Responsibility",
  paragraphs: [
    "Our commitment extends beyond our own operations to the partnerships we build with customers worldwide.",
    "That means reliable long-term supply, responsible sourcing practices, and consistent premium quality — supported by full compliance with international trade and environmental regulations.",
    "We aim for transparency in every customer relationship: clear documentation, honest communication about lead times and capacity, and a long-term view of what it means to be a trusted timber partner.",
  ],
};

export const sustainabilityClosing = {
  title: "Building the Future with Responsible Wood",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "Explore Our Products",
  image: "/images/sustainability/delivering-worldwide.jpg",
  imageAlt: "Cargo ship transporting containers at sunset",
};
