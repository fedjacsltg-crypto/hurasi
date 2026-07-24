export interface OriginSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image: string;
  imageAlt: string;
}

export const originIntro = {
  eyebrow: "Our Forests",
  title: "The Origin of Excellence",
  subtitle: "Where African Mahogany Meets Brazilian Expertise",
  lead: "The story of exceptional timber begins long before the first board is sawn. It begins with the careful selection of a species, the stewardship of the land on which it grows, and the commitment to manage every stage of its development with precision, patience, and responsibility.",
  paragraphs: [
    "African Mahogany (Khaya ivorensis) is native to the tropical forests of West Africa. Introduced to Brazil several decades ago, it found ideal growing conditions that allow the species to express its full genetic potential. Consistent rainfall, fertile soils, and tropical climate provide an environment where healthy, straight, and structurally stable trees can be cultivated under controlled plantation forestry.",
    "At HURASI, we believe exceptional timber is not harvested—it is grown. Every tree represents years of planning, silvicultural expertise, and continuous investment in responsible forestry.",
  ],
  heroImage: "/images/forests/plantation-aerial.jpg",
};

export const originSections: OriginSection[] = [
  {
    id: "growing-timber",
    title: "Growing Timber, Not Just Trees",
    paragraphs: [
      "Our forestry model is based on long-term management rather than short-term extraction.",
      "Each plantation begins with carefully selected seedlings grown under controlled nursery conditions before being established within our FSC-certified forest concessions.",
      "Throughout the entire growth cycle, our forestry teams monitor tree development, spacing, nutrition, health, and stand performance to encourage uniform growth, structural integrity, and superior wood quality.",
      "This scientific approach to plantation management ensures consistent fibre characteristics, predictable density, and excellent dimensional stability—qualities highly valued by architects, manufacturers, and industrial processors around the world.",
      "Because premium hardwood is created over decades, every forestry decision made today determines the quality delivered tomorrow.",
    ],
    image: "/images/forests/seedling.jpg",
    imageAlt: "Young mahogany seedling growing in a nursery row",
  },
  {
    id: "traceability",
    title: "Responsible Forestry with Complete Traceability",
    paragraphs: [
      "Traceability is one of the most valuable assets in today's global timber industry.",
      "Every log processed by HURASI originates from responsibly managed FSC-certified plantations under our direct control.",
      "This integrated management model provides complete visibility throughout the production cycle—from seedling establishment and plantation management to harvesting, processing, grading, and international shipment.",
      "For our customers, complete traceability means confidence: confidence in legal origin, confidence in responsible forest management, confidence in product consistency, confidence in long-term supply.",
    ],
    image: "/images/forests/founder-trunk.jpg",
    imageAlt: "HURASI team member beside a mature mahogany tree in the plantation",
  },
  {
    id: "engineering-quality",
    title: "Engineering Quality at the Source",
    paragraphs: [
      "Wood quality is determined long before machining begins.",
      "Species genetics, plantation management, harvesting techniques, sawing patterns, moisture control, and grading procedures all influence the final performance of the material.",
      "Our industrial operations are designed to preserve the natural characteristics of African Mahogany while maximizing structural integrity, appearance, and machining performance.",
      "Rather than simply producing lumber, we engineer timber solutions capable of meeting the expectations of demanding international markets.",
    ],
    image: "/images/forests/rough-sawn-slabs.jpg",
    imageAlt: "Freshly sawn mahogany slabs",
  },
  {
    id: "vertical-integration",
    title: "Fully Integrated from Forest to Finished Lumber",
    paragraphs: [
      "Few companies control every critical stage of the production process. HURASI does.",
      "Our vertically integrated operation encompasses:",
    ],
    bullets: [
      "FSC-certified forest plantations",
      "Responsible harvesting",
      "Log transportation",
      "FSC-certified sawmill operations",
      "Lumber processing",
      "Kiln drying",
      "Quality grading",
      "Precision machining",
      "Packaging",
      "Export logistics",
    ],
    image: "/images/forests/log-crosscuts.jpg",
    imageAlt: "Cross-sections of mahogany logs",
  },
  {
    id: "fsc-certification",
    title: "FSC Certification Beyond Compliance",
    paragraphs: [
      "For HURASI, FSC certification is not simply a label.",
      "It represents an independently verified commitment to responsible forest stewardship, environmental protection, social responsibility, and transparent business practices.",
      "Both our forest operations and our industrial facilities operate under FSC certification, ensuring that responsible management extends throughout the entire production chain.",
    ],
    image: "/images/forests/seed-pod.jpg",
    imageAlt: "Mahogany seed pod",
  },
  {
    id: "international-markets",
    title: "Built for International Markets",
    paragraphs: [
      "Our customers do not purchase timber. They purchase confidence.",
      "Confidence that specifications will be respected. Confidence that moisture content will be controlled. Confidence that dimensions will remain consistent. Confidence that documentation will meet international import requirements. Confidence that supply will remain reliable over time.",
      "Every shipment leaving HURASI reflects decades of forestry investment, industrial expertise, and uncompromising quality control.",
    ],
    image: "/images/forests/trunks-ready.jpg",
    imageAlt: "Mahogany trunks ready for transport",
  },
];

export const originClosing = {
  title: "A Long-Term Partner",
  paragraphs: [
    "Markets evolve. Regulations become more demanding. Sustainability expectations continue to rise.",
    "Our mission is to remain ahead of those expectations by combining responsible forestry, industrial excellence, and complete operational control.",
    "From the first seedling to the final container loaded for export, every decision is guided by one objective: deliver African Mahogany that meets the highest international standards while protecting the natural resources entrusted to our care.",
    "Because excellence is never produced by chance. It is cultivated over generations.",
  ],
  image: "/images/forests/team-forest.jpg",
  imageAlt: "HURASI team member walking through the mahogany plantation",
};
