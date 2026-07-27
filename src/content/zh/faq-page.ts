import type { FaqItem } from "@/types/faq";

export const faqPageIntro = {
  eyebrow: "知识中心",
  title: "常见问题",
  subtitle: "关于从HURASI采购优质非洲红木，您需要了解的一切。",
  heroImage: "/images/forests/plantation-aerial.jpg",
};

export const faqItems: FaqItem[] = [
  // --- 关于非洲红木 ---
  {
    id: "what-is-african-mahogany",
    category: "mahogany",
    question: "什么是非洲红木？",
    answer:
      "非洲红木是指Khaya属的树种，原产于西非和中非的热带雨林。因其红棕色泽、细腻交错的纹理和出色的加工性能而备受推崇，广泛应用于全球的家具、细木工艺、地板、造船和建筑领域。",
  },
  {
    id: "botanical-species-supplied",
    category: "mahogany",
    question: "你们供应的是哪种植物学树种？",
    answer:
      "HURASI的种植园和锯木厂专注于Khaya ivorensis——商业上最受重视的非洲红木树种之一。它在受控条件下的FSC认证种植园中培育，而非取自天然林，因此每一根原木都拥有明确的来源和有据可查的生长历史。",
  },
  {
    id: "comparison-genuine-mahogany",
    category: "mahogany",
    question: "非洲红木与真红木（Swietenia）相比如何？",
    answer:
      "真红木（Swietenia macrophylla）如今受到CITES的严格限制，在商业规模上已难以获得。非洲红木（Khaya）是与之相关但植物学上独立的属，其加工性能、色泽和纹理与之非常相似，在业内被广泛认可为现代、可持续供应的替代品。",
  },
  {
    id: "main-characteristics",
    category: "mahogany",
    question: "它的主要特性有哪些？",
    answer:
      "非洲红木兼具温暖的红棕色调、笔直至交错的纹理及迷人的绸缎般光泽、中等密度、干燥后良好的尺寸稳定性，以及出色的加工、粘合与饰面性能——这些特质使其成为高要求建筑和家具项目的首选材料。",
  },
  {
    id: "color-change-over-time",
    category: "mahogany",
    question: "随着时间推移会发生哪些颜色变化？",
    answer:
      "新锯开的非洲红木通常呈现浅粉至浅红棕色。经光照和空气作用，数月内会逐渐加深为更浓郁的红棕色包浆——这是大多数硬木共有的自然过程，也常被视为该材料美学魅力的一部分。",
  },
  {
    id: "exterior-suitability",
    category: "mahogany",
    question: "非洲红木适合户外应用吗？",
    answer:
      "适合。非洲红木具有良好的天然耐久性，只要施以适当的保护性涂饰并定期维护，常规用于露台、外墙覆层、门及户外细木工艺。对于接触地面或长期潮湿的应用场景，建议与我们的技术团队讨论具体的涂饰规格。",
  },

  // --- 产品与规格 ---
  {
    id: "available-products",
    category: "products",
    question: "HURASI目前提供哪些产品？",
    answer:
      "我们目前的产品线涵盖27毫米和52毫米厚度的锯材，以及宽板、人字形和鱼骨形图案的实木红木拼花地板。所有产品均按订单定制生产，而非取自固定目录，具体规格由每位客户确认。",
  },
  {
    id: "thickness-width-length-options",
    category: "products",
    question: "有哪些厚度、宽度和长度可供选择？",
    answer:
      "标准锯材厚度为27毫米和52毫米，但我们的锯木厂可根据您的项目图纸定制厚度、宽度和长度。请在报价请求中提供您所需的尺寸，我们的团队将确认可行性及出材率。",
  },
  {
    id: "moisture-content-options",
    category: "products",
    question: "你们提供哪些含水率选择——自然风干还是窑干？",
    answer:
      "我们同时供应自然风干和窑干木材，也可按需提供湿材（未干燥）。对于大多数需要低而稳定含水率的家具、细木工艺和地板应用，推荐使用窑干木材；风干木材则适用于某些结构性或粗加工建筑用途。",
  },
  {
    id: "surface-finish-options",
    category: "products",
    question: "你们能生产哪些表面处理和型材？",
    answer:
      "除粗锯材外，我们还提供刨光（四面刨S4S/两面刨S2S）、倒角边、企口和露台型材，以及按您的规格加工或与现有样品匹配的定制型材。对于需要连续长度的特定应用，也提供指接工艺。",
  },
  {
    id: "custom-production",
    category: "products",
    question: "你们能按定制规格生产吗？",
    answer:
      "可以——定制生产正是我们商业模式的核心。我们并非依据固定目录进行生产，而是根据每位客户精确要求的尺寸、等级、含水率和表面处理来制造拼花地板和锯材，从单个集装箱到长期供应计划均可满足。",
  },
  {
    id: "flooring-wall-panel-options",
    category: "products",
    question: "你们供应地板和墙面装饰板吗？",
    answer:
      "是的。我们的实木红木拼花地板提供宽板、人字形和鱼骨形图案，适用于地板应用；同样的木材也可加工成墙面装饰板型材，用于室内细木工艺、建筑外墙覆层和定制安装项目。",
  },

  // --- 质量控制 ---
  {
    id: "grading-system",
    category: "quality",
    question: "非洲红木是如何分级的？",
    answer:
      "木材依据国际公认的硬木分级标准进行分级，涵盖外观、缺陷（节疤、裂纹、边皮）出现频率以及尺寸一致性。每份订单都会明确所需等级，我们的质量团队会在发货前依据该标准对原木和成品板材进行检验。",
  },
  {
    id: "inspection-process",
    category: "quality",
    question: "发货前会进行哪些质量检验？",
    answer:
      "每批货物在包装前都会经过外观分级、尺寸核查和含水率检测。我们的团队会记录翘曲、开裂和色差方面的公差，并准备一份随货附带的质量报告，以便客户在收货时核实是否符合要求。",
  },
  {
    id: "moisture-testing",
    category: "quality",
    question: "含水率是如何测量和控制的？",
    answer:
      "在窑干周期的多个环节以及包装前，我们会使用经过校准的电子含水率仪进行测量，以确认材料符合其预期用途所约定的公差范围——通常地板和家具用材的公差范围要比结构用材更为严格。",
  },
  {
    id: "tolerance-defects",
    category: "quality",
    question: "翘曲、开裂和节疤方面适用哪些公差？",
    answer:
      "翘曲、表面开裂以及节疤大小和出现频率的可接受公差，由您订单中指定的等级决定。我们的分级团队会在检验过程中剔除超出这些限度的板材；如需比标准等级更严格的公差，客户可要求定制规格。",
  },
  {
    id: "traceability-batch-id",
    category: "quality",
    question: "你们能提供完整的可追溯性和批次标识吗？",
    answer:
      "可以。由于我们掌控自有的FSC认证种植园和锯木厂，每一批货物都可追溯至其源头种植地块。货物会标注批次号并在随附文件中注明，支持您对监管链进行完整的核实存档。",
  },

  // --- 可持续发展 ---
  {
    id: "responsible-forestry-explained",
    category: "sustainability",
    question: "HURASI所说的负责任林业管理具体指什么？",
    answer:
      "在HURASI，负责任的林业管理意味着以长期生产力而非短期采伐来经营我们的种植园——受控的采伐周期、土壤和水资源保护、种植地块之间的生物多样性廊道，以及对森林健康的持续监测，这一切都融入日常运营决策之中，而非作为独立举措来对待。",
  },
  {
    id: "plantation-vs-natural-forest",
    category: "sustainability",
    question: "为何选择人工种植红木而非天然林采伐？",
    answer:
      "人工林种植在满足对该树种真实需求的同时，减轻了对天然森林的压力。由于该资源是在受控条件下培育的，每一根原木都拥有明确的来源和有据可查的生长历史——这是天然林采伐无法在规模化层面提供的可追溯性和长期供应可预测性。",
  },
  {
    id: "chain-of-custody",
    category: "sustainability",
    question: "你们的监管链是如何运作的？",
    answer:
      "我们的一体化模式使我们能够从幼苗到发货实现直接监管：种植园管理、采伐、运输、锯木加工和出口物流均在我们的掌控之下。正是这种垂直整合，使每一笔订单都能实现完整、可核实的监管链文件记录成为可能。",
  },
  {
    id: "carbon-storage-explained",
    category: "sustainability",
    question: "非洲红木与碳储存有何关系？",
    answer:
      "随着树木生长，它们通过光合作用吸收大气中的CO₂，并将碳储存在木质纤维之中。采伐之后，这些碳仍然储存在木材之中，其储存时长取决于最终产品的使用寿命——家具和建筑装饰等长寿命应用能将这一储碳期延长至远超生长周期本身。我们将此视为一种材料特性加以呈现，而非碳抵消声明。",
  },
  {
    id: "forest-regeneration",
    category: "sustainability",
    question: "你们如何支持森林再生？",
    answer:
      "每个采伐后的种植地块都会重新种植经过精心挑选、在受控条件下育苗培育的树苗，以维持土地对未来轮伐的生产能力。景观层面的规划也在生产性种植区域之外，同步保护天然植被廊道和滨岸缓冲带。",
  },

  // --- FSC认证 ---
  {
    id: "fsc-certification-meaning",
    category: "sustainability",
    question: "FSC认证能保证什么？",
    answer:
      "FSC（森林管理委员会）认证是一项经独立审核、全球公认的标准，涵盖负责任森林管理的环境、社会和经济标准。我们的种植园和锯木厂均持有FSC认证，为木材的负责任来源提供了经外部核实——而非自我声明——的保证。",
  },
  {
    id: "pefc-vs-fsc",
    category: "sustainability",
    question: "你们也提供PEFC认证材料吗？",
    answer:
      "我们目前的林业和工业运营均采用FSC认证。如果您的项目特别需要PEFC认证文件，请在报价过程中提出，以便我们的团队为您的需求提供最佳可行方案的建议。",
  },
  {
    id: "legal-harvesting-compliance",
    category: "sustainability",
    question: "你们如何确保合法采伐和国际合规性？",
    answer:
      "所有采伐均在我们自有的FSC认证特许经营区内、按照有据可查的管理计划进行，我们的出口文件也依据目的地市场的合法木材贸易要求准备，包括欧盟木材法规、美国雷斯法案及其他地区的同等法规框架。",
  },

  // --- 出口 ---
  {
    id: "countries-served",
    category: "export",
    question: "你们出口到哪些国家？",
    answer:
      "HURASI向多个大洲的进口商、制造商和建筑专业人士开展国际出口业务。我们的出口文件和包装均根据每个目的地市场的具体法规和物流要求进行调整——请在索取报价时告知我们您的进口国，以便我们提前确认相关要求。",
  },
  {
    id: "incoterms-offered",
    category: "export",
    question: "你们提供哪些国际贸易术语——EXW、FOB、CFR、CIF？",
    answer:
      "根据您的物流偏好和目的港，我们可以安排EXW、FOB、CFR和CIF等条款下的货运。我们的报价表单可让您指定首选的贸易术语，以确保定价准确反映相应的责任和成本范围。",
  },
  {
    id: "container-loading-options",
    category: "export",
    question: "你们如何优化集装箱装载——20英尺、40英尺、40英尺高柜、拼箱（LCL）？",
    answer:
      "我们的报价表单内置自动集装箱计算工具，可根据您指定的尺寸和数量，估算体积、重量及最佳集装箱方案——20英尺、40英尺、40英尺高柜，或针对较大货量的多个集装箱。对于较小的订单，也可安排拼箱（LCL）运输。",
  },
  {
    id: "packaging-fumigation",
    category: "export",
    question: "木材如何包装，是否包含熏蒸处理？",
    answer:
      "木材采用适合国际运输和搬运的出口托盘或捆装方式，包装规格可根据您的需求调整。熏蒸及符合ISPM-15标准的包装材料处理，将根据目的地国家的植物检疫要求进行安排。",
  },
  {
    id: "export-documents-list",
    category: "export",
    question: "你们提供哪些出口文件？",
    answer:
      "标准文件包括商业发票、装箱单、提单、原产地证书和植物检疫证书，适用时还包括FSC监管链文件。您海关要求的其他证书也可代为安排——请告知我们目的地的具体要求。",
  },
  {
    id: "customs-clearance-support",
    category: "export",
    question: "你们是否协助办理清关和保险？",
    answer:
      "我们会准备好所有出口方文件，以便在目的地顺利清关，并可根据以往的运输经验，就您所在市场的常见要求提供建议。货物保险可作为CIF条款的一部分安排，也可由买方在其他贸易术语下独立办理。",
  },

  // --- 交货周期 ---
  {
    id: "production-planning-timeline",
    category: "leadTimes",
    question: "我应提前多久规划生产订单？",
    answer:
      "由于大多数订单是按规格定制生产而非现货发货，交货周期取决于干燥要求、订单量及当前生产排期。建议在报价过程的早期就讨论您期望的交货日期，以便我们确认现实可行的生产和运输时间表。",
  },
  {
    id: "drying-time-impact",
    category: "leadTimes",
    question: "窑干工艺如何影响交货周期？",
    answer:
      "窑干是一个需要严格控制的过程，无法在不影响品质和稳定性的前提下加速，它是影响整体交货周期的主要变量之一。风干或湿材有时可更快供应，但对于大多数家具、细木工艺和地板用途，仍建议使用窑干木材。",
  },
  {
    id: "container-booking-shipping-schedule",
    category: "leadTimes",
    question: "你们提前多久预订集装箱和运输计划？",
    answer:
      "集装箱预订在生产排期确定、货量最终确认后进行，并与服务您目的港的船期进行协调。运输运力的季节性波动可能影响可用性，因此建议您在任何硬性项目截止日期之前尽早确认订单。",
  },
  {
    id: "urgent-orders",
    category: "leadTimes",
    question: "你们能否处理紧急订单？",
    answer:
      "在生产能力和材料供应允许的情况下，我们会尽力满足紧急需求，但优质木材生产在不影响品质的前提下能加速的程度存在自然限制。请直接联系我们的出口团队并告知您的截止日期，以便我们诚实地为您评估可行性。",
  },
  {
    id: "project-planning-support",
    category: "leadTimes",
    question: "你们能协助规划大型建筑项目的交货周期吗？",
    answer:
      "可以。对于有分阶段交付需求的建筑或施工项目，我们的团队可与您合作，将生产和运输计划与您的项目时间表相协调，必要时也可安排跨多个集装箱的分批交付。",
  },

  // --- 订单 ---
  {
    id: "minimum-order-quantity",
    category: "orders",
    question: "是否有最低起订量？",
    answer:
      "我们既能支持单个集装箱的订单，也能支持长期供应计划；没有僵化统一的最低起订量。请在报价请求中告知您的预期货量，我们的团队将确认其是否与整箱、拼箱或组合发货高效匹配。",
  },
  {
    id: "samples-availability",
    category: "orders",
    question: "下单前我可以索取样品吗？",
    answer:
      "可以，您可在正式下单前索取样品，以评估树种特性、表面处理和加工质量。请在通过我们的联系表单联系我们时，注明您希望查看的具体产品和处理工艺。",
  },
  {
    id: "trial-orders",
    category: "orders",
    question: "在签订更大合同之前，你们是否接受较小的试订单？",
    answer:
      "是的，试订单是在扩展到长期供应协议之前评估我们产品和服务的常见而明智的方式。我们很乐意商讨一个能让您放心验证品质与可靠性的试订货量。",
  },
  {
    id: "repeat-orders-framework",
    category: "orders",
    question: "我们可以为重复订单建立框架协议吗？",
    answer:
      "可以。我们的许多客户都采用长期安排，涵盖约定的规格、定价结构以及每月或每季度重复货量的交付节奏。这可在建立初步合作关系后，直接与我们的出口团队商讨确定。",
  },
  {
    id: "order-modifications-cancellation",
    category: "orders",
    question: "你们对订单修改或取消的政策是什么？",
    answer:
      "由于生产按订单定制，在生产开始前进行变更最为便利；一旦窑干或加工已经开始，修改可能会影响交货周期或成本。如果您的需求发生变化，请尽早联系我们的团队，我们将就当时可行的选项为您提供建议。",
  },

  // --- 价格 ---
  {
    id: "quotation-process",
    category: "pricing",
    question: "报价流程是怎样的？",
    answer:
      "通过我们的报价表单提交您的规格——产品类型、尺寸、等级、含水率、表面处理和目的地——我们的出口团队将审核请求，并准备一份准确反映您具体要求的详细报价，通常还会附上PDF摘要供您存档。",
  },
  {
    id: "pricing-factors",
    category: "pricing",
    question: "哪些因素会影响定价？",
    answer:
      "定价反映树种和等级、尺寸及加工程度（粗锯材与成品型材）、含水率、订单量、包装要求、目的地和贸易术语，以及当前的汇率水平。较大且重复的货量通常能实现更高效的集装箱优化和定价。",
  },
  {
    id: "exchange-rate-impact",
    category: "pricing",
    question: "汇率如何影响我的报价？",
    answer:
      "作为国际出口商，我们的定价可能会受到报价与订单确认之间货币波动的影响。我们致力于在这一点上保持透明，并将明确您具体报价所适用的货币及任何汇率条款。",
  },
  {
    id: "volume-discounts-contracts",
    category: "pricing",
    question: "你们是否提供批量折扣或特殊合同定价？",
    answer:
      "是的，相较于一次性小额订单，较大货量和长期框架协议通常能享受更优惠的定价，这体现了生产计划的效率。请与我们的出口团队商讨您预期的年度或项目货量，以探讨最合适的定价结构。",
  },

  // --- 付款 ---
  {
    id: "payment-methods-accepted",
    category: "payment",
    question: "你们接受哪些付款方式？",
    answer:
      "我们通常采用国际电汇（TT）和信用证，按照国际贸易的标准惯例进行结构安排。具体条款将在报价过程中，根据订单规模、目的地及业务关系性质加以确认。",
  },
  {
    id: "deposit-balance-structure",
    category: "payment",
    question: "定金与尾款的支付结构是怎样的？",
    answer:
      "典型的安排是在订单确认时支付定金以启动生产，尾款则在发货前或发货时支付，但具体条款会根据个案协商确定。该支付结构将作为订单协议的一部分以书面形式确认。",
  },
  {
    id: "letter-of-credit-process",
    category: "payment",
    question: "我们可以通过信用证付款吗？",
    answer:
      "可以，信用证是我们国际交易中公认的付款方式，尤其适用于较大订单。我们的团队将与您及您的开户行协调所需文件，以确保双方交易顺利进行。",
  },
  {
    id: "commercial-conditions-general",
    category: "payment",
    question: "国际交易适用哪些一般商业条款？",
    answer:
      "我们的商业条款涵盖付款结构、交货条件（贸易术语）、文件以及交易各阶段的责任划分，所有内容均在生产开始前以书面形式确认。我们很乐意在报价阶段为您解答商业协议的任何相关问题。",
  },

  // --- 技术信息 ---
  {
    id: "density-hardness-janka",
    category: "technical",
    question: "非洲红木的密度和硬度（Janka硬度）是多少？",
    answer:
      "非洲红木（Khaya ivorensis）密度中等，通常处于知名家具和细木工艺硬木的典型范围内，其Janka硬度适用于地板、家具和建筑装饰。具体数值可能因生长条件和含水率而有所不同——如需针对您应用场景的详细参考数据，请咨询我们的技术团队。",
  },
  {
    id: "shrinkage-dimensional-stability",
    category: "technical",
    question: "它的收缩率和尺寸稳定性如何？",
    answer:
      "经适当窑干至合适含水率后，非洲红木表现出良好的尺寸稳定性，收缩率处于优质家具级硬木的典型中等水平，因此非常适合需要将形变降至最低的地板和精细细木工艺应用。",
  },
  {
    id: "machinability-fasteners-glue",
    category: "technical",
    question: "它在加工、紧固和粘合方面的表现如何？",
    answer:
      "非洲红木使用标准木工工具即可干净地进行加工，对螺钉及其他紧固件的固持力良好，也能顺利接受常见木材胶粘剂——这在一定程度上解释了为何它备受青睐，被用于需要精密耐用接合的家具制作、细木工艺和建筑装饰。",
  },
  {
    id: "finishing-options-technical",
    category: "technical",
    question: "哪些饰面处理效果良好——上漆、染色、上油、上清漆？",
    answer:
      "非洲红木对染色、上油和上清漆的接受度都非常好，能够凸显其天然纹理和色泽，在偏好实色效果时也可进行上漆处理。合适的饰面取决于具体应用场景——我们的团队可根据该部件用于室内、户外还是船舶用途提供建议。",
  },
  {
    id: "fire-acoustic-thermal-performance",
    category: "technical",
    question: "它的防火、声学和热性能特点是什么？",
    answer:
      "与大多数硬木一样，非洲红木的防火表现、声学特性和热性能更多取决于厚度、处理方式和安装环境，而非树种本身。对于这些方面有具体法规要求的项目，请分享您的项目规格，以便我们提供建议，或为您指引相关的检测标准。",
  },
  {
    id: "expected-service-life",
    category: "technical",
    question: "非洲红木产品的预期使用寿命是多久？",
    answer:
      "只要采用适合应用场景的规格、饰面和维护，非洲红木在室内和户外使用中均以长使用寿命著称，这也是其在建筑、精品家具和船舶细木工艺领域享有长久声誉的原因之一。",
  },

  // --- 保养与维护 ---
  {
    id: "cleaning-recommendations",
    category: "care",
    question: "应如何清洁非洲红木表面？",
    answer:
      "对于已完成饰面处理的红木表面，通常用柔软、略微湿润的布进行日常清洁即可；应避免使用刺激性研磨剂或过量的水，以免长期损伤饰面。请遵循针对您产品所采用具体饰面提供的任何专门清洁指南。",
  },
  {
    id: "outdoor-maintenance",
    category: "care",
    question: "推荐进行哪些户外维护？",
    answer:
      "露台或外墙覆层等户外应用，受益于定期重新涂刷保护性饰面（通常根据气候和暴露程度每一至两年一次），以及定期清除杂物和检查磨损情况。我们的团队可根据您当地的气候，推荐合适的维护计划。",
  },
  {
    id: "uv-humidity-effects",
    category: "care",
    question: "紫外线照射和湿度会对木材产生什么影响？",
    answer:
      "长期紫外线照射会使表面颜色随时间逐渐变化，这对该材料而言属正常现象；采用合适的抗紫外线饰面可减缓这一过程。湿度波动可能导致轻微的季节性形变，这正是正确的窑干处理和安装规范对长期稳定性至关重要的原因。",
  },
  {
    id: "storage-handling-recommendations",
    category: "care",
    question: "安装前木材应如何存放和搬运？",
    answer:
      "请将木材存放在干燥、通风良好的场所，层间使用隔条堆叠以保证空气流通，并避免其直接接触地面或淋雨。安装前，应让材料在安装环境的温度和湿度下适应数天，再进行最终安装。",
  },
  {
    id: "installation-recommendations",
    category: "care",
    question: "你们是否提供安装建议？",
    answer:
      "是的——虽然安装通常由您自己的承包商或安装人员完成，我们的技术团队可提供有关材料适应、固定方式、伸缩缝预留和饰面顺序的一般性建议，以支持成功、持久的安装效果。",
  },

  // --- 业务合作 ---
  {
    id: "become-distributor",
    category: "business",
    question: "我可以成为HURASI的经销商吗？",
    answer:
      "我们非常欢迎与有意在其市场代理HURASI产品的成熟进口商和经销商进行洽谈。请通过我们的联系表单提供贵公司及目标市场的详细信息，我们的出口团队将与您跟进，探讨合作机会。",
  },
  {
    id: "work-with-wholesalers",
    category: "business",
    question: "你们是否直接与批发商合作？",
    answer:
      "是的，批发商是我们常规客户类别之一，我们可根据批发分销的需求，灵活调整货量、包装和交货计划。请分享您通常的订单情况，以便我们为您量身定制方案。",
  },
  {
    id: "architect-sample-requests",
    category: "business",
    question: "建筑师和设计师能否为规格设计索取样品？",
    answer:
      "可以，我们经常为建筑师和室内设计师提供样品及技术文件，协助其为项目进行材料规格设计，其中也包括针对预期应用场景在饰面和等级方面的指导建议。",
  },
  {
    id: "developer-support",
    category: "business",
    question: "你们是否为开发商的大型项目提供支持？",
    answer:
      "是的，我们与开发商合作的项目范围从单体建筑到大型开发项目不等，协调生产计划和分阶段交付，以配合施工时间表。在设计阶段及早介入，可让我们就规格和交货周期提供建议。",
  },
  {
    id: "technical-assistance-provided",
    category: "business",
    question: "你们是否为客户提供技术支持？",
    answer:
      "是的，我们的技术团队可就适合您应用场景的树种选择、分级、含水率、饰面及加工方面的考量提供建议，帮助确保所指定的材料在安装后能达到预期性能。",
  },
  {
    id: "recurring-monthly-volumes",
    category: "business",
    question: "你们能否为持续生产需求提供定期的月度供货？",
    answer:
      "可以，为制造商和工业加工商提供定期的月度或季度供货，是我们商业模式的核心组成部分，并由我们一体化的种植园和锯木厂运营作为支撑。请与我们的出口团队商讨您预期的持续货量，以建立可靠的长期供应安排。",
  },
];
