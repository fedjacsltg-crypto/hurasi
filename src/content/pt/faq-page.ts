import type { FaqItem } from "@/types/faq";

export const faqPageIntro = {
  eyebrow: "Central de Conhecimento",
  title: "Perguntas Frequentes",
  subtitle:
    "Tudo o que você precisa saber para adquirir Mogno Africano premium da HURASI.",
  heroImage: "/images/forests/plantation-aerial.jpg",
};

export const faqItems: FaqItem[] = [
  // --- Sobre o Mogno Africano ---
  {
    id: "what-is-african-mahogany",
    category: "mahogany",
    question: "O que é Mogno Africano?",
    answer:
      "Mogno Africano refere-se às espécies do gênero Khaya, nativas das florestas tropicais da África Ocidental e Central. Apreciado por sua cor marrom-avermelhada, veios finos e entrelaçados e excelentes propriedades de trabalho, é amplamente utilizado em móveis, marcenaria, pisos, construção naval e arquitetura em todo o mundo.",
  },
  {
    id: "botanical-species-supplied",
    category: "mahogany",
    question: "Qual espécie botânica vocês fornecem?",
    answer:
      "Nossas plantações e serraria são dedicadas ao Khaya ivorensis, uma das espécies de Mogno Africano mais valorizadas comercialmente. É cultivada sob manejo controlado em plantio certificado pela FSC, em vez de extraída de florestas naturais, garantindo a cada tora uma origem e histórico de crescimento documentados.",
  },
  {
    id: "comparison-genuine-mahogany",
    category: "mahogany",
    question: "Como o Mogno Africano se compara ao Mogno Verdadeiro (Swietenia)?",
    answer:
      "O Mogno Verdadeiro (Swietenia macrophylla) é hoje fortemente restrito pela CITES e raramente disponível em escala comercial. O Mogno Africano (Khaya) pertence a um gênero botânico relacionado, mas distinto, com propriedades de trabalho, cor e veios muito semelhantes, sendo amplamente aceito no setor como a alternativa moderna e disponível de forma sustentável.",
  },
  {
    id: "main-characteristics",
    category: "mahogany",
    question: "Quais são suas principais características?",
    answer:
      "O Mogno Africano combina um tom marrom-avermelhado caloroso, veios retos a entrelaçados com um efeito de fita atraente, densidade média, boa estabilidade dimensional após a secagem, e excelente desempenho em usinagem, colagem e acabamento — qualidades que o tornam um material preferido para projetos arquitetônicos e mobiliários exigentes.",
  },
  {
    id: "color-change-over-time",
    category: "mahogany",
    question: "Quais mudanças de cor ocorrem com o tempo?",
    answer:
      "O Mogno Africano recém-serrado é tipicamente rosa pálido a marrom-avermelhado claro. Com exposição à luz e ao ar, escurece progressivamente para uma pátina marrom-avermelhada mais rica ao longo de alguns meses — um processo natural comum à maioria das madeiras nobres, frequentemente considerado parte do apelo estético do material.",
  },
  {
    id: "exterior-suitability",
    category: "mahogany",
    question: "O Mogno Africano é adequado para aplicações externas?",
    answer:
      "Sim. O Mogno Africano oferece boa durabilidade natural e é regularmente usado em decks, revestimentos, portas e marcenaria externa, desde que receba um acabamento protetor adequado e manutenção regular. Para aplicações em contato com o solo ou constantemente úmidas, recomendamos discutir as especificações de acabamento com nossa equipe técnica.",
  },

  // --- Produtos e Especificações ---
  {
    id: "available-products",
    category: "products",
    question: "Quais produtos a HURASI oferece atualmente?",
    answer:
      "Nossa linha atual abrange madeira serrada nas espessuras de 27mm e 52mm, e piso de mogno maciço nos padrões tábua larga, chevron e espinha de peixe. Todos os produtos são fabricados sob encomenda, e não retirados de um catálogo fixo, com especificações exatas acordadas com cada cliente.",
  },
  {
    id: "thickness-width-length-options",
    category: "products",
    question: "Quais espessuras, larguras e comprimentos estão disponíveis?",
    answer:
      "A madeira serrada padrão é produzida nas espessuras de 27mm e 52mm, mas nossa serraria pode fabricar espessuras, larguras e comprimentos sob medida de acordo com os desenhos do seu projeto. Informe suas dimensões desejadas na solicitação de orçamento e nossa equipe confirmará a viabilidade e o rendimento.",
  },
  {
    id: "moisture-content-options",
    category: "products",
    question: "Quais opções de teor de umidade vocês oferecem — seca ao ar ou em estufa?",
    answer:
      "Fornecemos madeira seca ao ar e seca em estufa, além de madeira verde (não seca) sob solicitação. A secagem em estufa é recomendada para a maioria das aplicações de móveis, marcenaria e pisos que exigem teor de umidade baixo e estável; a madeira seca ao ar é adequada para certos usos estruturais ou de construção bruta.",
  },
  {
    id: "surface-finish-options",
    category: "products",
    question: "Quais acabamentos de superfície e perfis vocês podem produzir?",
    answer:
      "Além da madeira serrada bruta, oferecemos aplainamento (S4S/S2S), bordas chanfradas, perfis de macho e fêmea e para deck, além de perfis sob medida usinados conforme sua especificação ou reproduzidos a partir de uma amostra existente. A emenda dentada (finger joint) está disponível para aplicações específicas que exigem comprimentos contínuos.",
  },
  {
    id: "custom-production",
    category: "products",
    question: "Vocês podem fabricar segundo especificações personalizadas?",
    answer:
      "Sim — a produção sob medida é o cerne do nosso modelo de negócio. Em vez de trabalhar a partir de um catálogo fixo, fabricamos piso e madeira serrada nas dimensões, qualidade, teor de umidade e acabamento exatos exigidos por cada cliente, de um único contêiner a programas de fornecimento de longo prazo.",
  },
  {
    id: "flooring-wall-panel-options",
    category: "products",
    question: "Vocês fornecem piso e revestimento de parede?",
    answer:
      "Sim. Nosso piso de mogno maciço está disponível nos padrões tábua larga, chevron e espinha de peixe para aplicações de piso, e a mesma madeira pode ser beneficiada em perfis de revestimento para marcenaria interna, revestimento arquitetônico e instalações sob medida.",
  },

  // --- Controle de Qualidade ---
  {
    id: "grading-system",
    category: "quality",
    question: "Como o Mogno Africano é classificado?",
    answer:
      "A madeira é classificada segundo critérios de classificação internacionalmente reconhecidos, cobrindo aparência, frequência de defeitos (nós, rachaduras, refilo) e consistência dimensional. Cada pedido especifica a qualidade exigida, e nossa equipe de qualidade inspeciona toras e tábuas acabadas em relação a esse padrão antes do embarque.",
  },
  {
    id: "inspection-process",
    category: "quality",
    question: "Quais inspeções de qualidade ocorrem antes do embarque?",
    answer:
      "Cada lote passa por classificação visual, verificação dimensional e teste de teor de umidade antes da embalagem. Nossa equipe documenta as tolerâncias de empenamento, rachaduras e variação de cor, e prepara um relatório de qualidade que acompanha o embarque para que os clientes possam verificar a conformidade na chegada.",
  },
  {
    id: "moisture-testing",
    category: "quality",
    question: "Como o teor de umidade é medido e controlado?",
    answer:
      "O teor de umidade é medido com medidores eletrônicos calibrados em vários pontos do ciclo de secagem em estufa e novamente antes da embalagem, para confirmar que o material está dentro da tolerância acordada para sua aplicação pretendida — geralmente uma faixa mais estreita para piso e móveis do que para madeira estrutural.",
  },
  {
    id: "tolerance-defects",
    category: "quality",
    question: "Quais tolerâncias se aplicam a empenamento, rachaduras e nós?",
    answer:
      "As tolerâncias aceitáveis para empenamento, rachaduras de superfície, e tamanho e frequência de nós, são definidas pela qualidade especificada no seu pedido. Nossa equipe de classificação rejeita tábuas fora desses limites durante a inspeção, e clientes que exigem tolerâncias mais rígidas que a qualidade padrão podem solicitar uma especificação sob medida.",
  },
  {
    id: "traceability-batch-id",
    category: "quality",
    question: "Vocês podem fornecer rastreabilidade completa e identificação de lote?",
    answer:
      "Sim. Como controlamos nossas próprias plantações e serraria certificadas pela FSC, cada lote pode ser rastreado até sua parcela de plantação de origem. Os embarques são identificados com números de lote referenciados na documentação que os acompanha, apoiando a verificação completa da cadeia de custódia para seus registros.",
  },

  // --- Sustentabilidade ---
  {
    id: "responsible-forestry-explained",
    category: "sustainability",
    question: "O que significa manejo florestal responsável na HURASI?",
    answer:
      "Na HURASI, manejo florestal responsável significa gerir nossas plantações para produtividade de longo prazo em vez de extração de curto prazo — ciclos de colheita controlados, conservação do solo e da água, corredores de biodiversidade entre parcelas de plantio, e monitoramento contínuo da saúde da floresta, tudo integrado às decisões operacionais diárias, e não tratado como uma iniciativa separada.",
  },
  {
    id: "plantation-vs-natural-forest",
    category: "sustainability",
    question: "Por que mogno de plantio em vez de origem de floresta natural?",
    answer:
      "A silvicultura de plantio reduz a pressão sobre as florestas naturais enquanto atende à demanda real pela espécie. Como o recurso é cultivado em condições controladas, cada tora tem origem conhecida e histórico de crescimento documentado — um nível de rastreabilidade e fornecimento previsível de longo prazo que a extração de floresta natural não consegue oferecer em escala.",
  },
  {
    id: "chain-of-custody",
    category: "sustainability",
    question: "Como funciona sua cadeia de custódia?",
    answer:
      "Nosso modelo integrado nos dá supervisão direta da muda ao embarque: manejo da plantação, colheita, transporte, serraria e logística de exportação estão todos sob nosso controle. Essa integração vertical é o que torna possível uma documentação de cadeia de custódia completa e verificável para cada pedido.",
  },
  {
    id: "carbon-storage-explained",
    category: "sustainability",
    question: "Qual a relação do Mogno Africano com o armazenamento de carbono?",
    answer:
      "À medida que as árvores crescem, capturam CO₂ atmosférico por fotossíntese e armazenam carbono na fibra da madeira. Esse carbono permanece armazenado após a colheita, por um período que depende da vida útil do produto final — usos de longa duração, como móveis e marcenaria arquitetônica, estendem esse armazenamento muito além do próprio ciclo de crescimento. Apresentamos isso como uma característica científica do material, não como uma alegação de compensação.",
  },
  {
    id: "forest-regeneration",
    category: "sustainability",
    question: "Como vocês apoiam a regeneração florestal?",
    answer:
      "Cada parcela colhida é seguida por replantio com mudas cuidadosamente selecionadas, cultivadas em viveiro sob condições controladas, mantendo a capacidade produtiva da terra para rotações futuras. O planejamento em nível de paisagem também protege corredores de vegetação nativa e zonas de proteção ripária ao lado das áreas produtivas de plantio.",
  },

  // --- Certificação FSC ---
  {
    id: "fsc-certification-meaning",
    category: "sustainability",
    question: "O que a certificação FSC garante?",
    answer:
      "A certificação FSC (Forest Stewardship Council) é um padrão auditado de forma independente e reconhecido globalmente, cobrindo critérios ambientais, sociais e econômicos de manejo florestal responsável. Tanto nossas plantações quanto nossa serraria possuem certificação FSC, fornecendo uma garantia verificada externamente — não uma alegação autodeclarada — da origem responsável da madeira.",
  },
  {
    id: "pefc-vs-fsc",
    category: "sustainability",
    question: "Vocês também oferecem material certificado PEFC?",
    answer:
      "Nossa certificação atual é a FSC, tanto para nossas operações florestais quanto industriais. Se seu projeto exigir especificamente documentação certificada PEFC, por favor mencione isso durante o processo de cotação para que nossa equipe possa orientá-lo sobre a melhor opção disponível para suas necessidades.",
  },
  {
    id: "legal-harvesting-compliance",
    category: "sustainability",
    question: "Como vocês garantem colheita legal e conformidade internacional?",
    answer:
      "Toda colheita ocorre dentro de nossas próprias concessões certificadas pela FSC, sob planos de manejo documentados, e nossa documentação de exportação é preparada para atender aos requisitos legais de comércio de madeira dos mercados de destino, incluindo o Regulamento da Madeira da UE, o Lacey Act dos EUA e estruturas equivalentes em outros lugares.",
  },

  // --- Exportação ---
  {
    id: "countries-served",
    category: "export",
    question: "Para quais países vocês exportam?",
    answer:
      "A HURASI exporta internacionalmente para importadores, fabricantes e profissionais da construção em vários continentes. Nossa documentação de exportação e embalagem são adaptadas aos requisitos regulatórios e logísticos específicos de cada mercado de destino — informe seu país de importação ao solicitar um orçamento para que possamos confirmar os requisitos antecipadamente.",
  },
  {
    id: "incoterms-offered",
    category: "export",
    question: "Quais Incoterms vocês oferecem — EXW, FOB, CFR, CIF?",
    answer:
      "Podemos organizar embarques sob os termos EXW, FOB, CFR e CIF, entre outros, dependendo de suas preferências logísticas e do porto de destino. Nosso formulário de orçamento permite que você especifique seu Incoterm preferido para que o preço reflita o escopo correto de responsabilidade e custo.",
  },
  {
    id: "container-loading-options",
    category: "export",
    question: "Como vocês otimizam o carregamento de contêineres — 20 pés, 40 pés, 40 HC, LCL?",
    answer:
      "Nosso formulário de orçamento inclui uma calculadora automática de contêiner que estima volume, peso e o contêiner mais adequado — 20 pés, 40 pés, 40 pés High Cube, ou múltiplos contêineres para volumes maiores — com base nas dimensões e quantidades especificadas. Embarques LCL (carga fracionada) também podem ser organizados para pedidos menores.",
  },
  {
    id: "packaging-fumigation",
    category: "export",
    question: "Como a madeira é embalada, e a fumigação está incluída?",
    answer:
      "A madeira é embalada em paletes ou fardos prontos para exportação, adequados ao transporte e manuseio internacional, com especificações de embalagem adaptáveis às suas necessidades. A fumigação e o tratamento de materiais de embalagem em conformidade com a ISPM-15 são organizados de acordo com os requisitos fitossanitários do país de destino.",
  },
  {
    id: "export-documents-list",
    category: "export",
    question: "Quais documentos de exportação vocês fornecem?",
    answer:
      "A documentação padrão inclui Fatura Comercial, Lista de Embalagem, Conhecimento de Embarque (Bill of Lading), Certificado de Origem e Certificado Fitossanitário, além da documentação de cadeia de custódia FSC quando aplicável. Certificados adicionais exigidos por sua autoridade aduaneira podem ser providenciados — informe-nos os requisitos específicos do seu destino.",
  },
  {
    id: "customs-clearance-support",
    category: "export",
    question: "Vocês auxiliam com desembaraço aduaneiro e seguro?",
    answer:
      "Preparamos toda a documentação do lado da exportação para facilitar um desembaraço aduaneiro tranquilo no destino, e podemos aconselhar sobre requisitos típicos do seu mercado com base em experiência prévia de embarque. O seguro de carga pode ser organizado como parte dos termos CIF, ou providenciado independentemente pelo comprador sob outros Incoterms.",
  },

  // --- Prazos de Entrega ---
  {
    id: "production-planning-timeline",
    category: "leadTimes",
    question: "Com quanto tempo de antecedência devo planejar um pedido de produção?",
    answer:
      "Como a maioria dos pedidos é fabricada sob especificação, em vez de enviada de estoque, os prazos dependem dos requisitos de secagem, volume do pedido e cronograma de produção atual. Recomendamos discutir sua data de entrega desejada logo no início do processo de cotação para que possamos confirmar um cronograma realista de produção e embarque.",
  },
  {
    id: "drying-time-impact",
    category: "leadTimes",
    question: "Como a secagem em estufa afeta os prazos?",
    answer:
      "A secagem em estufa é um processo cuidadosamente controlado que não pode ser apressado sem comprometer a qualidade e a estabilidade, representando uma das principais variáveis do prazo total. Material seco ao ar ou verde às vezes pode ser fornecido mais rapidamente, mas a madeira seca em estufa é recomendada para a maioria dos usos em móveis, marcenaria e pisos.",
  },
  {
    id: "container-booking-shipping-schedule",
    category: "leadTimes",
    question: "Com quanto tempo de antecedência vocês reservam contêineres e cronogramas de embarque?",
    answer:
      "As reservas de contêiner são confirmadas assim que a produção é programada e os volumes finalizados, coordenadas com os cronogramas dos navios que atendem seu porto de destino. Flutuações sazonais na capacidade de transporte podem afetar a disponibilidade, portanto recomendamos confirmar seu pedido com boa antecedência em relação a qualquer prazo rígido de projeto.",
  },
  {
    id: "urgent-orders",
    category: "leadTimes",
    question: "Vocês conseguem atender pedidos urgentes?",
    answer:
      "Fazemos o possível para atender necessidades urgentes quando a capacidade de produção e disponibilidade de material permitem, embora a produção de madeira premium tenha limites naturais quanto à aceleração possível sem comprometer a qualidade. Contate diretamente nossa equipe de exportação com seu prazo para que possamos aconselhar honestamente sobre o que é viável.",
  },
  {
    id: "project-planning-support",
    category: "leadTimes",
    question: "Vocês ajudam a planejar prazos para um projeto de construção maior?",
    answer:
      "Sim. Para projetos arquitetônicos ou de construção com requisitos de entrega em fases, nossa equipe pode trabalhar com você para planejar cronogramas de produção e embarque alinhados ao cronograma do seu projeto, incluindo entregas escalonadas em múltiplos contêineres quando útil.",
  },

  // --- Pedidos ---
  {
    id: "minimum-order-quantity",
    category: "orders",
    question: "Existe uma Quantidade Mínima de Pedido?",
    answer:
      "Estamos estruturados para apoiar tanto pedidos de contêiner único quanto programas de fornecimento de longo prazo; não há um mínimo rígido único. Compartilhe seu volume pretendido na solicitação de orçamento e nossa equipe confirmará se ele se alinha eficientemente com um contêiner completo ou parcial, ou um embarque agrupado.",
  },
  {
    id: "samples-availability",
    category: "orders",
    question: "Posso solicitar amostras antes de fazer um pedido?",
    answer:
      "Sim, amostras podem ser solicitadas para avaliar características da espécie, acabamento e qualidade de usinagem antes de se comprometer com um pedido completo. Mencione o produto e o acabamento específicos que gostaria de ver ao entrar em contato através do nosso formulário.",
  },
  {
    id: "trial-orders",
    category: "orders",
    question: "Vocês aceitam pedidos de teste menores antes de um contrato maior?",
    answer:
      "Sim, um pedido de teste é uma forma comum e sensata de avaliar nosso produto e serviço antes de escalar para um acordo de fornecimento de longo prazo. Temos prazer em discutir um volume de teste que permita validar qualidade e confiabilidade com segurança.",
  },
  {
    id: "repeat-orders-framework",
    category: "orders",
    question: "Podemos estabelecer um acordo-quadro para pedidos recorrentes?",
    answer:
      "Sim. Muitos de nossos clientes operam sob acordos permanentes cobrindo especificações acordadas, estrutura de preços e cadência de entrega para volumes mensais ou trimestrais recorrentes. Isso é discutido diretamente com nossa equipe de exportação assim que um relacionamento de trabalho inicial é estabelecido.",
  },
  {
    id: "order-modifications-cancellation",
    category: "orders",
    question: "Qual é a política de vocês sobre modificações ou cancelamentos de pedidos?",
    answer:
      "Como a produção é feita sob encomenda, mudanças são mais fáceis de acomodar antes do início da fabricação; uma vez que a secagem em estufa ou usinagem esteja em andamento, modificações podem afetar o prazo ou o custo. Contate nossa equipe o quanto antes se suas necessidades mudarem, e aconselharemos sobre as opções disponíveis nesse estágio.",
  },

  // --- Preços ---
  {
    id: "quotation-process",
    category: "pricing",
    question: "Como funciona o processo de cotação?",
    answer:
      "Envie suas especificações através do nosso formulário de orçamento — tipo de produto, dimensões, qualidade, teor de umidade, acabamento e destino — e nossa equipe de exportação analisa a solicitação e prepara um orçamento detalhado refletindo suas exigências exatas, geralmente incluindo um resumo em PDF para seus registros.",
  },
  {
    id: "pricing-factors",
    category: "pricing",
    question: "Quais fatores influenciam os preços?",
    answer:
      "O preço reflete a espécie e qualidade, dimensões e nível de processamento (serrado bruto vs. perfis acabados), teor de umidade, volume do pedido, requisitos de embalagem, destino e Incoterm, e as taxas de câmbio vigentes. Volumes maiores e recorrentes geralmente permitem otimização de contêiner e preços mais eficientes.",
  },
  {
    id: "exchange-rate-impact",
    category: "pricing",
    question: "Como as taxas de câmbio afetam meu orçamento?",
    answer:
      "Como exportador internacional, nossos preços podem ser afetados por flutuações cambiais entre a cotação e a confirmação do pedido. Buscamos transparência nesse ponto e esclareceremos a moeda e quaisquer termos de câmbio aplicáveis à sua cotação específica.",
  },
  {
    id: "volume-discounts-contracts",
    category: "pricing",
    question: "Vocês oferecem descontos por volume ou preços contratuais especiais?",
    answer:
      "Sim, volumes maiores e acordos-quadro de longo prazo geralmente têm preços mais favoráveis do que pedidos pequenos e pontuais, refletindo a eficiência do planejamento de produção. Discuta seu volume anual ou de projeto previsto com nossa equipe de exportação para explorar a estrutura de preços mais adequada.",
  },

  // --- Pagamento ---
  {
    id: "payment-methods-accepted",
    category: "payment",
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Trabalhamos comumente com transferência bancária internacional (TT) e Carta de Crédito, estruturadas conforme as práticas padrão do comércio internacional. Os termos específicos são confirmados durante o processo de cotação, com base no tamanho do pedido, destino e natureza do relacionamento comercial.",
  },
  {
    id: "deposit-balance-structure",
    category: "payment",
    question: "Como funciona a estrutura de sinal e saldo?",
    answer:
      "Um arranjo típico envolve um sinal na confirmação do pedido para iniciar a produção, com o saldo devido antes ou no embarque, embora os termos exatos sejam acordados caso a caso. Essa estrutura é confirmada por escrito como parte do seu acordo de pedido.",
  },
  {
    id: "letter-of-credit-process",
    category: "payment",
    question: "Podemos pagar via Carta de Crédito?",
    answer:
      "Sim, a Carta de Crédito é um método de pagamento reconhecido para nossas transações internacionais, particularmente para pedidos maiores. Nossa equipe coordenará com você e seu banco sobre a documentação necessária para garantir um processo tranquilo para ambas as partes.",
  },
  {
    id: "commercial-conditions-general",
    category: "payment",
    question: "Quais condições comerciais gerais se aplicam a transações internacionais?",
    answer:
      "Nossos termos comerciais cobrem estrutura de pagamento, termos de entrega (Incoterm), documentação e responsabilidades em cada etapa da transação, tudo confirmado por escrito antes do início da produção. Teremos prazer em esclarecer qualquer ponto do acordo comercial durante a etapa de cotação.",
  },

  // --- Informações Técnicas ---
  {
    id: "density-hardness-janka",
    category: "technical",
    question: "Qual a densidade e dureza Janka do Mogno Africano?",
    answer:
      "O Mogno Africano (Khaya ivorensis) possui densidade média, geralmente na faixa típica de madeiras nobres respeitadas para móveis e marcenaria, com dureza Janka adequada para pisos, móveis e marcenaria arquitetônica. Os valores exatos podem variar conforme as condições de crescimento e o teor de umidade — pergunte à nossa equipe técnica dados de referência detalhados para sua aplicação.",
  },
  {
    id: "shrinkage-dimensional-stability",
    category: "technical",
    question: "Qual é sua taxa de contração e estabilidade dimensional?",
    answer:
      "Uma vez seco em estufa adequadamente a um teor de umidade apropriado, o Mogno Africano apresenta boa estabilidade dimensional com contração moderada típica de madeiras nobres de qualidade para móveis, tornando-o bem adequado para pisos e marcenaria fina onde a movimentação deve ser minimizada.",
  },
  {
    id: "machinability-fasteners-glue",
    category: "technical",
    question: "Como ele se comporta em usinagem, fixação e colagem?",
    answer:
      "O Mogno Africano é usinado de forma limpa com ferramentas de marcenaria padrão, retém bem parafusos e outros fixadores, e aceita colas para madeira comuns sem dificuldade, o que explica parte de sua preferência para fabricação de móveis, marcenaria e marcenaria arquitetônica que exigem juntas precisas e duráveis.",
  },
  {
    id: "finishing-options-technical",
    category: "technical",
    question: "Quais acabamentos funcionam bem — pintura, tingimento, óleo, verniz?",
    answer:
      "O Mogno Africano aceita muito bem tingimento, óleo e verniz, realçando seus veios e cor naturais, e também pode ser pintado quando um acabamento sólido é preferido. O acabamento certo depende da aplicação — nossa equipe pode aconselhar com base no uso interno, externo ou marítimo da peça.",
  },
  {
    id: "fire-acoustic-thermal-performance",
    category: "technical",
    question: "Quais são suas características de desempenho ao fogo, acústico e térmico?",
    answer:
      "Como a maioria das madeiras nobres, o comportamento ao fogo, propriedades acústicas e desempenho térmico do Mogno Africano dependem de espessura, tratamento e contexto de instalação, mais do que da espécie isoladamente. Para projetos com requisitos regulatórios específicos nessas áreas, compartilhe as especificações do seu projeto para que possamos aconselhar ou indicar normas de teste relevantes.",
  },
  {
    id: "expected-service-life",
    category: "technical",
    question: "Qual vida útil posso esperar dos produtos de Mogno Africano?",
    answer:
      "Com especificação, acabamento e manutenção adequados à aplicação, o Mogno Africano é conhecido por sua longa vida útil tanto em uso interno quanto externo, o que faz parte de sua reputação duradoura em arquitetura, móveis finos e marcenaria naval.",
  },

  // --- Cuidados e Manutenção ---
  {
    id: "cleaning-recommendations",
    category: "care",
    question: "Como as superfícies de Mogno Africano devem ser limpas?",
    answer:
      "A limpeza rotineira com um pano macio e levemente úmido geralmente é suficiente para superfícies de mogno acabadas; evite abrasivos agressivos ou água em excesso, que podem danificar o acabamento com o tempo. Siga qualquer orientação específica de limpeza fornecida para o acabamento particular aplicado ao seu produto.",
  },
  {
    id: "outdoor-maintenance",
    category: "care",
    question: "Qual manutenção externa é recomendada?",
    answer:
      "Aplicações externas como decks ou revestimentos se beneficiam da reaplicação periódica do acabamento protetor, tipicamente a cada um ou dois anos dependendo do clima e exposição, além da remoção rotineira de detritos e inspeção de desgaste. Nossa equipe pode recomendar um cronograma de manutenção adequado ao seu clima local.",
  },
  {
    id: "uv-humidity-effects",
    category: "care",
    question: "Como a exposição UV e a umidade afetam a madeira?",
    answer:
      "A exposição prolongada aos raios UV mudará gradualmente a cor da superfície com o tempo, o que é normal para o material; um acabamento resistente a UV adequado retarda esse processo. Flutuações de umidade podem causar pequenos movimentos sazonais, razão pela qual a secagem correta em estufa e as práticas corretas de instalação são importantes para a estabilidade a longo prazo.",
  },
  {
    id: "storage-handling-recommendations",
    category: "care",
    question: "Como a madeira deve ser armazenada e manuseada antes da instalação?",
    answer:
      "Armazene a madeira em local seco e bem ventilado, empilhada com espaçadores entre as camadas para permitir a circulação de ar, e protegida do contato direto com o solo e da chuva. Deixe o material se aclimatar à temperatura e umidade do ambiente de instalação por vários dias antes da montagem final.",
  },
  {
    id: "installation-recommendations",
    category: "care",
    question: "Vocês fornecem recomendações de instalação?",
    answer:
      "Sim — embora a instalação seja tipicamente realizada por seus próprios contratados ou instaladores, nossa equipe técnica pode compartilhar recomendações gerais sobre aclimatação, fixação, juntas de expansão e sequência de acabamento, para apoiar uma instalação bem-sucedida e duradoura.",
  },

  // --- Relação Comercial ---
  {
    id: "become-distributor",
    category: "business",
    question: "Posso me tornar um distribuidor HURASI?",
    answer:
      "Recebemos com prazer conversas com importadores e distribuidores estabelecidos interessados em representar a HURASI em seu mercado. Entre em contato através do nosso formulário com detalhes de sua empresa e mercado-alvo, e nossa equipe de exportação retornará para discutir a oportunidade.",
  },
  {
    id: "work-with-wholesalers",
    category: "business",
    question: "Vocês trabalham diretamente com atacadistas?",
    answer:
      "Sim, atacadistas estão entre nossas categorias regulares de clientes, e podemos estruturar volumes, embalagem e cronogramas de entrega para atender às necessidades de distribuição atacadista. Compartilhe seu perfil de pedido típico para que possamos elaborar uma proposta sob medida.",
  },
  {
    id: "architect-sample-requests",
    category: "business",
    question: "Arquitetos e designers podem solicitar amostras para fins de especificação?",
    answer:
      "Sim, apoiamos regularmente arquitetos e designers de interiores com amostras e documentação técnica para auxiliar na especificação de materiais para um projeto, incluindo orientação sobre acabamento e qualidade adequados à aplicação pretendida.",
  },
  {
    id: "developer-support",
    category: "business",
    question: "Vocês apoiam incorporadores em projetos maiores?",
    answer:
      "Sim, trabalhamos com incorporadores em projetos que vão desde construções individuais até empreendimentos maiores, coordenando o planejamento de produção e entrega faseada para se alinhar aos cronogramas de construção. O envolvimento antecipado na fase de projeto nos permite aconselhar sobre especificação e prazos.",
  },
  {
    id: "technical-assistance-provided",
    category: "business",
    question: "Vocês fornecem assistência técnica aos clientes?",
    answer:
      "Sim, nossa equipe técnica está disponível para aconselhar sobre seleção de espécie, classificação, teor de umidade, acabamento e considerações de usinagem apropriadas para sua aplicação, ajudando a garantir que o material especificado tenha o desempenho esperado após a instalação.",
  },
  {
    id: "recurring-monthly-volumes",
    category: "business",
    question: "Vocês conseguem fornecer volumes mensais recorrentes para necessidades de produção contínua?",
    answer:
      "Sim, apoiar volumes mensais ou trimestrais recorrentes para fabricantes e processadores industriais é uma parte central do nosso modelo de negócio, apoiado por nossas operações integradas de plantação e serraria. Discuta seu volume contínuo previsto com nossa equipe de exportação para estabelecer um acordo de fornecimento confiável de longo prazo.",
  },
];
