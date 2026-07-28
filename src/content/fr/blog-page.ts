import type { BlogArticle, BlogAuthor } from "@/types/blog";

export const blogIntro = {
  eyebrow: "Centre de connaissances",
  title: "Regards sur l'acajou africain premium",
  subtitle:
    "Expertise technique, intelligence de marché et sylviculture durable, au cœur de l'acajou africain premium.",
  heroImage: "/images/forests/plantation-aerial.jpg",
};

export const authors: BlogAuthor[] = [
  {
    id: "hurasi-desk",
    name: "Le pôle export & technique HURASI",
    photo: null,
    position: "Équipe éditoriale",
    bio: "Nos spécialistes export et techniques s'appuient sur des décennies d'expérience combinée en gestion forestière, opérations de scierie et commerce international du bois, pour vous offrir un éclairage pratique et éprouvé sur le terrain concernant l'acajou africain premium.",
    expertise: ["Acajou africain", "Logistique export", "Classification du bois", "Sylviculture durable"],
  },
];

export const articles: BlogArticle[] = [
  {
    slug: "complete-guide-african-mahogany-species-grading-trade",
    category: "mahogany",
    tags: ["Acajou africain", "Khaya", "Bois dur", "Classification", "Export", "Séchage au four"],
    title: "Le guide complet de l'acajou africain : essence, classification et commerce mondial",
    subtitle:
      "Ce que les acheteurs, architectes et fabricants doivent comprendre avant de spécifier de l'acajou africain pour un projet.",
    authorId: "hurasi-desk",
    publishedDate: "2026-06-15",
    heroImage: "/images/blog/board-inspection-detail.jpg",
    heroImageAlt: "Gros plan sur une main inspectant le fil naturel d'une planche d'acajou fraîchement sciée",
    excerpt:
      "De l'origine botanique à la documentation export, un panorama pratique de ce qui fait de l'acajou africain l'un des bois durs les plus respectés au monde — et comment le spécifier avec assurance.",
    difficulty: "intermediate",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Peu de bois durs jouissent d'un tel prestige que l'acajou. Mais l'essence la plus couramment commercialisée aujourd'hui sous ce nom n'est pas l'acajou d'Amérique centrale qui a fait le mobilier de l'époque coloniale — c'est l'acajou africain, genre Khaya, un bois botaniquement distinct mais proche, devenu la référence moderne pour les applications architecturales et mobilières premium dans le monde entier. Ce guide explique ce qu'est réellement cette essence, comment elle est classée, et ce que les acheteurs doivent savoir pour la spécifier correctement dans un projet international.",
      },
      {
        type: "heading",
        id: "what-makes-it-premium",
        text: "Ce qui fait de l'acajou africain un bois dur premium",
      },
      {
        type: "paragraph",
        text: "L'acajou africain (Khaya ivorensis, parmi d'autres essences apparentées) est originaire des forêts tropicales d'Afrique de l'Ouest et centrale. Sa réputation repose sur une combinaison de qualités rarement réunies dans un seul bois : une couleur brun rougeâtre chaleureuse qui s'approfondit agréablement avec le temps, un fil fin et souvent entrelacé au ruban distinctif, une densité moyenne qui équilibre facilité de mise en œuvre et durabilité, et d'excellentes performances à l'usinage, au collage et à la finition. Ces caractéristiques expliquent pourquoi il est devenu le substitut privilégié à l'acajou véritable (Swietenia macrophylla), aujourd'hui fortement encadré par la CITES et rarement disponible à l'échelle commerciale.",
      },
      {
        type: "paragraph",
        text: "Contrairement à l'acajou véritable, l'acajou africain est aujourd'hui principalement fourni par sylviculture en plantation plutôt que par extraction en forêt naturelle. Cette évolution compte autant sur le plan commercial qu'environnemental : la culture en plantation offre aux acheteurs un niveau de prévisibilité d'approvisionnement et de traçabilité qu'un approvisionnement en forêt naturelle ne peut tout simplement pas égaler à grande échelle.",
      },
      {
        type: "heading",
        id: "grading-system",
        text: "Classification : comment la qualité est-elle évaluée",
      },
      {
        type: "paragraph",
        text: "La classification est souvent le premier vrai point de complexité que rencontrent les acheteurs novices dans le commerce du bois. Le bois dur est classé selon des critères de classification internationalement reconnus, qui pondèrent plusieurs facteurs simultanément plutôt qu'un simple « score de qualité ».",
      },
      {
        type: "list",
        items: [
          "Aspect — le caractère visuel de la face et du dos de la planche, y compris la constance de la couleur et le veinage.",
          "Fréquence des défauts — la présence et la taille des nœuds, des fentes (fissures de surface) et de la flache (bordure d'écorce restante sur une planche).",
          "Régularité dimensionnelle — la conformité de chaque pièce à l'épaisseur, la largeur et la longueur spécifiées.",
          "Taux d'humidité — le respect de la tolérance requise pour l'usage prévu.",
        ],
      },
      {
        type: "paragraph",
        text: "Une scierie bien gérée inspecte grumes et planches finies au regard de ces critères à plusieurs étapes — pas seulement à l'emballage final, mais aussi lors du choix des grumes et après le séchage au four. Pour les acheteurs, la conclusion pratique est simple : précisez toujours la qualité adaptée à votre application, plutôt que de supposer que « bois dur premium » désigne un standard unique et fixe. Un projet de parquet ou de mobilier fin exige généralement une qualité plus stricte qu'un bois de structure brut.",
      },
      {
        type: "heading",
        id: "moisture-kiln-drying",
        text: "Taux d'humidité et séchage au four",
      },
      {
        type: "paragraph",
        text: "Le taux d'humidité est sans doute la variable technique la plus importante d'une spécification de bois réussie, et c'est là que les acheteurs peu expérimentés rencontrent le plus souvent des problèmes plus tard dans un projet. Un bois vert (non séché) ou mal séché continuera de bouger — rétrécissement, gauchissement ou fentes — bien après la pose, compromettant même la meilleure intention de conception.",
      },
      {
        type: "paragraph",
        text: "Le séchage au four réduit le taux d'humidité sous conditions contrôlées de température et d'hygrométrie jusqu'à une cible stable adaptée à l'usage final — généralement une fourchette plus basse et plus étroitement contrôlée pour le parquet et le mobilier fin que pour le bois de construction général. C'est un processus qui ne peut être significativement accéléré sans risquer des contraintes internes, des fentes ou un durcissement de surface dans le bois. Le bois séché à l'air reste une option légitime pour certains usages structurels ou de construction brute où un taux d'humidité légèrement plus élevé et moins strictement contrôlé est acceptable — mais pour le parquet, la menuiserie et le mobilier, le bois séché au four est presque toujours la bonne spécification.",
      },
      {
        type: "heading",
        id: "plantation-to-port",
        text: "De la plantation au port : le parcours export",
      },
      {
        type: "paragraph",
        text: "Comprendre la chaîne de production aide les acheteurs à poser de meilleures questions à tout fournisseur — et à repérer la différence entre une opération véritablement intégrée et un négociant revendant du matériau d'origine incertaine.",
      },
      {
        type: "list",
        items: [
          "Gestion de la plantation — conditions de croissance contrôlées selon un plan sylvicole documenté, idéalement certifié FSC.",
          "Récolte et transport des grumes — récolte sélective d'arbres matures, avec identification et suivi des grumes dès ce stade.",
          "Sciage — transformation des grumes en bois brut selon des schémas de découpe planifiés maximisant à la fois le rendement et la qualité.",
          "Séchage au four — réduction contrôlée du taux d'humidité jusqu'à la fourchette cible pour l'usage prévu.",
          "Classification et usinage — tri selon la norme de qualité, suivi des opérations de rabotage, profilage ou menuiserie spécifiées.",
          "Emballage et documentation export — préparation à l'expédition internationale, y compris les documents commerciaux, douaniers et phytosanitaires exigés par le marché de destination.",
        ],
      },
      {
        type: "paragraph",
        text: "Un fournisseur intégré verticalement — qui gère ses propres plantations et sa propre scierie plutôt que d'acheter du bois à des tiers — peut généralement offrir un niveau de documentation de traçabilité et de constance qu'une simple opération de négoce ne peut égaler, puisque chaque étape ci-dessus relève d'une seule entité responsable plutôt que d'être assemblée à partir de multiples sources moins traçables.",
      },
      {
        type: "heading",
        id: "choosing-specification",
        text: "Choisir la bonne spécification pour votre projet",
      },
      {
        type: "paragraph",
        text: "En pratique, la plupart des questions de spécification reviennent à faire correspondre trois variables à votre application : la qualité, le taux d'humidité et la tolérance dimensionnelle. Un fabricant de mobilier produisant de la menuiserie fine voudra généralement une qualité plus élevée, un contrôle d'humidité plus strict et une tolérance dimensionnelle plus serrée qu'un entrepreneur s'approvisionnant en lames de terrasse pour une grande terrasse extérieure — où le caractère naturel et l'efficacité de coût peuvent compter davantage que l'uniformité absolue.",
      },
      {
        type: "quote",
        text: "La bonne spécification n'est pas la plus chère — c'est celle qui correspond aux exigences de performance réelles de l'application, ni plus, ni moins.",
      },
      {
        type: "paragraph",
        text: "Pour les architectes et acheteurs travaillant sur un projet international, l'approche la plus efficace consiste généralement à partager l'application, les dimensions cibles et toute exigence réglementaire pertinente directement avec une équipe export technique dès le début du processus — bien avant la finalisation complète des plans. Cela permet d'aligner dès le départ les décisions de classification, de séchage et d'emballage avec le projet, plutôt que de les adapter plus tard à un coût et un risque plus élevés.",
      },
    ],
  },
  {
    slug: "plantation-grown-timber-future-responsible-luxury-interiors",
    category: "sustainability",
    tags: ["Durabilité", "FSC", "Marché du bois", "Architecture", "Intérieurs de luxe"],
    title: "Pourquoi le bois de plantation est l'avenir des intérieurs de luxe responsables",
    subtitle:
      "Comment la sylviculture contrôlée transforme la façon dont architectes et designers s'approvisionnent en bois dur premium pour les projets haut de gamme.",
    authorId: "hurasi-desk",
    publishedDate: "2026-06-29",
    heroImage: "/images/blog/plantation-forest-walk.jpg",
    heroImageAlt: "Une collaboratrice HURASI parmi des acajous matures sur la plantation",
    excerpt:
      "Design de luxe et approvisionnement responsable ne sont plus des priorités concurrentes. Voici pourquoi l'acajou africain de plantation devient la spécification standard des architectes soucieux des deux.",
    difficulty: "beginner",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Pendant une grande partie du vingtième siècle, luxe et durabilité dans l'approvisionnement en bois étaient traités comme des considérations distinctes — parfois même opposées. Cette hypothèse ne tient plus. Alors que la réglementation internationale, les attentes des clients et la transparence du marché ont toutes mûri, le bois dur de plantation est passé d'une alternative de niche à la spécification par défaut pour les architectes et designers travaillant sur des intérieurs premium.",
      },
      {
        type: "heading",
        id: "why-plantation-forestry",
        text: "Pourquoi la sylviculture en plantation, et non l'approvisionnement en forêt naturelle",
      },
      {
        type: "paragraph",
        text: "La sylviculture en plantation existe pour répondre à une demande réelle et croissante d'essences comme l'acajou africain, tout en réduisant la pression sur les écosystèmes forestiers naturels. Le matériau étant cultivé dans des conditions contrôlées — de la sélection des graines à la culture en pépinière, en passant par la plantation et des cycles de croissance gérés — chaque grume porte une origine et un historique de croissance documentés. Ce niveau de traçabilité est structurellement impossible à atteindre à grande échelle lors d'un approvisionnement en forêt naturelle, aussi bien intentionnée que soit la pratique de récolte.",
      },
      {
        type: "paragraph",
        text: "Pour les architectes qui spécifient des matériaux pour le compte de clients posant de plus en plus de questions précises sur l'origine, cette distinction est devenue un argument commercial concret plutôt qu'une simple note marketing.",
      },
      {
        type: "heading",
        id: "what-fsc-certification-verifies",
        text: "Ce que la certification FSC vérifie réellement",
      },
      {
        type: "paragraph",
        text: "La certification du Forest Stewardship Council (FSC) est la norme indépendante la plus largement reconnue pour la gestion forestière responsable, et il vaut la peine de comprendre précisément ce qu'elle couvre — car la valeur de la certification réside dans son indépendance, pas dans la seule allégation.",
      },
      {
        type: "list",
        items: [
          "Des pratiques de gestion forestière responsable, auditées de manière indépendante selon des critères documentés.",
          "Une chaîne de traçabilité vérifiée, de la forêt au produit fini, plutôt qu'une simple allégation d'origine autodéclarée.",
          "Des critères environnementaux couvrant la protection de la biodiversité, la conservation de l'eau et des sols, et la régénération forestière.",
          "Des critères sociaux et économiques pertinents pour les communautés et la main-d'œuvre liées à l'exploitation forestière.",
        ],
      },
      {
        type: "paragraph",
        text: "Pour une spécification de projet, cela signifie qu'une plantation certifiée FSC et une scierie certifiée FSC offrent ensemble une garantie vérifiée de l'extérieur sur l'ensemble de la chaîne de production — pas seulement au moment de la récolte.",
      },
      {
        type: "heading",
        id: "carbon-and-material-honesty",
        text: "Stockage du carbone : une caractéristique du matériau, pas un argument marketing",
      },
      {
        type: "paragraph",
        text: "En grandissant, les arbres captent le CO₂ atmosphérique par photosynthèse et stockent le carbone dans la fibre même du bois. Ce carbone reste enfermé dans le matériau après la récolte, pour une durée qui dépend de la durée de vie du produit qu'il devient — mobilier, boiseries architecturales et menuiserie structurelle prolongent cette période de stockage bien au-delà du seul cycle de croissance.",
      },
      {
        type: "quote",
        text: "Il est préférable de comprendre ceci comme une caractéristique scientifique du bois en tant que matériau, non comme un argument de compensation. La sylviculture en plantation est un élément d'un tableau de durabilité plus large — pas une solution complète en soi.",
      },
      {
        type: "paragraph",
        text: "Présenter cela honnêtement compte pour les architectes formulant des allégations de durabilité au nom d'un projet. Surestimer une seule caractéristique risque de fragiliser la crédibilité du dossier plus large, et véritablement solide, en faveur du bois dur de plantation.",
      },
      {
        type: "heading",
        id: "what-this-means-for-specifiers",
        text: "Ce que cela signifie pour les architectes et designers d'intérieur",
      },
      {
        type: "paragraph",
        text: "En termes pratiques, spécifier de l'acajou africain de plantation certifié FSC permet à un projet de concilier trois éléments qu'il était auparavant plus difficile de réunir : la chaleur, le caractère du fil et la facilité de mise en œuvre qui font de l'acajou un favori intemporel des intérieurs de luxe ; un approvisionnement documenté et vérifiable résistant à l'examen des clients et des réglementations ; et une fiabilité d'approvisionnement à long terme, puisque les cycles de plantation sont planifiés des années à l'avance plutôt que dépendants de la disponibilité imprévisible des stocks de forêt naturelle.",
      },
      {
        type: "paragraph",
        text: "Pour une équipe de spécification évaluant des fournisseurs, la question la plus utile est rarement « est-ce durable ? » dans l'abstrait — c'est plutôt de savoir si le fournisseur peut démontrer un contrôle direct sur la gestion de la plantation et le sciage, fournir une documentation de chaîne de traçabilité FSC pour la commande spécifique, et parler concrètement de ses pratiques de séchage, de classification et d'export, plutôt que de se limiter à un discours général sur la durabilité.",
      },
    ],
  },
];
