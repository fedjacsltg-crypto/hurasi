export interface ProfessionalCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const productsIntro = {
  eyebrow: "Products",
  title: "Premium African Mahogany, Crafted for Every Application",
  lead: "At HURASI, we do not manufacture standardized products. We produce premium African Mahogany tailored to the precise technical, dimensional, and aesthetic requirements of each customer.",
  paragraphs: [
    "Because we manage our own FSC-certified plantations and operate our own FSC-certified sawmill, every order begins with carefully selected logs and is processed to meet your exact specifications.",
    "From architectural projects to fine furniture manufacturing, our production is built around flexibility, consistency, and long-term reliability.",
  ],
  heroImage: "/images/products/header-board-perspective.jpg",
};

export const materialSection = {
  title: "A Material Without Limits",
  paragraphs: [
    "African Mahogany is valued worldwide for its warm appearance, dimensional stability, excellent machining properties, and natural durability.",
    "Its versatility allows it to perform across a wide range of industries where appearance, precision, and long-term performance are essential.",
    "Whether your project requires structural timber, fine joinery, premium furniture components, or custom architectural elements, HURASI delivers lumber prepared for your specific application.",
    "Every order is manufactured according to your required dimensions, grading specifications, moisture content, and export requirements.",
  ],
  image: "/images/products/material-closeup.jpg",
  imageAlt: "Close-up of African Mahogany boards showing natural grain",
};

export const specSection = {
  title: "Manufactured to Your Specifications",
  paragraphs: [
    "Every project is different. Every customer has different technical requirements.",
    "Rather than limiting our production to fixed dimensions, our industrial capabilities allow us to manufacture lumber according to your specifications.",
  ],
  bullets: [
    "Custom thicknesses",
    "Custom widths",
    "Custom lengths",
    "Rough sawn lumber",
    "Kiln-dried lumber",
    "S4S lumber",
    "Precision machined components",
    "Finger-jointed components (where applicable)",
    "Custom packaging",
    "Export-ready preparation",
  ],
  closing:
    "From single containers to long-term supply programs, our production adapts to your business—not the other way around.",
  image: "/images/products/export-ready-pallet.jpg",
  imageAlt: "Export-ready pallet of packaged mahogany boards",
};

export const professionalsIntro = {
  eyebrow: "Built for Professionals",
  title: "Our African Mahogany is selected and processed for demanding industries where quality, consistency, and reliability cannot be compromised.",
};

export const professionalCategories: ProfessionalCategory[] = [
  {
    id: "architecture",
    title: "Architecture & Construction",
    description:
      "Premium hardwood for façades, wall cladding, ceilings, windows, doors, staircases, pergolas, decking, and bespoke architectural elements. Designed for projects where natural elegance meets long-term performance.",
    image: "/images/products/application-staircase.jpg",
    imageAlt: "Illustrative example — mahogany staircase application",
  },
  {
    id: "furniture",
    title: "Furniture Manufacturing",
    description:
      "Carefully selected lumber for luxury furniture, cabinetry, tables, shelving, wardrobes, and interior joinery. Excellent machining characteristics, stable grain, and refined appearance make African Mahogany a preferred material for premium furniture production.",
    image: "/images/products/application-furniture.jpg",
    imageAlt: "Illustrative example — mahogany furniture and interior joinery",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "Natural wood surfaces that bring warmth, sophistication, and timeless character to residential, hospitality, and commercial interiors. Suitable for decorative panels, custom millwork, luxury interiors, and bespoke installations.",
    image: "/images/products/application-interior.jpg",
    imageAlt: "Illustrative example — mahogany interior millwork",
  },
  {
    id: "marine",
    title: "Marine & Yacht Interiors",
    description:
      "African Mahogany is appreciated for its beauty, workability, and dimensional stability in premium marine interiors, yacht joinery, and luxury finishing applications.",
    image: "/images/products/application-marine.jpg",
    imageAlt: "Illustrative example — mahogany yacht interior joinery",
  },
  {
    id: "industrial",
    title: "Industrial Manufacturing",
    description:
      "Reliable raw material for manufacturers requiring consistent machining performance, stable moisture content, and dependable supply across continuous production programs.",
    image: "/images/products/stacked-boards.jpg",
    imageAlt: "Stacked mahogany boards ready for industrial processing",
  },
];

export const qualitySection = {
  title: "Quality Begins Long Before Production",
  paragraphs: [
    "The quality of finished lumber depends on decisions made years before harvesting.",
    "By managing our plantations directly, we maintain strict control over forest development, harvesting schedules, log selection, and industrial processing.",
    "Each production stage is designed to preserve the natural qualities that make African Mahogany one of the world's most respected hardwood species.",
    "Our integrated production model allows us to deliver:",
  ],
  bullets: [
    "Consistent grading",
    "Reliable dimensions",
    "Controlled moisture content",
    "Superior machining performance",
    "Full traceability",
    "FSC-certified origin",
  ],
  image: "/images/products/grain-detail.jpg",
  imageAlt: "Detail of mahogany grain and natural finish",
};

export const productionSection = {
  title: "From Log Selection to Final Inspection",
  paragraphs: [
    "Every board follows a carefully controlled production process.",
    "Logs are selected according to quality and intended application before entering our sawmill.",
    "Throughout production, lumber is monitored for dimensional accuracy, moisture content, visual grading, and overall quality before being prepared for international shipment.",
    "Our objective is simple: deliver timber that performs exactly as our customers expect.",
  ],
  image: "/images/products/board-inspection.jpg",
  imageAlt: "Mahogany board during quality inspection",
};

export const marketsSection = {
  title: "Tailored for International Markets",
  paragraphs: [
    "Every shipment is prepared according to the technical and logistical requirements of each destination.",
    "We adapt packaging, dimensions, documentation, moisture specifications, and loading configurations to meet the standards of international importers and manufacturers.",
    "Whether supplying wholesalers, industrial processors, architects, or OEM manufacturers, our objective remains the same: provide premium African Mahogany with complete reliability from production to delivery.",
  ],
};

export const whyChooseList = [
  "FSC-certified plantations",
  "FSC-certified sawmill",
  "Complete vertical integration",
  "Full product traceability",
  "Custom manufacturing",
  "Flexible dimensions",
  "Consistent quality",
  "Export expertise",
  "Reliable production capacity",
  "Long-term supply partnerships",
];

export const applicationsGallery = [
  { image: "/images/products/gallery-theater.jpg", alt: "Illustrative example — mahogany home theater panelling" },
  { image: "/images/products/gallery-pool.jpg", alt: "Illustrative example — mahogany pool deck" },
  { image: "/images/products/gallery-jet.jpg", alt: "Illustrative example — mahogany private aviation interior" },
  { image: "/images/products/gallery-bar.jpg", alt: "Illustrative example — mahogany bar cabinetry" },
];

export const productsClosing = {
  title: "Let's Build Your Next Project Together",
  paragraphs: [
    "Every project begins with a conversation.",
    "Whether you are sourcing premium lumber for architecture, furniture manufacturing, interior design, industrial production, or international distribution, our team works alongside you to understand your technical requirements and deliver solutions tailored to your business.",
    "Because exceptional projects deserve exceptional materials. And exceptional materials begin with responsible forestry, precision manufacturing, and trusted partnerships.",
  ],
  cta: "Request a Quote",
  image: "/images/products/closing-yacht-sunset.jpg",
  imageAlt: "Illustrative example — premium wood deck at sunset",
};
