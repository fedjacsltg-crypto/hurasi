import type { LifeCyclePhase, SimpleSection } from "../en/sustainability-page";

export const sustainabilityIntro = {
  eyebrow: "可持续发展",
  title: "培育明日之林",
  subtitle:
    "可持续管理的非洲红木种植园，兼顾环境责任、科学林业与优质木材生产。",
  heroImage: "/images/sustainability/sustainable-forestry.jpg",
};

export const philosophySection: SimpleSection = {
  id: "philosophy",
  title: "我们的理念",
  paragraphs: [
    "在HURASI，可持续发展并非一项独立的举措——它融入了我们所做的每一项林业与工业决策之中。",
    "长远的思考方式，指导着我们规划每一个种植周期——早在第一块木板交付客户的数十年之前便已开始。负责任的管理，意味着不仅要衡量产量，更要衡量森林健康状况、土壤条件及水质随时间的变化。",
    "我们将森林管护、资源效率和对生物多样性的尊重，视为运营的必然要求，而非营销话术——并随着新的林业科学和监测手段的出现，持续致力于自我改进。",
  ],
};

export const whyPlantationSection: SimpleSection = {
  id: "why-plantation",
  title: "为何选择人工种植的非洲红木？",
  paragraphs: [
    "人工种植非洲红木的意义，在于减轻对天然森林的压力，同时满足对这一树种真实且不断增长的需求。",
    "由于该资源是在受控条件下培育的，每一根原木都拥有明确的来源、有据可查的生长历史，以及可核实的监管链——这些优势，是天然林采伐在规模化层面所无法提供的。",
  ],
  bullets: [
    "减轻对天然森林的压力",
    "受控、有计划的生产",
    "明确的来源与生长历史",
    "从幼苗到发货的全程可追溯性",
    "更高、更稳定的木材品质",
    "可靠、可预测的长期供应",
    "贯穿每个阶段的科学化森林管理",
  ],
};

export const lifeCyclePhases: LifeCyclePhase[] = [
  {
    id: "seed-nursery",
    title: "种子选育与育苗",
    stages: ["种子选育", "育苗", "幼苗培育"],
    image: "/images/sustainability/seed-to-forest.jpg",
    imageAlt: "育苗场中生长的非洲红木幼苗",
  },
  {
    id: "establishment-monitoring",
    title: "定植与生长监测",
    stages: [
      "田间种植",
      "生长监测",
      "土壤管理",
      "水资源管理",
    ],
    image: "/images/sustainability/scientific-management.jpg",
    imageAlt: "林业团队在种植园中监测树木生长情况",
  },
  {
    id: "silviculture",
    title: "抚育管理与健康监测",
    stages: [
      "修枝",
      "整形修枝",
      "间伐作业",
      "健康监测",
      "森林资源清查",
    ],
    image: "/images/sustainability/technology-innovation.jpg",
    imageAlt: "在红木林冠上方进行的无人机监测",
  },
  {
    id: "harvest-transport",
    title: "负责任采伐与运输",
    stages: ["负责任采伐", "原木运输"],
    image: "/images/sustainability/responsible-harvesting.jpg",
    imageAlt: "对成熟红木原木进行的选择性采伐",
  },
  {
    id: "processing-export",
    title: "加工与全球出口",
    stages: [
      "锯木",
      "窑干",
      "生产制造",
      "品质检验",
      "包装",
      "全球出口",
    ],
    image: "/images/sustainability/efficient-production.jpg",
    imageAlt: "锯木厂对红木木材的加工处理",
  },
];

export const scientificSection: SimpleSection = {
  id: "scientific-forestry",
  title: "科学化林业管理",
  paragraphs: [
    "每一项种植园决策都始于数据。地块选择需综合考虑气候适应性、土壤分析和排水条件——这些因素将决定未来数十年的生长表现。",
    "我们对遗传品质、树木间距和根系发育进行管理，以在不影响树干形态或木材密度的前提下优化生长速度。我们定期开展胸径监测和森林资源清查，将林分表现与预期生长曲线进行对比追踪。",
    "GIS测绘与无人机监测技术，支持我们逐地块进行精确的森林数据采集，为数字化可追溯系统提供支撑，将每一根原木都追溯至其源头种植地块。",
  ],
  image: "/images/sustainability/technology-innovation.jpg",
  imageAlt: "HURASI各种植园所采用的GIS与无人机监测技术",
};

export const silvicultureSection: SimpleSection = {
  id: "silviculture-practice",
  title: "负责任的抚育管理",
  paragraphs: [
    "选择性修枝与林冠管理，有助于树干笔直生长并减少节疤形成，从而提升成品木材的结构品质与外观表现。",
    "病虫害防治依靠综合虫害管理，而非大范围化学处理，从而保护种植园内的自然生态平衡。",
    "我们在整个生长周期中持续实施水土保持措施，以保护地块的长期生产力——种植园支持未来轮伐的能力，被视为一项首要约束条件，而非事后考量。",
  ],
  bullets: [
    "选择性与整形修枝",
    "林冠管理",
    "综合虫害管理",
    "水资源保护",
    "土壤保护",
    "以树干品质为导向的生长优化",
  ],
};

export const biodiversitySection: SimpleSection = {
  id: "biodiversity",
  title: "生物多样性",
  paragraphs: [
    "当管理规划以景观尺度进行时，人工林种植与生物多样性保护并非相互对立。",
    "我们在各种植地块之间保留天然植被廊道，支持野生动物在整个区域内的迁徙活动。沿水道设置的滨岸缓冲带，保护水质并为依赖河流生态系统的物种保留栖息地。",
    "景观层面的规划识别并保护天然植被区域，在生产性种植面积与栖息地保护之间取得平衡。",
  ],
  image: "/images/sustainability/biodiversity-protection.jpg",
  imageAlt: "种植园景观中的水道及天然植被缓冲带",
};

export const carbonSection: SimpleSection = {
  id: "carbon",
  title: "碳汇",
  paragraphs: [
    "随着非洲红木树木的生长，它们通过光合作用吸收大气中的CO₂，并将碳储存在木质纤维之中。",
    "采伐之后，这些碳仍然储存在木材之中——其脱离大气的时间长短，取决于其最终制成产品的使用寿命。家具、细木工艺和建筑装饰等长寿命应用，能将这一储碳周期延长至远超生长周期本身。",
    "我们将此视为木材作为一种材料的科学特性加以呈现，而非碳抵消声明——人工林种植只是更广泛可持续发展图景中的一部分，而非独立完整的解决方案。",
  ],
  image: "/images/sustainability/carbon-storage.jpg",
  imageAlt: "透过成熟红木林冠仰望的景象",
};

export const fscSection: SimpleSection = {
  id: "fsc-certification",
  title: "FSC认证",
  paragraphs: [
    "我们的林业运营与锯木厂均通过森林管理委员会（FSC）体系的独立认证——这是全球公认的负责任森林管理标准。",
    "FSC认证要求在环境、社会和经济标准方面均有据可查的合规性：负责任的森林管理实践、经核实的从森林到成品的监管链，以及独立第三方审核。",
    "对我们的客户而言，这项认证提供的是经外部核实的保证——而非自我声明——证明他们所购买的木材来自负责任管理的源头。",
  ],
  bullets: [
    "负责任的森林管理",
    "经核实的监管链",
    "独立第三方认证",
    "明确的环境要求",
    "社会责任标准",
    "经济可持续性标准",
  ],
  image: "/images/sustainability/certified-quality.jpg",
  imageAlt: "包装红木板材上的FSC认证标志",
};

export const manufacturingSection: SimpleSection = {
  id: "responsible-manufacturing",
  title: "负责任的生产制造",
  paragraphs: [
    "可持续发展延续至林地之外。我们的锯木作业旨在最大限度地提高每根原木的出材率，从而在加工环节减少浪费。",
    "窑干工艺经过能效优化，锯木厂的副产品——边角料、锯末和树皮——被回收用作生物质燃料，而非丢弃。除尘和水资源管理系统，共同营造出更清洁、更可控的生产环境。",
    "品质管控贯穿于加工的每一个环节，在整个生产运营中支撑起持续改进的企业文化。",
  ],
};

export const globalResponsibilitySection: SimpleSection = {
  id: "global-responsibility",
  title: "全球责任",
  paragraphs: [
    "我们的承诺不仅限于自身运营，更延伸至我们与全球客户所建立的合作关系。",
    "这意味着可靠的长期供应、负责任的采购实践，以及始终如一的优质品质——并以完全符合国际贸易和环境法规为支撑。",
    "我们致力于在每一段客户关系中做到透明：清晰的文件记录、关于交货周期与产能的坦诚沟通，以及对成为值得信赖的木材合作伙伴这一使命的长远眼光。",
  ],
};

export const sustainabilityClosing = {
  title: "以负责任的木材构建未来",
  ctaPrimary: "索取报价",
  ctaSecondary: "探索我们的产品",
  image: "/images/sustainability/delivering-worldwide.jpg",
  imageAlt: "日落时分运输集装箱的货轮",
};
