import type { BlogArticle, BlogAuthor } from "@/types/blog";

export const blogIntro = {
  eyebrow: "Central de Conhecimento",
  title: "Insights sobre Mogno Africano Premium",
  subtitle:
    "Expertise técnica, inteligência de mercado e silvicultura sustentável, no universo do Mogno Africano premium.",
  heroImage: "/images/forests/plantation-aerial.jpg",
};

export const authors: BlogAuthor[] = [
  {
    id: "hurasi-desk",
    name: "Equipe de Exportação e Técnica da HURASI",
    photo: null,
    position: "Equipe Editorial",
    bio: "Nossos especialistas em exportação e técnica reúnem décadas de experiência combinada em manejo florestal, operações de serraria e comércio internacional de madeira, trazendo a você uma visão prática e testada em campo sobre o Mogno Africano premium.",
    expertise: ["Mogno Africano", "Logística de Exportação", "Classificação de Madeira", "Silvicultura Sustentável"],
  },
];

export const articles: BlogArticle[] = [
  {
    slug: "complete-guide-african-mahogany-species-grading-trade",
    category: "mahogany",
    tags: ["Mogno Africano", "Khaya", "Madeira Nobre", "Classificação", "Exportação", "Secagem em Estufa"],
    title: "O Guia Completo do Mogno Africano: Espécie, Classificação e Comércio Global",
    subtitle:
      "O que compradores, arquitetos e fabricantes precisam entender antes de especificar Mogno Africano para um projeto.",
    authorId: "hurasi-desk",
    publishedDate: "2026-06-15",
    heroImage: "/images/forests/rough-sawn-slabs.jpg",
    heroImageAlt: "Pranchões de Mogno Africano recém-serrados mostrando veios naturais ricos",
    excerpt:
      "Da origem botânica à documentação de exportação, uma visão prática do que torna o Mogno Africano uma das madeiras nobres mais respeitadas do mundo — e como especificá-lo com confiança.",
    difficulty: "intermediate",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Poucas madeiras nobres carregam tanto prestígio de design quanto o mogno. Mas a espécie mais comumente comercializada hoje sob esse nome não é o mogno da América Central que constituiu os móveis da era colonial — é o Mogno Africano, gênero Khaya, uma madeira botanicamente distinta, mas intimamente relacionada, que se tornou o padrão moderno para aplicações arquitetônicas e mobiliárias premium em todo o mundo. Este guia percorre o que essa espécie realmente é, como é classificada, e o que os compradores precisam saber para especificá-la corretamente em um projeto internacional.",
      },
      {
        type: "heading",
        id: "what-makes-it-premium",
        text: "O que Torna o Mogno Africano uma Madeira Nobre Premium",
      },
      {
        type: "paragraph",
        text: "O Mogno Africano (Khaya ivorensis, entre outras espécies relacionadas) é nativo das florestas tropicais da África Ocidental e Central. Sua reputação se apoia em uma combinação de qualidades raramente encontradas juntas em uma única madeira: uma cor marrom-avermelhada calorosa que se aprofunda de forma atraente com o tempo, veios finos e frequentemente entrelaçados com um efeito de fita distinto, densidade média que equilibra trabalhabilidade e durabilidade, e excelente desempenho em usinagem, colagem e acabamento. Essas características explicam por que se tornou o substituto preferido do mogno verdadeiro (Swietenia macrophylla), hoje fortemente restrito pela CITES e raramente disponível em escala comercial.",
      },
      {
        type: "paragraph",
        text: "Diferentemente do mogno verdadeiro, o Mogno Africano é atualmente fornecido predominantemente por silvicultura de plantio, em vez de extração de floresta natural. Essa mudança importa tanto comercialmente quanto ambientalmente: o cultivo em plantio oferece aos compradores um nível de previsibilidade de fornecimento e rastreabilidade que a origem de floresta natural simplesmente não consegue igualar em escala.",
      },
      {
        type: "heading",
        id: "grading-system",
        text: "Classificação: Como a Qualidade É Avaliada",
      },
      {
        type: "paragraph",
        text: "A classificação é onde muitos compradores novos no comércio de madeira encontram sua primeira complexidade real. A madeira nobre é classificada segundo critérios de classificação internacionalmente reconhecidos, que ponderam vários fatores simultaneamente, em vez de uma única 'pontuação de qualidade'.",
      },
      {
        type: "list",
        items: [
          "Aparência — o caráter visual da face e do verso da tábua, incluindo consistência de cor e desenho.",
          "Frequência de defeitos — a presença e o tamanho de nós, rachaduras (fissuras superficiais) e refilo (borda de casca remanescente na tábua).",
          "Consistência dimensional — o quanto cada peça está em conformidade com a espessura, largura e comprimento especificados.",
          "Teor de umidade — se o material atende à tolerância exigida para sua aplicação pretendida.",
        ],
      },
      {
        type: "paragraph",
        text: "Uma serraria bem administrada inspeciona toras e tábuas acabadas em relação a esses critérios em múltiplas etapas — não apenas na embalagem final, mas durante a seleção de toras e após a secagem em estufa. Para os compradores, a conclusão prática é simples: sempre especifique a qualidade apropriada para sua aplicação, em vez de presumir que 'madeira nobre premium' é um padrão único e fixo. Um projeto de piso ou móveis finos normalmente exige uma qualidade mais rigorosa do que madeira estrutural bruta.",
      },
      {
        type: "heading",
        id: "moisture-kiln-drying",
        text: "Teor de Umidade e Secagem em Estufa",
      },
      {
        type: "paragraph",
        text: "O teor de umidade é possivelmente a variável técnica mais importante em uma especificação de madeira bem-sucedida, e é onde compradores inexperientes mais frequentemente encontram problemas mais adiante em um projeto. Madeira verde (não seca) ou secada de forma inadequada continuará a se mover — encolhendo, empenando ou rachando — muito depois da instalação, comprometendo até a melhor intenção de design.",
      },
      {
        type: "paragraph",
        text: "A secagem em estufa reduz o teor de umidade sob condições controladas de temperatura e umidade relativa até uma meta estável apropriada para o uso final — tipicamente uma faixa mais baixa e mais rigorosamente controlada para pisos e móveis finos do que para madeira de construção geral. É um processo que não pode ser significativamente acelerado sem arriscar tensão interna, rachaduras ou endurecimento superficial na madeira. A madeira seca ao ar continua sendo uma opção legítima para certos usos estruturais ou de construção bruta, onde um teor de umidade ligeiramente mais alto e menos rigorosamente controlado é aceitável — mas para pisos, marcenaria e móveis, a madeira seca em estufa é quase sempre a especificação correta.",
      },
      {
        type: "heading",
        id: "plantation-to-port",
        text: "Da Plantação ao Porto: A Jornada de Exportação",
      },
      {
        type: "paragraph",
        text: "Entender a cadeia de produção ajuda os compradores a fazer perguntas melhores a qualquer fornecedor — e a identificar a diferença entre uma operação genuinamente integrada e um comerciante revendendo material de origem desconhecida.",
      },
      {
        type: "list",
        items: [
          "Manejo da plantação — condições de crescimento controladas sob um plano florestal documentado, idealmente certificado pela FSC.",
          "Colheita e transporte de toras — colheita seletiva de árvores maduras, com toras identificadas e rastreadas a partir deste ponto.",
          "Serraria — conversão de toras em madeira bruta segundo padrões de corte planejados que maximizam tanto o rendimento quanto a qualidade.",
          "Secagem em estufa — redução controlada do teor de umidade até a faixa alvo para a aplicação pretendida.",
          "Classificação e usinagem — separação por padrão de qualidade, seguida de qualquer aplainamento, perfilagem ou trabalho de marcenaria especificado.",
          "Embalagem e documentação de exportação — preparação para o embarque internacional, incluindo a documentação comercial, aduaneira e fitossanitária exigida pelo mercado de destino.",
        ],
      },
      {
        type: "paragraph",
        text: "Um fornecedor verticalmente integrado — que administra suas próprias plantações e serraria em vez de comprar madeira de terceiros — pode tipicamente oferecer um nível de documentação de cadeia de custódia e consistência que uma operação puramente comercial não consegue igualar, já que cada etapa acima está sob uma única operação responsável, em vez de ser reunida a partir de múltiplas fontes menos rastreáveis.",
      },
      {
        type: "heading",
        id: "choosing-specification",
        text: "Escolhendo a Especificação Certa para Seu Projeto",
      },
      {
        type: "paragraph",
        text: "Na prática, a maioria das questões de especificação se resume a combinar três variáveis com sua aplicação: qualidade, teor de umidade e tolerância dimensional. Um fabricante de móveis produzindo marcenaria fina normalmente vai querer uma qualidade mais alta, controle de umidade mais rigoroso e tolerância dimensional mais próxima do que um empreiteiro adquirindo tábuas de deck para um grande terraço externo — onde o caráter natural e a eficiência de custo podem importar mais do que a uniformidade absoluta.",
      },
      {
        type: "quote",
        text: "A especificação certa não é a mais cara — é aquela que corresponde aos requisitos reais de desempenho da aplicação, nem mais, nem menos.",
      },
      {
        type: "paragraph",
        text: "Para arquitetos e compradores trabalhando em um projeto internacional, a abordagem mais eficiente é geralmente compartilhar a aplicação, dimensões-alvo e quaisquer requisitos regulatórios relevantes diretamente com uma equipe técnica de exportação logo no início do processo — bem antes de um conjunto completo de desenhos ser finalizado. Isso permite que decisões de classificação, secagem e embalagem sejam alinhadas com o projeto desde o início, em vez de adaptadas depois a um custo e risco maiores.",
      },
    ],
  },
  {
    slug: "plantation-grown-timber-future-responsible-luxury-interiors",
    category: "sustainability",
    tags: ["Sustentabilidade", "FSC", "Mercado de Madeira", "Arquitetura", "Interiores de Luxo"],
    title: "Por Que a Madeira de Plantio É o Futuro dos Interiores de Luxo Responsáveis",
    subtitle:
      "Como a silvicultura controlada está remodelando a forma como arquitetos e designers adquirem madeira nobre premium para projetos de alto padrão.",
    authorId: "hurasi-desk",
    publishedDate: "2026-06-29",
    heroImage: "/images/forests/seedling.jpg",
    heroImageAlt: "Muda jovem de mogno crescendo em fileira de viveiro",
    excerpt:
      "Design de luxo e abastecimento responsável já não são prioridades concorrentes. Veja por que o Mogno Africano de plantio está se tornando a especificação padrão para arquitetos que se importam com ambos.",
    difficulty: "beginner",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Durante grande parte do século vinte, luxo e sustentabilidade no abastecimento de madeira foram tratados como considerações separadas — às vezes até opostas. Essa suposição não se sustenta mais. À medida que a regulamentação internacional, as expectativas dos clientes e a transparência do mercado amadureceram, a madeira nobre de plantio passou de uma alternativa de nicho para a especificação padrão de arquitetos e designers que trabalham em interiores premium.",
      },
      {
        type: "heading",
        id: "why-plantation-forestry",
        text: "Por Que Silvicultura de Plantio, e Não Extração de Floresta Natural",
      },
      {
        type: "paragraph",
        text: "A silvicultura de plantio existe para atender à demanda real e crescente por espécies como o Mogno Africano, reduzindo a pressão sobre os ecossistemas de florestas naturais. Como o recurso é cultivado sob condições controladas — da seleção de sementes ao cultivo em viveiro, plantio e ciclos de crescimento manejados — cada tora carrega uma origem e histórico de crescimento documentados. Esse nível de rastreabilidade é estruturalmente impossível de alcançar em escala ao obter material de florestas naturais, por mais bem-intencionada que seja a prática de colheita.",
      },
      {
        type: "paragraph",
        text: "Para arquitetos especificando material em nome de clientes que cada vez mais fazem perguntas pontuais sobre a origem, essa distinção se tornou um argumento de venda prático, e não apenas uma nota de marketing.",
      },
      {
        type: "heading",
        id: "what-fsc-certification-verifies",
        text: "O Que a Certificação FSC Realmente Verifica",
      },
      {
        type: "paragraph",
        text: "A certificação do Forest Stewardship Council (FSC) é o padrão independente mais amplamente reconhecido para manejo florestal responsável, e vale a pena entender precisamente o que ela cobre — porque o valor da certificação está em sua independência, não apenas na alegação em si.",
      },
      {
        type: "list",
        items: [
          "Práticas de manejo florestal responsável, auditadas de forma independente segundo critérios documentados.",
          "Uma cadeia de custódia verificada, da floresta ao produto acabado, em vez de uma simples alegação de origem autodeclarada.",
          "Critérios ambientais cobrindo proteção da biodiversidade, conservação da água e do solo, e regeneração florestal.",
          "Critérios sociais e econômicos relevantes para as comunidades e a força de trabalho ligadas à operação florestal.",
        ],
      },
      {
        type: "paragraph",
        text: "Para uma especificação de projeto, isso significa que uma plantação certificada pela FSC e uma serraria certificada pela FSC fornecem juntas uma garantia verificada externamente em toda a cadeia de produção — não apenas no ponto da colheita.",
      },
      {
        type: "heading",
        id: "carbon-and-material-honesty",
        text: "Armazenamento de Carbono: Uma Característica do Material, Não uma Alegação de Marketing",
      },
      {
        type: "paragraph",
        text: "À medida que as árvores crescem, elas capturam CO₂ atmosférico por fotossíntese e armazenam carbono na própria fibra da madeira. Esse carbono permanece retido no material após a colheita, por uma duração que depende da vida útil do produto que ele se torna — móveis, marcenaria arquitetônica e marcenaria estrutural estendem esse período de armazenamento muito além do próprio ciclo de crescimento.",
      },
      {
        type: "quote",
        text: "Isso é melhor compreendido como uma característica científica da madeira como material, não como uma alegação de compensação. A silvicultura de plantio é uma parte de um quadro de sustentabilidade mais amplo — não uma solução completa por si só.",
      },
      {
        type: "paragraph",
        text: "Apresentar isso honestamente importa para arquitetos que fazem alegações de sustentabilidade em nome de um projeto. Superestimar uma única característica arrisca minar a credibilidade do argumento mais amplo, e genuinamente forte, a favor da madeira nobre de plantio.",
      },
      {
        type: "heading",
        id: "what-this-means-for-specifiers",
        text: "O Que Isso Significa para Arquitetos e Designers de Interiores",
      },
      {
        type: "paragraph",
        text: "Em termos práticos, especificar Mogno Africano de plantio certificado pela FSC permite que um projeto combine três aspectos que antes eram mais difíceis de conciliar: o calor, o caráter dos veios e a trabalhabilidade que tornam o mogno um favorito atemporal em interiores de luxo; um abastecimento documentado e verificável que resiste ao escrutínio de clientes e regulamentações; e confiabilidade de fornecimento de longo prazo, já que os ciclos de plantio são planejados com anos de antecedência, em vez de dependerem da disponibilidade imprevisível de estoque de floresta natural.",
      },
      {
        type: "paragraph",
        text: "Para uma equipe de especificação avaliando fornecedores, a pergunta mais útil raramente é 'isso é sustentável?' de forma abstrata — é se o fornecedor pode demonstrar controle direto sobre o manejo da plantação e a serraria, fornecer documentação de cadeia de custódia FSC para o pedido específico, e falar de forma concreta sobre práticas de secagem, classificação e exportação, em vez de se limitar a uma linguagem geral de sustentabilidade.",
      },
    ],
  },
];
