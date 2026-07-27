import type { FaqItem } from "@/types/faq";

export const faqPageIntro = {
  eyebrow: "Knowledge Center",
  title: "Frequently Asked Questions",
  subtitle:
    "Everything you need to know about sourcing premium African Mahogany from HURASI.",
  heroImage: "/images/forests/plantation-aerial.jpg",
};

export const faqItems: FaqItem[] = [
  // --- About African Mahogany ---
  {
    id: "what-is-african-mahogany",
    category: "mahogany",
    question: "What is African Mahogany?",
    answer:
      "African Mahogany refers to species in the genus Khaya, native to the tropical forests of West and Central Africa. It is prized for its reddish-brown color, fine interlocked grain, and excellent working properties, and is widely used in furniture, joinery, flooring, boatbuilding, and architectural applications worldwide.",
  },
  {
    id: "botanical-species-supplied",
    category: "mahogany",
    question: "What botanical species do you supply?",
    answer:
      "HURASI's plantations and sawmill are dedicated to Khaya ivorensis, one of the most commercially valued African Mahogany species. It is cultivated under controlled, FSC-certified plantation forestry rather than harvested from natural stands, giving every log a documented origin and growth history.",
  },
  {
    id: "comparison-genuine-mahogany",
    category: "mahogany",
    question: "How does African Mahogany compare to Genuine Mahogany (Swietenia)?",
    answer:
      "Genuine Mahogany (Swietenia macrophylla) is now heavily restricted under CITES and rarely available at commercial scale. African Mahogany (Khaya) is a related but botanically distinct genus with very similar working properties, color, and grain character, and is widely accepted throughout the trade as the modern, sustainably available alternative.",
  },
  {
    id: "main-characteristics",
    category: "mahogany",
    question: "What are its main characteristics?",
    answer:
      "African Mahogany combines a warm reddish-brown tone, a straight to interlocked grain with an attractive ribbon figure, medium density, good dimensional stability once dried, and excellent machining, gluing, and finishing performance — qualities that make it a preferred material for demanding architectural and furniture projects.",
  },
  {
    id: "color-change-over-time",
    category: "mahogany",
    question: "What color changes occur over time?",
    answer:
      "Freshly sawn African Mahogany is typically pale pink to light reddish-brown. On exposure to light and air it darkens progressively to a richer reddish-brown patina over several months, a natural process common to most hardwoods and often considered part of the material's aesthetic appeal.",
  },
  {
    id: "exterior-suitability",
    category: "mahogany",
    question: "Is African Mahogany suitable for exterior applications?",
    answer:
      "Yes. African Mahogany offers good natural durability and is regularly used for decking, cladding, doors, and joinery in exterior settings, provided it receives an appropriate protective finish and routine maintenance. For ground-contact or continuously wet applications, we recommend discussing finish specifications with our technical team.",
  },

  // --- Products & Specifications ---
  {
    id: "available-products",
    category: "products",
    question: "What products does HURASI currently offer?",
    answer:
      "Our current range covers sawn lumber in 27mm and 52mm thicknesses and solid mahogany parquet flooring in wide-plank, chevron, and herringbone patterns. All products are manufactured to order rather than pulled from a fixed catalogue, so exact specifications are agreed with each customer.",
  },
  {
    id: "thickness-width-length-options",
    category: "products",
    question: "What thicknesses, widths, and lengths are available?",
    answer:
      "Standard sawn lumber is produced in 27mm and 52mm thicknesses, but our sawmill can manufacture custom thicknesses, widths, and lengths according to your project drawings. Provide your target dimensions in the quote request and our team will confirm feasibility and yield.",
  },
  {
    id: "moisture-content-options",
    category: "products",
    question: "What moisture content options do you offer — air dried or kiln dried?",
    answer:
      "We supply both air-dried and kiln-dried lumber, as well as green (undried) material on request. Kiln drying is recommended for most furniture, joinery, and flooring applications where a low, stable moisture content is required; air-dried material suits certain structural or rough-construction uses.",
  },
  {
    id: "surface-finish-options",
    category: "products",
    question: "What surface finishes and profiles can you produce?",
    answer:
      "Beyond rough-sawn lumber, we offer planing (S4S/S2S), chamfered edges, tongue-and-groove and deck profiles, and custom profiles machined to your specification or matched to an existing sample. Finger-jointing is available for select applications where continuous lengths are required.",
  },
  {
    id: "custom-production",
    category: "products",
    question: "Can you manufacture according to custom specifications?",
    answer:
      "Yes — custom production is the core of our business model. Rather than working from a fixed catalogue, we manufacture parquet and sawn lumber to the precise dimensions, grade, moisture content, and finish each customer requires, from single containers to long-term supply programs.",
  },
  {
    id: "flooring-wall-panel-options",
    category: "products",
    question: "Do you supply flooring and wall panelling?",
    answer:
      "Yes. Our solid mahogany parquet is available in wide-plank, chevron, and herringbone patterns for flooring applications, and the same lumber can be milled into wall panelling profiles for interior joinery, architectural cladding, and bespoke installations.",
  },

  // --- Quality Control ---
  {
    id: "grading-system",
    category: "quality",
    question: "How is African Mahogany graded?",
    answer:
      "Lumber is graded according to internationally recognized hardwood grading criteria covering appearance, defect frequency (knots, checks, wane), and dimensional consistency. Each order specifies the required grade, and our quality team inspects logs and finished boards against that standard before shipment.",
  },
  {
    id: "inspection-process",
    category: "quality",
    question: "What quality inspections take place before shipment?",
    answer:
      "Every batch passes through visual grading, dimensional verification, and moisture content testing before packaging. Our team documents tolerances for warping, checking, and color variation, and prepares a quality report that accompanies the shipment so customers can verify conformity on arrival.",
  },
  {
    id: "moisture-testing",
    category: "quality",
    question: "How is moisture content measured and controlled?",
    answer:
      "Moisture content is measured with calibrated electronic moisture meters at multiple points in the kiln drying cycle and again before packaging, to confirm the material falls within the tolerance agreed for its intended application — typically a narrower range for flooring and furniture than for structural lumber.",
  },
  {
    id: "tolerance-defects",
    category: "quality",
    question: "What tolerances apply to warping, checking, and knots?",
    answer:
      "Acceptable tolerances for warp, surface checking, and knot size and frequency are defined by the grade specified in your order. Our grading team rejects boards outside these limits during inspection, and customers requiring tighter tolerances than the standard grade can request a custom specification.",
  },
  {
    id: "traceability-batch-id",
    category: "quality",
    question: "Can you provide full traceability and batch identification?",
    answer:
      "Yes. Because we control our own FSC-certified plantations and sawmill, every batch can be traced back to its plantation block of origin. Shipments are identified with batch numbers referenced in the accompanying documentation, supporting full chain-of-custody verification for your records.",
  },

  // --- Sustainability ---
  {
    id: "responsible-forestry-explained",
    category: "sustainability",
    question: "What does responsible forestry mean at HURASI?",
    answer:
      "Responsible forestry at HURASI means managing our plantations for long-term productivity rather than short-term extraction — controlled harvesting cycles, soil and water conservation, biodiversity corridors between plantation blocks, and continuous monitoring of forest health, all integrated into everyday operational decisions rather than treated as a separate initiative.",
  },
  {
    id: "plantation-vs-natural-forest",
    category: "sustainability",
    question: "Why plantation-grown mahogany rather than natural forest sourcing?",
    answer:
      "Plantation forestry reduces pressure on natural forests while meeting real demand for the species. Because the resource is cultivated under controlled conditions, every log has a known origin and documented growth history — a level of traceability and predictable long-term supply that natural-forest sourcing cannot offer at scale.",
  },
  {
    id: "chain-of-custody",
    category: "sustainability",
    question: "How does your chain of custody work?",
    answer:
      "Our integrated model gives us direct oversight from seedling to shipment: plantation management, harvesting, transport, sawmilling, and export logistics are all under our control. This vertical integration is what makes complete, verifiable chain-of-custody documentation possible for every order.",
  },
  {
    id: "carbon-storage-explained",
    category: "sustainability",
    question: "How does African Mahogany relate to carbon storage?",
    answer:
      "As the trees grow, they capture atmospheric CO₂ through photosynthesis and store carbon within the wood fibre. That carbon remains stored after harvest, for a period depending on the product's lifespan — long-life uses such as furniture and architectural millwork extend storage well beyond the growth cycle itself. We present this as a material characteristic, not an offset claim.",
  },
  {
    id: "forest-regeneration",
    category: "sustainability",
    question: "How do you support forest regeneration?",
    answer:
      "Each harvested plantation block is followed by replanting with carefully selected seedlings grown under controlled nursery conditions, maintaining the productive capacity of the land for future rotations. Landscape-level planning also protects native vegetation corridors and riparian buffers alongside productive plantation areas.",
  },

  // --- FSC Certification ---
  {
    id: "fsc-certification-meaning",
    category: "sustainability",
    question: "What does FSC certification guarantee?",
    answer:
      "FSC (Forest Stewardship Council) certification is an independently audited, globally recognized standard covering environmental, social, and economic criteria for responsible forest management. Both our plantations and our sawmill hold FSC certification, providing externally verified — not self-declared — assurance of the timber's responsible origin.",
  },
  {
    id: "pefc-vs-fsc",
    category: "sustainability",
    question: "Do you also offer PEFC-certified material?",
    answer:
      "Our current certification is FSC across both our forestry and industrial operations. If your project specifically requires PEFC-certified documentation, please raise this during the quotation process so our team can advise on the best available option for your requirements.",
  },
  {
    id: "legal-harvesting-compliance",
    category: "sustainability",
    question: "How do you ensure legal harvesting and international compliance?",
    answer:
      "All harvesting takes place within our own FSC-certified concessions under documented management plans, and our export documentation is prepared to meet the legal timber trade requirements of destination markets, including the EU Timber Regulation, the US Lacey Act, and equivalent frameworks elsewhere.",
  },

  // --- Export ---
  {
    id: "countries-served",
    category: "export",
    question: "Which countries do you export to?",
    answer:
      "HURASI exports internationally to importers, manufacturers, and construction professionals across multiple continents. Our export documentation and packaging are adapted to the specific regulatory and logistical requirements of each destination market — tell us your country of import when requesting a quote so we can confirm requirements upfront.",
  },
  {
    id: "incoterms-offered",
    category: "export",
    question: "Which Incoterms do you offer — EXW, FOB, CFR, CIF?",
    answer:
      "We can arrange shipments under EXW, FOB, CFR, and CIF terms, among others, depending on your logistics preferences and the destination port. Our quotation form lets you specify your preferred Incoterm so pricing reflects the correct scope of responsibility and cost.",
  },
  {
    id: "container-loading-options",
    category: "export",
    question: "How do you optimize container loading — 20ft, 40ft, 40ft HC, LCL?",
    answer:
      "Our quote form includes an automatic container calculator that estimates volume, weight, and the best-fit container — 20ft, 40ft, 40ft High Cube, or multiple containers for larger volumes — based on your specified dimensions and quantities. LCL (less-than-container-load) shipments can also be arranged for smaller orders.",
  },
  {
    id: "packaging-fumigation",
    category: "export",
    question: "How is the lumber packaged, and is fumigation included?",
    answer:
      "Lumber is packaged on export-ready pallets or bundles suited to international shipping and handling, with packaging specifications adaptable to your requirements. Fumigation and ISPM-15 compliant treatment of packaging materials are arranged in line with destination country phytosanitary requirements.",
  },
  {
    id: "export-documents-list",
    category: "export",
    question: "What export documents do you provide?",
    answer:
      "Standard documentation includes the Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and Phytosanitary Certificate, along with FSC chain-of-custody documentation where applicable. Additional certificates required by your customs authority can be arranged — let us know your destination's specific requirements.",
  },
  {
    id: "customs-clearance-support",
    category: "export",
    question: "Do you assist with customs clearance and insurance?",
    answer:
      "We prepare all export-side documentation to facilitate smooth customs clearance at destination and can advise on typical requirements for your market based on prior shipping experience. Cargo insurance can be arranged as part of CIF terms or organized independently by the buyer under other Incoterms.",
  },

  // --- Lead Times ---
  {
    id: "production-planning-timeline",
    category: "leadTimes",
    question: "How far in advance should I plan a production order?",
    answer:
      "Because most orders are manufactured to specification rather than shipped from stock, lead times depend on drying requirements, order volume, and current production scheduling. We recommend discussing your target delivery date early in the quotation process so we can confirm a realistic production and shipping timeline.",
  },
  {
    id: "drying-time-impact",
    category: "leadTimes",
    question: "How does kiln drying affect lead times?",
    answer:
      "Kiln drying is a carefully controlled process that cannot be rushed without compromising quality and stability, and it represents one of the main variables in overall lead time. Air-dried or green material can sometimes be supplied faster, but kiln-dried lumber is recommended for most furniture, joinery, and flooring uses.",
  },
  {
    id: "container-booking-shipping-schedule",
    category: "leadTimes",
    question: "How far ahead do you book containers and shipping schedules?",
    answer:
      "Container bookings are confirmed once production is scheduled and volumes are finalized, coordinated with vessel schedules serving your destination port. Seasonal fluctuations in shipping capacity can affect availability, so we recommend confirming your order in good time ahead of any hard project deadlines.",
  },
  {
    id: "urgent-orders",
    category: "leadTimes",
    question: "Can you accommodate urgent orders?",
    answer:
      "We do our best to accommodate urgent requirements where production capacity and material availability allow, though premium timber production has natural limits on how much it can be accelerated without compromising quality. Contact our export team directly with your deadline so we can advise honestly on what is achievable.",
  },
  {
    id: "project-planning-support",
    category: "leadTimes",
    question: "Can you help plan lead times for a larger construction project?",
    answer:
      "Yes. For architectural or construction projects with phased delivery requirements, our team can work with you to plan production and shipping schedules aligned to your project timeline, including staggered deliveries across multiple containers where useful.",
  },

  // --- Orders ---
  {
    id: "minimum-order-quantity",
    category: "orders",
    question: "Is there a Minimum Order Quantity?",
    answer:
      "We are set up to support both single-container orders and long-term supply programs; there is no rigid one-size-fits-all minimum. Share your intended volume in the quote request and our team will confirm whether it aligns efficiently with a full or partial container, or a bundled shipment.",
  },
  {
    id: "samples-availability",
    category: "orders",
    question: "Can I request samples before placing an order?",
    answer:
      "Yes, samples can be requested to evaluate species characteristics, finish, and machining quality before committing to a full order. Mention the specific product and finish you would like to see when reaching out through our contact form.",
  },
  {
    id: "trial-orders",
    category: "orders",
    question: "Do you accept smaller trial orders before a larger contract?",
    answer:
      "Yes, a trial order is a common and sensible way to evaluate our product and service before scaling to a long-term supply agreement. We are happy to discuss a trial volume that lets you validate quality and reliability with confidence.",
  },
  {
    id: "repeat-orders-framework",
    category: "orders",
    question: "Can we set up a framework agreement for repeat orders?",
    answer:
      "Yes. Many of our customers operate under standing arrangements covering agreed specifications, pricing structure, and delivery cadence for recurring monthly or quarterly volumes. This is discussed directly with our export team once an initial working relationship is established.",
  },
  {
    id: "order-modifications-cancellation",
    category: "orders",
    question: "What is your policy on order modifications or cancellations?",
    answer:
      "Because production is made to order, changes are easiest to accommodate before manufacturing begins; once kiln drying or machining is underway, modifications may affect lead time or cost. Contact our team as early as possible if your requirements change, and we will advise on the options available at that stage.",
  },

  // --- Pricing ---
  {
    id: "quotation-process",
    category: "pricing",
    question: "How does the quotation process work?",
    answer:
      "Submit your specifications through our quote form — product type, dimensions, grade, moisture content, finish, and destination — and our export team reviews the request and prepares a detailed quotation reflecting your exact requirements, typically including a PDF summary for your records.",
  },
  {
    id: "pricing-factors",
    category: "pricing",
    question: "What factors influence pricing?",
    answer:
      "Pricing reflects species and grade, dimensions and level of processing (rough-sawn vs. finished profiles), moisture content, order volume, packaging requirements, destination and Incoterm, and prevailing exchange rates. Larger and recurring volumes generally allow for more efficient container optimization and pricing.",
  },
  {
    id: "exchange-rate-impact",
    category: "pricing",
    question: "How do exchange rates affect my quote?",
    answer:
      "As an international exporter, our pricing can be affected by currency fluctuations between quotation and order confirmation. We aim for transparency on this point and will clarify the currency and any exchange-rate terms applicable to your specific quotation.",
  },
  {
    id: "volume-discounts-contracts",
    category: "pricing",
    question: "Do you offer volume discounts or special contract pricing?",
    answer:
      "Yes, larger volumes and long-term framework agreements are generally priced more favorably than one-off small orders, reflecting production planning efficiency. Discuss your anticipated annual or project volume with our export team to explore the most suitable pricing structure.",
  },

  // --- Payment ---
  {
    id: "payment-methods-accepted",
    category: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We commonly work with international bank transfer (TT) and Letter of Credit, structured according to standard international trade practice. Specific terms are confirmed during the quotation process based on order size, destination, and the nature of the business relationship.",
  },
  {
    id: "deposit-balance-structure",
    category: "payment",
    question: "How does the deposit and balance payment structure work?",
    answer:
      "A typical arrangement involves a deposit at order confirmation to begin production, with the balance due prior to or upon shipment, though exact terms are agreed case by case. This structure is confirmed in writing as part of your order agreement.",
  },
  {
    id: "letter-of-credit-process",
    category: "payment",
    question: "Can we pay via Letter of Credit?",
    answer:
      "Yes, Letter of Credit is a recognized payment method for our international transactions, particularly for larger orders. Our team will coordinate with you and your bank on the required documentation to ensure a smooth process for both parties.",
  },
  {
    id: "commercial-conditions-general",
    category: "payment",
    question: "What general commercial conditions apply to international transactions?",
    answer:
      "Our commercial terms cover payment structure, delivery terms (Incoterm), documentation, and responsibilities at each stage of the transaction, all confirmed in writing before production begins. We are happy to clarify any point of the commercial agreement during the quotation stage.",
  },

  // --- Technical Information ---
  {
    id: "density-hardness-janka",
    category: "technical",
    question: "What is the density and Janka hardness of African Mahogany?",
    answer:
      "African Mahogany (Khaya ivorensis) has a medium density, generally in the range typical of respected furniture and joinery hardwoods, with a Janka hardness suitable for flooring, furniture, and architectural millwork. Exact figures can vary with growing conditions and moisture content — ask our technical team for detailed reference data for your application.",
  },
  {
    id: "shrinkage-dimensional-stability",
    category: "technical",
    question: "What is its shrinkage rate and dimensional stability?",
    answer:
      "Once properly kiln-dried to an appropriate moisture content, African Mahogany exhibits good dimensional stability with moderate shrinkage typical of quality furniture-grade hardwoods, making it well suited to flooring and fine joinery where movement must be minimized.",
  },
  {
    id: "machinability-fasteners-glue",
    category: "technical",
    question: "How does it perform in machining, fastening, and gluing?",
    answer:
      "African Mahogany machines cleanly with standard woodworking tools, holds screws and other fasteners well, and accepts common wood glues without difficulty, which is part of why it is favored for furniture-making, joinery, and architectural millwork requiring precise, durable joints.",
  },
  {
    id: "finishing-options-technical",
    category: "technical",
    question: "What finishing options work well — painting, staining, oiling, varnishing?",
    answer:
      "African Mahogany accepts staining, oiling, and varnishing very well, enhancing its natural grain and color, and can also be painted where a solid finish is preferred. The right finish depends on the application — our team can advise based on whether the piece is for interior, exterior, or marine use.",
  },
  {
    id: "fire-acoustic-thermal-performance",
    category: "technical",
    question: "What are its fire, acoustic, and thermal performance characteristics?",
    answer:
      "Like most hardwoods, African Mahogany's fire behavior, acoustic properties, and thermal performance depend on thickness, treatment, and installation context rather than the species alone. For projects with specific regulatory requirements in these areas, share your project specifications so we can advise or refer you to relevant testing standards.",
  },
  {
    id: "expected-service-life",
    category: "technical",
    question: "What service life can I expect from African Mahogany products?",
    answer:
      "With proper specification, finishing, and maintenance appropriate to the application, African Mahogany is known for a long service life in both interior and exterior use, which is part of its long-standing reputation in architecture, fine furniture, and marine joinery.",
  },

  // --- Care & Maintenance ---
  {
    id: "cleaning-recommendations",
    category: "care",
    question: "How should African Mahogany surfaces be cleaned?",
    answer:
      "Routine cleaning with a soft, slightly damp cloth is generally sufficient for finished mahogany surfaces; avoid harsh abrasives or excessive water, which can damage the finish over time. Follow any specific cleaning guidance provided for the particular finish applied to your product.",
  },
  {
    id: "outdoor-maintenance",
    category: "care",
    question: "What outdoor maintenance is recommended?",
    answer:
      "Exterior applications such as decking or cladding benefit from periodic reapplication of the protective finish, typically every one to two years depending on climate and exposure, along with routine removal of debris and inspection for wear. Our team can recommend a maintenance schedule suited to your local climate.",
  },
  {
    id: "uv-humidity-effects",
    category: "care",
    question: "How do UV exposure and humidity affect the wood?",
    answer:
      "Prolonged UV exposure will gradually change surface color over time, and this is normal for the material; a suitable UV-resistant finish slows this process. Humidity fluctuations can cause minor seasonal movement, which is why correct kiln drying and installation practice matter for long-term stability.",
  },
  {
    id: "storage-handling-recommendations",
    category: "care",
    question: "How should lumber be stored and handled before installation?",
    answer:
      "Store lumber in a dry, well-ventilated area, stacked with stickers between layers to allow airflow, and protected from direct ground contact and rain. Allow the material to acclimate to the installation environment's temperature and humidity for several days before final fitting.",
  },
  {
    id: "installation-recommendations",
    category: "care",
    question: "Do you provide installation recommendations?",
    answer:
      "Yes — while installation is typically carried out by your own contractors or installers, our technical team can share general recommendations regarding acclimation, fastening, expansion gaps, and finish sequencing to support a successful, long-lasting installation.",
  },

  // --- Business Relationship ---
  {
    id: "become-distributor",
    category: "business",
    question: "Can I become a HURASI distributor?",
    answer:
      "We welcome conversations with established importers and distributors interested in representing HURASI in their market. Reach out through our contact form with details of your company and target market, and our export team will follow up to discuss the opportunity.",
  },
  {
    id: "work-with-wholesalers",
    category: "business",
    question: "Do you work directly with wholesalers?",
    answer:
      "Yes, wholesalers are among our regular customer categories, and we can structure volumes, packaging, and delivery schedules to suit wholesale distribution requirements. Share your typical order profile so we can tailor a proposal.",
  },
  {
    id: "architect-sample-requests",
    category: "business",
    question: "Can architects and designers request samples for specification purposes?",
    answer:
      "Yes, we regularly support architects and interior designers with samples and technical documentation to assist in material specification for a project, including guidance on finish and grade appropriate to the intended application.",
  },
  {
    id: "developer-support",
    category: "business",
    question: "Do you support property developers on larger projects?",
    answer:
      "Yes, we work with developers on projects ranging from individual builds to larger developments, coordinating production planning and phased delivery to align with construction timelines. Early engagement in the design phase allows us to advise on specification and lead times.",
  },
  {
    id: "technical-assistance-provided",
    category: "business",
    question: "Do you provide technical assistance to customers?",
    answer:
      "Yes, our technical team is available to advise on species selection, grading, moisture content, finishing, and machining considerations appropriate to your application, helping ensure the material specified performs as expected once installed.",
  },
  {
    id: "recurring-monthly-volumes",
    category: "business",
    question: "Can you supply recurring monthly volumes for ongoing production needs?",
    answer:
      "Yes, supporting recurring monthly or quarterly volumes for manufacturers and industrial processors is a core part of our business model, supported by our integrated plantation and sawmill operations. Discuss your anticipated ongoing volume with our export team to establish a reliable long-term supply arrangement.",
  },
];
