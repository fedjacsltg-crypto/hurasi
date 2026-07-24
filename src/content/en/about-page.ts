export interface AboutSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
}

export const aboutIntro = {
  eyebrow: "About HURASI",
  title: "Rooted in Responsibility. Driven by Excellence.",
  lead: "Exceptional timber is never the result of chance. It is the outcome of responsible forestry, disciplined craftsmanship, industrial precision, and a long-term commitment to quality.",
  paragraphs: [
    "At HURASI, we have built our business around one simple principle: every piece of African Mahogany should reflect the same standards of care and consistency that shaped it from the very beginning.",
    "From our FSC-certified forest plantations to our FSC-certified sawmill, we manage every essential stage of the production process with a single objective—to provide premium African Mahogany that meets the expectations of the world's most demanding professionals.",
  ],
  heroImage: "/images/about/header-plantation.jpg",
};

export const aboutSections: AboutSection[] = [
  {
    id: "integrated-partner",
    title: "A Fully Integrated Timber Partner",
    paragraphs: [
      "In today's global timber industry, consistency begins with control.",
      "By managing both our forestry operations and our industrial processing, HURASI offers a fully integrated production model that ensures traceability, quality, and reliability from forest to finished lumber.",
      "Our expertise extends across the entire value chain:",
    ],
    bullets: [
      "Forest plantation management",
      "Responsible harvesting",
      "Log selection",
      "Sawmill operations",
      "Kiln drying",
      "Lumber grading",
      "Precision processing",
      "Packaging",
      "Export logistics",
    ],
    image: "/images/about/integrated-sawmill.jpg",
    imageAlt: "Stacked sawn mahogany boards in the HURASI workshop",
  },
  {
    id: "philosophy",
    title: "Our Philosophy",
    paragraphs: [
      "We believe that premium timber deserves more than efficient production. It deserves thoughtful management.",
      "Every decision—from plantation planning to final inspection—is guided by respect for the material, responsibility toward the environment, and commitment to our customers.",
      "Rather than pursuing short-term results, we invest in sustainable forestry practices, modern industrial processes, and long-term partnerships built on trust.",
      "Because the true value of wood is measured not only by its appearance, but by the confidence it inspires.",
    ],
  },
  {
    id: "mahogany-value",
    title: "The Value of African Mahogany",
    paragraphs: [
      "African Mahogany has earned its reputation as one of the world's most respected hardwood species.",
      "Its refined grain, dimensional stability, machining performance, and natural elegance make it a preferred material for architecture, luxury interiors, fine furniture, bespoke joinery, and high-end manufacturing.",
      "At HURASI, our role is to preserve and enhance these natural qualities through careful forestry management and precise industrial transformation.",
      "Every board leaving our facilities reflects the character of the species and the discipline of the processes behind it.",
    ],
    image: "/images/about/mahogany-value.jpg",
    imageAlt: "Freshly cut African Mahogany logs showing rich natural color",
  },
  {
    id: "sustainability",
    title: "Sustainability as a Long-Term Commitment",
    paragraphs: [
      "Responsible forestry is fundamental to everything we do.",
      "Our operations are built around practices that promote sustainable resource management, long-term forest productivity, and internationally recognized standards of responsible production.",
      "The certification of both our plantations and our sawmill under the FSC system reflects our commitment to transparency, traceability, and continuous improvement throughout the production chain.",
      "For our customers, it provides confidence that the timber they receive originates from responsibly managed sources supported by independently verified standards.",
    ],
    image: "/images/about/sustainability-saplings.jpg",
    imageAlt: "Young mahogany saplings ready for plantation",
  },
  {
    id: "precision",
    title: "Precision Through Every Stage",
    paragraphs: [
      "The quality of timber is determined by thousands of decisions made throughout its journey.",
    ],
    bullets: [
      "Species selection",
      "Plantation management",
      "Harvest planning",
      "Log identification",
      "Sawing",
      "Drying",
      "Grading",
      "Inspection",
      "Packaging",
    ],
    image: "/images/about/precision-logs.jpg",
    imageAlt: "Mahogany trunks ready for identification and sawing",
  },
  {
    id: "partnerships",
    title: "Built for International Partnerships",
    paragraphs: [
      "Our customers operate in some of the world's most demanding industries: architects designing landmark projects, furniture manufacturers producing premium collections, interior specialists creating timeless spaces, industrial processors requiring reliable raw materials, international importers serving global markets.",
      "While every customer has unique technical requirements, they all share one expectation: confidence in their supplier.",
      "Our mission is to earn that confidence through product quality, transparent communication, reliable execution, and long-term commitment.",
    ],
    image: "/images/about/partnerships-founder.jpg",
    imageAlt: "HURASI team member on site at the plantation",
  },
  {
    id: "more-than-supplier",
    title: "More Than a Supplier",
    paragraphs: [
      "We see every shipment as the beginning of a relationship rather than the end of a transaction.",
      "Successful partnerships are built on consistency, responsiveness, and mutual trust.",
      "By combining responsible forestry, industrial expertise, and a customer-focused approach, HURASI aims to become a trusted partner for companies seeking premium African Mahogany with complete confidence in its origin, quality, and performance.",
    ],
  },
  {
    id: "looking-forward",
    title: "Looking Forward",
    paragraphs: [
      "The global timber industry continues to evolve, driven by higher expectations for sustainability, traceability, and product quality.",
      "HURASI embraces this evolution by continuously strengthening its forestry practices, refining its manufacturing processes, and investing in long-term operational excellence.",
      "As markets change and new challenges emerge, our commitment remains constant: to deliver responsibly grown African Mahogany with uncompromising quality, reliable supply, and the integrity that international partners expect.",
    ],
    image: "/images/about/looking-forward-seedling.jpg",
    imageAlt: "Young mahogany seedling growing in the plantation",
  },
];

export const aboutClosing = {
  title: "Our Commitment",
  paragraphs: [
    "From the first seedling planted in our forests to the final container prepared for export, every decision reflects the same purpose: to create lasting value through responsible forestry, precision manufacturing, and trusted partnerships.",
    "Because exceptional timber deserves exceptional stewardship.",
  ],
  image: "/images/about/closing-team.jpg",
  imageAlt: "HURASI team member walking through the mahogany plantation",
};
