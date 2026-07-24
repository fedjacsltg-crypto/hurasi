import type { LifeCyclePhase, SimpleSection } from "../en/sustainability-page";

export const sustainabilityIntro = {
  eyebrow: "Durabilité",
  title: "Cultiver les Forêts de Demain",
  subtitle:
    "Des plantations d'Acajou Africain gérées durablement, alliant responsabilité environnementale, sylviculture scientifique et production de bois premium.",
  heroImage: "/images/sustainability/sustainable-forestry.jpg",
};

export const philosophySection: SimpleSection = {
  id: "philosophy",
  title: "Notre Philosophie",
  paragraphs: [
    "Chez HURASI, la durabilité n'est pas une initiative séparée — elle est intégrée à chaque décision forestière et industrielle que nous prenons.",
    "Une vision de long terme guide la planification de chaque cycle de plantation, des décennies avant qu'une seule planche n'atteigne un client. Une gestion responsable signifie mesurer les résultats non seulement en volume, mais aussi en santé forestière, en qualité des sols et en qualité de l'eau dans la durée.",
    "Nous considérons l'intendance forestière, l'efficacité des ressources et le respect de la biodiversité comme des exigences opérationnelles, pas comme des thèmes marketing — et nous nous imposons une amélioration continue à mesure que la science forestière et les outils de suivi progressent.",
  ],
};

export const whyPlantationSection: SimpleSection = {
  id: "why-plantation",
  title: "Pourquoi l'Acajou Africain de Plantation ?",
  paragraphs: [
    "L'Acajou Africain issu de plantation existe pour réduire la pression sur les forêts naturelles tout en répondant à une demande réelle et croissante pour cette essence.",
    "Parce que la ressource est cultivée dans des conditions contrôlées, chaque grume a une origine connue, un historique de croissance documenté et une chaîne de traçabilité vérifiable — des avantages que l'approvisionnement en forêt naturelle ne peut offrir à cette échelle.",
  ],
  bullets: [
    "Réduction de la pression sur les forêts naturelles",
    "Production planifiée et contrôlée",
    "Origine et historique de croissance connus",
    "Traçabilité complète, du jeune plant à l'expédition",
    "Qualité de bois supérieure et constante",
    "Approvisionnement fiable et prévisible sur le long terme",
    "Gestion forestière scientifique à chaque étape",
  ],
};

export const lifeCyclePhases: LifeCyclePhase[] = [
  {
    id: "seed-nursery",
    title: "Sélection des Graines & Pépinière",
    stages: ["Sélection des graines", "Pépinière", "Jeunes plants"],
    image: "/images/sustainability/seed-to-forest.jpg",
    imageAlt: "Jeune plant d'acajou africain en conditions de pépinière",
  },
  {
    id: "establishment-monitoring",
    title: "Installation & Suivi de Croissance",
    stages: [
      "Plantation en champ",
      "Suivi de croissance",
      "Gestion des sols",
      "Gestion de l'eau",
    ],
    image: "/images/sustainability/scientific-management.jpg",
    imageAlt: "Équipe forestière assurant le suivi de croissance dans la plantation",
  },
  {
    id: "silviculture",
    title: "Sylviculture & Suivi Sanitaire",
    stages: [
      "Élagage",
      "Taille de formation",
      "Éclaircies",
      "Suivi sanitaire",
      "Inventaire forestier",
    ],
    image: "/images/sustainability/technology-innovation.jpg",
    imageAlt: "Surveillance par drone au-dessus de la canopée d'acajou",
  },
  {
    id: "harvest-transport",
    title: "Récolte Responsable & Transport",
    stages: ["Récolte responsable", "Transport des grumes"],
    image: "/images/sustainability/responsible-harvesting.jpg",
    imageAlt: "Récolte sélective de grumes d'acajou matures",
  },
  {
    id: "processing-export",
    title: "Transformation & Export Mondial",
    stages: [
      "Scierie",
      "Séchage en étuve",
      "Fabrication",
      "Contrôle qualité",
      "Conditionnement",
      "Export mondial",
    ],
    image: "/images/sustainability/efficient-production.jpg",
    imageAlt: "Transformation du bois d'acajou en scierie",
  },
];

export const scientificSection: SimpleSection = {
  id: "scientific-forestry",
  title: "Gestion Forestière Scientifique",
  paragraphs: [
    "Chaque décision de plantation commence par la donnée. La sélection du site prend en compte l'adaptation climatique, l'analyse des sols et le drainage — des facteurs qui déterminent la performance de croissance des décennies à l'avance.",
    "La qualité génétique, l'espacement des arbres et le développement racinaire sont gérés pour optimiser le taux de croissance sans compromettre la forme du tronc ni la densité du bois. Le suivi des diamètres et l'inventaire forestier sont réalisés à intervalles réguliers pour comparer la performance du peuplement aux courbes de croissance attendues.",
    "La cartographie SIG et la surveillance par drone permettent une collecte de données forestières précise, parcelle par parcelle, alimentant un système de traçabilité numérique qui relie chaque grume à sa parcelle de plantation d'origine.",
  ],
  image: "/images/sustainability/technology-innovation.jpg",
  imageAlt: "Technologie de cartographie SIG et de surveillance par drone utilisée sur les plantations HURASI",
};

export const silvicultureSection: SimpleSection = {
  id: "silviculture-practice",
  title: "Sylviculture Responsable",
  paragraphs: [
    "L'élagage sélectif et la gestion de la canopée favorisent une croissance droite du tronc et réduisent la formation de nœuds, améliorant à la fois la qualité structurelle et l'aspect du bois fini.",
    "La prévention des maladies repose sur une lutte intégrée contre les ravageurs plutôt que sur un traitement chimique généralisé, préservant l'équilibre biologique naturel de la plantation.",
    "Des pratiques de conservation de l'eau et des sols sont appliquées tout au long du cycle de croissance pour protéger la productivité du site à long terme — la capacité de la plantation à soutenir de futures rotations est traitée comme une contrainte de premier plan, pas comme une réflexion secondaire.",
  ],
  bullets: [
    "Élagage sélectif et de formation",
    "Gestion de la canopée",
    "Lutte intégrée contre les ravageurs",
    "Conservation de l'eau",
    "Conservation des sols",
    "Optimisation de la croissance pour la qualité du tronc",
  ],
};

export const biodiversitySection: SimpleSection = {
  id: "biodiversity",
  title: "Biodiversité",
  paragraphs: [
    "La foresterie de plantation et la conservation de la biodiversité ne sont pas incompatibles lorsque la gestion est planifiée à l'échelle du paysage.",
    "Des corridors de végétation native sont maintenus entre les parcelles de plantation, favorisant les déplacements de la faune sur l'ensemble de la propriété. Des zones tampons riveraines le long des cours d'eau protègent la qualité de l'eau et préservent l'habitat des espèces dépendantes des écosystèmes riverains.",
    "Une planification à l'échelle du paysage identifie et protège les zones de végétation native, équilibrant surface de plantation productive et conservation des habitats.",
  ],
  image: "/images/sustainability/biodiversity-protection.jpg",
  imageAlt: "Cours d'eau et zone tampon de végétation native au sein du paysage de plantation",
};

export const carbonSection: SimpleSection = {
  id: "carbon",
  title: "Carbone",
  paragraphs: [
    "En grandissant, les arbres d'Acajou Africain captent le CO₂ atmosphérique par photosynthèse et stockent ce carbone dans la fibre du bois.",
    "Ce carbone reste stocké dans le bois après la récolte — la durée pendant laquelle il reste hors de l'atmosphère dépend de la durée de vie du produit qu'il devient. Les applications à longue durée de vie comme le mobilier, la menuiserie ou les boiseries architecturales prolongent cette période de stockage bien au-delà du cycle de croissance lui-même.",
    "Nous présentons ceci comme une caractéristique scientifique du bois en tant que matériau, non comme une allégation de compensation carbone — la foresterie de plantation n'est qu'une partie d'une image plus large de la durabilité, pas une solution complète à elle seule.",
  ],
  image: "/images/sustainability/carbon-storage.jpg",
  imageAlt: "Vue vers le haut à travers la canopée mature d'acajou",
};

export const fscSection: SimpleSection = {
  id: "fsc-certification",
  title: "Certification FSC",
  paragraphs: [
    "Nos opérations forestières comme notre scierie sont certifiées de manière indépendante selon le système du Forest Stewardship Council (FSC) — une norme reconnue mondialement pour la gestion forestière responsable.",
    "La certification FSC exige une conformité documentée sur des critères environnementaux, sociaux et économiques : des pratiques de gestion forestière responsable, une chaîne de traçabilité vérifiée de la forêt jusqu'au produit fini, et un audit indépendant par des tiers.",
    "Pour nos clients, cette certification apporte une assurance vérifiée de l'extérieur — pas une simple déclaration — que le bois qu'ils achètent provient d'une source gérée de manière responsable.",
  ],
  bullets: [
    "Gestion forestière responsable",
    "Chaîne de traçabilité vérifiée",
    "Certification indépendante par des tiers",
    "Exigences environnementales définies",
    "Critères de responsabilité sociale",
    "Normes de durabilité économique",
  ],
  image: "/images/sustainability/certified-quality.jpg",
  imageAlt: "Tampon de certification FSC sur des planches d'acajou conditionnées",
};

export const manufacturingSection: SimpleSection = {
  id: "responsible-manufacturing",
  title: "Fabrication Responsable",
  paragraphs: [
    "La durabilité se poursuit au-delà de la sortie de forêt. Nos opérations de sciage sont conçues pour maximiser le rendement matière de chaque grume, réduisant les pertes dès la transformation.",
    "Le séchage en étuve est optimisé pour l'efficacité énergétique, et les sous-produits de scierie — chutes, sciure, écorce — sont réutilisés comme combustible biomasse plutôt que jetés. Les systèmes de dépoussiérage et de gestion de l'eau soutiennent un environnement de production plus propre et mieux maîtrisé.",
    "Un contrôle qualité est appliqué à chaque étape de la transformation, soutenant une culture d'amélioration continue à travers l'ensemble de l'activité industrielle.",
  ],
};

export const globalResponsibilitySection: SimpleSection = {
  id: "global-responsibility",
  title: "Responsabilité Globale",
  paragraphs: [
    "Notre engagement s'étend au-delà de nos propres opérations, jusqu'aux partenariats que nous construisons avec des clients dans le monde entier.",
    "Cela signifie un approvisionnement fiable de long terme, des pratiques d'approvisionnement responsables et une qualité premium constante — soutenus par une conformité complète aux réglementations commerciales et environnementales internationales.",
    "Nous visons la transparence dans chaque relation client : une documentation claire, une communication honnête sur les délais et les capacités, et une vision de long terme de ce que signifie être un partenaire du bois de confiance.",
  ],
};

export const sustainabilityClosing = {
  title: "Construire l'Avenir avec un Bois Responsable",
  ctaPrimary: "Demander un devis",
  ctaSecondary: "Découvrir nos produits",
  image: "/images/sustainability/delivering-worldwide.jpg",
  imageAlt: "Porte-conteneurs transportant des marchandises au coucher du soleil",
};
