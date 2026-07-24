import type { LifeCyclePhase, SimpleSection } from "../en/sustainability-page";

export const sustainabilityIntro = {
  eyebrow: "Sustentabilidade",
  title: "Cultivando as Florestas de Amanhã",
  subtitle:
    "Plantios de Mogno Africano geridos de forma sustentável, combinando responsabilidade ambiental, silvicultura científica e produção de madeira premium.",
  heroImage: "/images/sustainability/sustainable-forestry.jpg",
};

export const philosophySection: SimpleSection = {
  id: "philosophy",
  title: "Nossa Filosofia",
  paragraphs: [
    "Na HURASI, a sustentabilidade não é uma iniciativa à parte — ela está integrada a cada decisão florestal e industrial que tomamos.",
    "Uma visão de longo prazo orienta o planejamento de cada ciclo de plantio, décadas antes de uma única tábua chegar a um cliente. Uma gestão responsável significa medir os resultados não apenas em volume, mas também na saúde da floresta, na condição do solo e na qualidade da água ao longo do tempo.",
    "Tratamos a gestão florestal responsável, a eficiência dos recursos e o respeito à biodiversidade como exigências operacionais, não como temas de marketing — e nos comprometemos com a melhoria contínua à medida que a ciência florestal e as ferramentas de monitoramento avançam.",
  ],
};

export const whyPlantationSection: SimpleSection = {
  id: "why-plantation",
  title: "Por Que Mogno Africano de Plantio?",
  paragraphs: [
    "O Mogno Africano cultivado em plantio existe para reduzir a pressão sobre as florestas nativas, ao mesmo tempo em que atende a uma demanda real e crescente por essa espécie.",
    "Como o recurso é cultivado sob condições controladas, cada tora tem uma origem conhecida, um histórico de crescimento documentado e uma cadeia de custódia verificável — vantagens que o fornecimento a partir de florestas nativas não pode oferecer em escala.",
  ],
  bullets: [
    "Redução da pressão sobre florestas nativas",
    "Produção planejada e controlada",
    "Origem e histórico de crescimento conhecidos",
    "Rastreabilidade completa, da muda ao embarque",
    "Qualidade de madeira superior e constante",
    "Fornecimento confiável e previsível no longo prazo",
    "Gestão florestal científica em cada etapa",
  ],
};

export const lifeCyclePhases: LifeCyclePhase[] = [
  {
    id: "seed-nursery",
    title: "Seleção de Sementes e Viveiro",
    stages: ["Seleção de sementes", "Viveiro", "Mudas jovens"],
    image: "/images/sustainability/seed-to-forest.jpg",
    imageAlt: "Muda jovem de mogno africano em condições de viveiro",
  },
  {
    id: "establishment-monitoring",
    title: "Estabelecimento e Monitoramento de Crescimento",
    stages: [
      "Plantio em campo",
      "Monitoramento de crescimento",
      "Gestão do solo",
      "Gestão da água",
    ],
    image: "/images/sustainability/scientific-management.jpg",
    imageAlt: "Equipe florestal realizando o monitoramento de crescimento no plantio",
  },
  {
    id: "silviculture",
    title: "Silvicultura e Monitoramento Sanitário",
    stages: [
      "Poda",
      "Poda de formação",
      "Desbaste",
      "Monitoramento sanitário",
      "Inventário florestal",
    ],
    image: "/images/sustainability/technology-innovation.jpg",
    imageAlt: "Monitoramento por drone sobre o dossel de mogno",
  },
  {
    id: "harvest-transport",
    title: "Colheita Responsável e Transporte",
    stages: ["Colheita responsável", "Transporte de toras"],
    image: "/images/sustainability/responsible-harvesting.jpg",
    imageAlt: "Colheita seletiva de toras de mogno maduras",
  },
  {
    id: "processing-export",
    title: "Processamento e Exportação Mundial",
    stages: [
      "Serraria",
      "Secagem em estufa",
      "Fabricação",
      "Inspeção de qualidade",
      "Embalagem",
      "Exportação mundial",
    ],
    image: "/images/sustainability/efficient-production.jpg",
    imageAlt: "Processamento da madeira de mogno na serraria",
  },
];

export const scientificSection: SimpleSection = {
  id: "scientific-forestry",
  title: "Gestão Florestal Científica",
  paragraphs: [
    "Toda decisão de plantio começa com dados. A seleção do local leva em conta a adaptação climática, a análise do solo e a drenagem — fatores que determinam o desempenho de crescimento décadas à frente.",
    "A qualidade genética, o espaçamento das árvores e o desenvolvimento radicular são geridos para otimizar a taxa de crescimento sem comprometer a forma do tronco nem a densidade da madeira. O monitoramento de diâmetro e o inventário florestal são realizados em intervalos regulares para comparar o desempenho do talhão com as curvas de crescimento esperadas.",
    "O mapeamento por SIG e o monitoramento por drone permitem uma coleta precisa de dados florestais, talhão por talhão, alimentando um sistema de rastreabilidade digital que conecta cada tora ao seu talhão de origem.",
  ],
  image: "/images/sustainability/technology-innovation.jpg",
  imageAlt: "Tecnologia de mapeamento SIG e monitoramento por drone utilizada nos plantios HURASI",
};

export const silvicultureSection: SimpleSection = {
  id: "silviculture-practice",
  title: "Silvicultura Responsável",
  paragraphs: [
    "A poda seletiva e a gestão do dossel favorecem um crescimento reto do tronco e reduzem a formação de nós, melhorando tanto a qualidade estrutural quanto a aparência da madeira beneficiada.",
    "A prevenção de doenças se apoia no manejo integrado de pragas, em vez de tratamentos químicos generalizados, preservando o equilíbrio biológico natural do plantio.",
    "Práticas de conservação da água e do solo são aplicadas ao longo de todo o ciclo de crescimento para proteger a produtividade do local no longo prazo — a capacidade do plantio de sustentar futuras rotações é tratada como uma restrição de primeira ordem, não como uma reflexão secundária.",
  ],
  bullets: [
    "Poda seletiva e de formação",
    "Gestão do dossel",
    "Manejo integrado de pragas",
    "Conservação da água",
    "Conservação do solo",
    "Otimização do crescimento para qualidade do tronco",
  ],
};

export const biodiversitySection: SimpleSection = {
  id: "biodiversity",
  title: "Biodiversidade",
  paragraphs: [
    "A silvicultura de plantio e a conservação da biodiversidade não são incompatíveis quando a gestão é planejada em escala de paisagem.",
    "Corredores de vegetação nativa são mantidos entre os talhões de plantio, favorecendo o deslocamento da fauna por toda a propriedade. Faixas de proteção ripária ao longo dos cursos d'água protegem a qualidade da água e preservam o habitat de espécies dependentes de ecossistemas ribeirinhos.",
    "O planejamento em escala de paisagem identifica e protege áreas de vegetação nativa, equilibrando área de plantio produtiva e conservação de habitats.",
  ],
  image: "/images/sustainability/biodiversity-protection.jpg",
  imageAlt: "Curso d'água e faixa de vegetação nativa dentro da paisagem do plantio",
};

export const carbonSection: SimpleSection = {
  id: "carbon",
  title: "Carbono",
  paragraphs: [
    "À medida que crescem, as árvores de Mogno Africano capturam CO₂ atmosférico por meio da fotossíntese e armazenam esse carbono na fibra da madeira.",
    "Esse carbono permanece armazenado na madeira após a colheita — o tempo durante o qual ele permanece fora da atmosfera depende da vida útil do produto que ele se torna. Aplicações de longa duração, como móveis, marcenaria e obras arquitetônicas, estendem esse período de armazenamento muito além do próprio ciclo de crescimento.",
    "Apresentamos isso como uma característica científica da madeira enquanto material, não como uma alegação de compensação de carbono — a silvicultura de plantio é apenas uma parte de um panorama mais amplo de sustentabilidade, não uma solução completa por si só.",
  ],
  image: "/images/sustainability/carbon-storage.jpg",
  imageAlt: "Vista de baixo para cima através do dossel maduro de mogno",
};

export const fscSection: SimpleSection = {
  id: "fsc-certification",
  title: "Certificação FSC",
  paragraphs: [
    "Tanto nossas operações florestais quanto nossa serraria são certificadas de forma independente pelo sistema do Forest Stewardship Council (FSC) — um padrão reconhecido mundialmente para o manejo florestal responsável.",
    "A certificação FSC exige conformidade documentada em critérios ambientais, sociais e econômicos: práticas de manejo florestal responsável, cadeia de custódia verificada da floresta ao produto final, e auditoria independente por terceiros.",
    "Para nossos clientes, essa certificação oferece uma garantia verificada externamente — não uma simples declaração própria — de que a madeira que adquirem provém de uma fonte gerida de forma responsável.",
  ],
  bullets: [
    "Manejo florestal responsável",
    "Cadeia de custódia verificada",
    "Certificação independente por terceiros",
    "Exigências ambientais definidas",
    "Critérios de responsabilidade social",
    "Padrões de sustentabilidade econômica",
  ],
  image: "/images/sustainability/certified-quality.jpg",
  imageAlt: "Selo de certificação FSC em pranchas de mogno embaladas",
};

export const manufacturingSection: SimpleSection = {
  id: "responsible-manufacturing",
  title: "Fabricação Responsável",
  paragraphs: [
    "A sustentabilidade continua além do portão da floresta. Nossas operações de serraria são projetadas para maximizar o aproveitamento de madeira de cada tora, reduzindo o desperdício já na etapa de processamento.",
    "A secagem em estufa é otimizada quanto à eficiência energética, e os subprodutos da serraria — retalhos, serragem e casca — são reaproveitados como combustível de biomassa, em vez de descartados. Sistemas de coleta de pó e gestão da água contribuem para um ambiente de produção mais limpo e controlado.",
    "O controle de qualidade é aplicado em cada etapa do processamento, sustentando uma cultura de melhoria contínua em toda a operação industrial.",
  ],
};

export const globalResponsibilitySection: SimpleSection = {
  id: "global-responsibility",
  title: "Responsabilidade Global",
  paragraphs: [
    "Nosso compromisso vai além de nossas próprias operações, estendendo-se às parcerias que construímos com clientes em todo o mundo.",
    "Isso significa fornecimento confiável de longo prazo, práticas de abastecimento responsáveis e qualidade premium constante — sustentados por total conformidade com as regulamentações comerciais e ambientais internacionais.",
    "Buscamos transparência em cada relação com o cliente: documentação clara, comunicação honesta sobre prazos e capacidade, e uma visão de longo prazo do que significa ser um parceiro de confiança na indústria da madeira.",
  ],
};

export const sustainabilityClosing = {
  title: "Construindo o Futuro com Madeira Responsável",
  ctaPrimary: "Solicitar Orçamento",
  ctaSecondary: "Conhecer Nossos Produtos",
  image: "/images/sustainability/delivering-worldwide.jpg",
  imageAlt: "Navio porta-contêineres transportando carga ao pôr do sol",
};
