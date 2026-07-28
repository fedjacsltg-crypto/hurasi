import type { BlogArticle, BlogAuthor } from "@/types/blog";

export const blogIntro = {
  eyebrow: "Knowledge Center",
  title: "Insights on Premium African Mahogany",
  subtitle:
    "Technical expertise, market intelligence, and sustainable forestry from the world of premium African Mahogany.",
  heroImage: "/images/forests/plantation-aerial.jpg",
};

export const authors: BlogAuthor[] = [
  {
    id: "hurasi-desk",
    name: "HURASI Export & Technical Desk",
    photo: null,
    position: "Editorial Team",
    bio: "Our export and technical specialists draw on decades of combined experience in forestry management, sawmill operations, and international timber trade to bring you practical, field-tested insight into premium African Mahogany.",
    expertise: ["African Mahogany", "Export Logistics", "Timber Grading", "Sustainable Forestry"],
  },
];

export const articles: BlogArticle[] = [
  {
    slug: "complete-guide-african-mahogany-species-grading-trade",
    category: "mahogany",
    tags: ["African Mahogany", "Khaya", "Hardwood", "Grading", "Export", "Kiln Drying"],
    title: "The Complete Guide to African Mahogany: Species, Grading, and Global Trade",
    subtitle:
      "What buyers, architects, and manufacturers need to understand before specifying African Mahogany for a project.",
    authorId: "hurasi-desk",
    publishedDate: "2026-06-15",
    heroImage: "/images/blog/board-inspection-detail.jpg",
    heroImageAlt: "Close-up of a hand inspecting the natural grain of a freshly sawn mahogany board",
    excerpt:
      "From botanical origin to export documentation, a practical overview of what makes African Mahogany one of the world's most respected hardwoods — and how to specify it with confidence.",
    difficulty: "intermediate",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Few hardwoods carry as much design pedigree as mahogany. But the species most commonly traded under that name today is not the Central American mahogany that built colonial-era furniture — it is African Mahogany, genus Khaya, a botanically distinct but closely related timber that has become the modern standard for premium architectural and furniture applications worldwide. This guide walks through what the species actually is, how it is graded, and what buyers need to know to specify it correctly for an international project.",
      },
      {
        type: "heading",
        id: "what-makes-it-premium",
        text: "What Makes African Mahogany a Premium Hardwood",
      },
      {
        type: "paragraph",
        text: "African Mahogany (Khaya ivorensis, among related species) is native to the tropical forests of West and Central Africa. Its reputation rests on a combination of qualities rarely found together in a single timber: a warm reddish-brown color that deepens attractively with age, a fine and often interlocked grain with a distinctive ribbon figure, medium density that balances workability with durability, and excellent performance in machining, gluing, and finishing. These characteristics explain why it has become the preferred substitute for genuine mahogany (Swietenia macrophylla), which is now heavily restricted under CITES and rarely available at commercial scale.",
      },
      {
        type: "paragraph",
        text: "Unlike genuine mahogany, African Mahogany is now predominantly supplied through plantation forestry rather than natural-forest extraction. This shift matters commercially as much as environmentally: plantation cultivation gives buyers a level of supply predictability and traceability that natural-forest sourcing simply cannot match at scale.",
      },
      {
        type: "heading",
        id: "grading-system",
        text: "Grading: How Quality Is Classified",
      },
      {
        type: "paragraph",
        text: "Grading is where many buyers new to the timber trade encounter their first real complexity. Hardwood lumber is classified against internationally recognized grading criteria that weigh several factors simultaneously rather than a single 'quality score.'",
      },
      {
        type: "list",
        items: [
          "Appearance — the visual character of the face and back of the board, including color consistency and figure.",
          "Defect frequency — the presence and size of knots, checks (surface cracks), and wane (bark edge remaining on a board).",
          "Dimensional consistency — how closely each piece conforms to the specified thickness, width, and length.",
          "Moisture content — whether the material meets the tolerance required for its intended application.",
        ],
      },
      {
        type: "paragraph",
        text: "A well-run sawmill inspects logs and finished boards against these criteria at multiple stages — not only at final packaging, but during log selection and after kiln drying. For buyers, the practical takeaway is simple: always specify the grade appropriate to your application, rather than assuming 'premium hardwood' is a single fixed standard. A flooring or fine furniture project typically demands a tighter grade than rough structural lumber.",
      },
      {
        type: "heading",
        id: "moisture-kiln-drying",
        text: "Moisture Content and Kiln Drying",
      },
      {
        type: "paragraph",
        text: "Moisture content is arguably the single most important technical variable in a successful timber specification, and it is where inexperienced buyers most often run into trouble later in a project. Green (undried) or improperly dried lumber will continue to move — shrinking, warping, or checking — long after installation, undermining even the best design intent.",
      },
      {
        type: "paragraph",
        text: "Kiln drying reduces moisture content under controlled temperature and humidity conditions to a stable target appropriate for the end use — typically a lower and more tightly controlled range for flooring and fine furniture than for general construction lumber. It is a process that cannot be meaningfully accelerated without risking internal stress, checking, or case hardening in the wood. Air-dried material remains a legitimate option for certain structural or rough-construction uses where a slightly higher, less strictly controlled moisture content is acceptable — but for flooring, joinery, and furniture, kiln-dried material is almost always the right specification.",
      },
      {
        type: "heading",
        id: "plantation-to-port",
        text: "From Plantation to Port: The Export Journey",
      },
      {
        type: "paragraph",
        text: "Understanding the production chain helps buyers ask better questions of any supplier — and spot the difference between a genuinely integrated operation and a trader reselling material of unknown origin.",
      },
      {
        type: "list",
        items: [
          "Plantation management — controlled growing conditions under a documented forestry plan, ideally FSC-certified.",
          "Harvesting and log transport — selective harvesting of mature trees, with logs identified and tracked from this point forward.",
          "Sawmilling — conversion of logs into rough lumber according to planned cutting patterns that maximize both yield and grade.",
          "Kiln drying — controlled reduction of moisture content to the target range for the intended application.",
          "Grading and machining — sorting by quality standard, followed by any planing, profiling, or joinery work specified.",
          "Packaging and export documentation — preparation for international shipment, including the commercial, customs, and phytosanitary paperwork required by the destination market.",
        ],
      },
      {
        type: "paragraph",
        text: "A vertically integrated supplier — one that manages its own plantations and sawmill rather than purchasing lumber from third parties — can typically offer a level of chain-of-custody documentation and consistency that a pure trading operation cannot match, since every stage above sits under a single accountable operation rather than being assembled from multiple, less traceable sources.",
      },
      {
        type: "heading",
        id: "choosing-specification",
        text: "Choosing the Right Specification for Your Project",
      },
      {
        type: "paragraph",
        text: "In practice, most specification questions come down to matching three variables to your application: grade, moisture content, and dimensional tolerance. A furniture manufacturer producing fine joinery will typically want a higher grade, tighter moisture control, and closer dimensional tolerance than a contractor sourcing decking boards for a large outdoor terrace — where natural character and cost efficiency may matter more than absolute uniformity.",
      },
      {
        type: "quote",
        text: "The right specification is not the most expensive one — it is the one that matches the real performance requirements of the application, no more and no less.",
      },
      {
        type: "paragraph",
        text: "For architects and buyers working on an international project, the most efficient approach is usually to share the application, target dimensions, and any relevant regulatory requirements directly with a technical export team early in the process — well before a full set of drawings is finalized. This allows grading, drying, and packaging decisions to be aligned with the project from the outset, rather than retrofitted later at greater cost and risk.",
      },
    ],
  },
  {
    slug: "plantation-grown-timber-future-responsible-luxury-interiors",
    category: "sustainability",
    tags: ["Sustainability", "FSC", "Timber Market", "Architecture", "Luxury Interiors"],
    title: "Why Plantation-Grown Timber Is the Future of Responsible Luxury Interiors",
    subtitle:
      "How controlled forestry is reshaping the way architects and designers source premium hardwood for high-end projects.",
    authorId: "hurasi-desk",
    publishedDate: "2026-06-29",
    heroImage: "/images/blog/plantation-forest-walk.jpg",
    heroImageAlt: "A HURASI team member standing among mature mahogany trees on the plantation",
    excerpt:
      "Luxury design and responsible sourcing are no longer competing priorities. Here is why plantation-grown African Mahogany is becoming the standard specification for architects who care about both.",
    difficulty: "beginner",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "For much of the twentieth century, luxury and sustainability in timber sourcing were treated as separate — sometimes even opposing — considerations. That assumption no longer holds. As international regulation, client expectations, and market transparency have all matured, plantation-grown hardwood has moved from a niche alternative to the default specification for architects and designers working on premium interiors.",
      },
      {
        type: "heading",
        id: "why-plantation-forestry",
        text: "Why Plantation Forestry, Not Natural-Forest Sourcing",
      },
      {
        type: "paragraph",
        text: "Plantation forestry exists to meet real, growing demand for species like African Mahogany while reducing pressure on natural forest ecosystems. Because the resource is cultivated under controlled conditions — from seed selection through nursery cultivation, planting, and managed growth cycles — every log carries a documented origin and growth history. That level of traceability is structurally impossible to achieve at scale when sourcing from natural forest stands, however well-intentioned the harvesting practice.",
      },
      {
        type: "paragraph",
        text: "For architects specifying material on behalf of clients who increasingly ask pointed questions about origin, this distinction has become a practical selling point rather than a marketing footnote.",
      },
      {
        type: "heading",
        id: "what-fsc-certification-verifies",
        text: "What FSC Certification Actually Verifies",
      },
      {
        type: "paragraph",
        text: "Forest Stewardship Council (FSC) certification is the most widely recognized independent standard for responsible forest management, and it is worth understanding precisely what it covers — because the value of the certification lies in its independence, not in the claim alone.",
      },
      {
        type: "list",
        items: [
          "Responsible forest management practices, independently audited against documented criteria.",
          "A verified chain of custody from forest to finished product, rather than a self-declared origin claim.",
          "Environmental criteria covering biodiversity protection, water and soil conservation, and forest regeneration.",
          "Social and economic criteria relevant to the communities and workforce connected to the forestry operation.",
        ],
      },
      {
        type: "paragraph",
        text: "For a project specification, this means an FSC-certified plantation and an FSC-certified sawmill together provide externally verified assurance across the full production chain — not just at the point of harvest.",
      },
      {
        type: "heading",
        id: "carbon-and-material-honesty",
        text: "Carbon Storage: A Material Characteristic, Not a Marketing Claim",
      },
      {
        type: "paragraph",
        text: "As trees grow, they capture atmospheric CO₂ through photosynthesis and store carbon within the wood fibre itself. That carbon remains locked in the material after harvest, for a duration that depends on the lifespan of the product it becomes — furniture, architectural millwork, and structural joinery extend that storage period well beyond the growth cycle alone.",
      },
      {
        type: "quote",
        text: "This is best understood as a scientific characteristic of wood as a material, not an offset claim. Plantation forestry is one part of a broader sustainability picture — not a complete solution on its own.",
      },
      {
        type: "paragraph",
        text: "Presenting this honestly matters for architects making sustainability claims on behalf of a project. Overstating a single characteristic risks undermining credibility on the broader, genuinely strong case for plantation-grown hardwood.",
      },
      {
        type: "heading",
        id: "what-this-means-for-specifiers",
        text: "What This Means for Architects and Interior Designers",
      },
      {
        type: "paragraph",
        text: "In practical terms, specifying plantation-grown, FSC-certified African Mahogany allows a project to combine three things that used to be harder to reconcile: the warmth, grain character, and workability that make mahogany a perennial favorite in luxury interiors; documented, verifiable sourcing that stands up to client and regulatory scrutiny; and long-term supply reliability, since plantation cycles are planned years in advance rather than dependent on the unpredictable availability of natural-forest stock.",
      },
      {
        type: "paragraph",
        text: "For a specification team evaluating suppliers, the most useful question is rarely 'is this sustainable?' in the abstract — it is whether the supplier can demonstrate direct control over plantation management and sawmilling, provide FSC chain-of-custody documentation for the specific order, and speak concretely about drying, grading, and export practice rather than in general sustainability language alone.",
      },
    ],
  },
];
