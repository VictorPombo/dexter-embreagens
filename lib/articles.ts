/** Dados centralizados dos artigos/notícias */

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  category: string;
  /** Posição customizada da imagem de capa no hero (CSS object-position) */
  coverPosition?: string;
  /** Conteúdo completo do artigo em parágrafos */
  content: string[];
  /** Galeria de fotos do artigo */
  gallery: { src: string; alt: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "fenatran-2024",
    title: "Dexter Embreagens na Fenatran 2024",
    excerpt:
      "A Dexter marcou presença na Fenatran 2024, a maior feira de transporte e logística da América Latina. Visitamos os estandes das principais montadoras e reforçamos nosso compromisso com o setor de pesados.",
    date: "Novembro 2024",
    coverImage: "/images/fenatran-2024-capa.jpg",
    category: "Eventos",
    content: [
      "A equipe da Dexter Embreagens marcou presença na Fenatran 2024, a maior e mais importante feira de transporte e logística da América Latina, realizada no São Paulo Expo.",
      "Durante o evento, visitamos os estandes das principais montadoras — Scania, Volvo, Mercedes-Benz, DAF, MAN e Iveco — acompanhando de perto os lançamentos em tecnologia de câmbio, motorização e, claro, sistemas de embreagem para veículos pesados.",
      "A Fenatran é a oportunidade perfeita para nos mantermos atualizados sobre as tendências do setor, desde novas soluções de transmissão automatizada até os avanços em materiais e processos de fabricação de peças. Esse conhecimento se reflete diretamente na qualidade do nosso serviço de remanufatura e na orientação técnica que oferecemos aos nossos clientes.",
      "Além de fortalecer o networking com fornecedores e parceiros, reafirmamos nosso compromisso em oferecer sempre o melhor em embreagens remanufaturadas para caminhões, ônibus e guindastes.",
      "Agradecemos a todos que passaram pelo evento e trocaram experiências conosco. Nos vemos na próxima edição!",
    ],
    gallery: [
      { src: "/images/fenatran/fenatran-01.jpg", alt: "Equipe Dexter na Fenatran 2024 — estande Scania" },
      { src: "/images/fenatran/fenatran-02.jpg", alt: "Visita ao estande de caminhões na Fenatran 2024" },
      { src: "/images/fenatran/fenatran-03.jpg", alt: "Dexter Embreagens na Fenatran 2024" },
      { src: "/images/fenatran/fenatran-04.jpg", alt: "Estande de montadoras na Fenatran 2024" },
      { src: "/images/fenatran/fenatran-05.jpg", alt: "Caminhão Scania exposto na Fenatran 2024" },
    ],
  },
  {
    slug: "lendas-camp-1",
    title: "Dexter Embreagens no Lendas Camp #1",
    excerpt:
      "A Dexter Embreagens foi patrocinadora da primeira edição do Lendas Camp, uma imersão futebolística para jovens talentos ao lado de craques como Craque Neto, Velloso e Muller.",
    date: "2023",
    coverImage: "/images/lendas-camp-capa.jpg",
    coverPosition: "50% 25%",
    category: "Patrocínio",
    content: [
      "A Dexter Embreagens tem orgulho de ter sido uma das patrocinadoras da primeira edição do Lendas Camp, um projeto social inovador que uniu jovens talentos a lendas do futebol brasileiro.",
      "O Lendas Camp #1 foi a estreia de um conceito inédito: uma imersão futebolística onde crianças e adolescentes de 10 a 17 anos puderam treinar, conviver e aprender diretamente com grandes nomes do esporte como Craque Neto, Velloso, Muller e outros ídolos que marcaram época no futebol.",
      "A Dexter marcou presença com a marca estampada nas camisetas oficiais do evento, demonstrando nosso apoio a iniciativas que vão além do esporte — promovendo valores como disciplina, trabalho em equipe, respeito e superação.",
      "Para nós, apoiar o Lendas Camp é mais do que um patrocínio. É uma forma de contribuir com a formação de cidadãos melhores e inspirar as novas gerações, dentro e fora do campo.",
      "O sucesso da primeira edição foi tão grande que confirmou as edições seguintes. A Dexter Embreagens seguiu firme como parceira do projeto!",
    ],
    gallery: [
      { src: "/images/lendas-camp1/foto-1.jpeg", alt: "Participação da Dexter Embreagens no Lendas Camp 1" },
      { src: "/images/lendas-camp1/foto-2.jpeg", alt: "Momentos do Lendas Camp 1" },
      { src: "/images/lendas-camp1/foto-3.jpeg", alt: "Craques do futebol no Lendas Camp 1" },
      { src: "/images/lendas-camp1/foto-4.jpeg", alt: "Equipe no Lendas Camp 1" },
      { src: "/images/lendas-camp1/foto-5.jpeg", alt: "Lendas Camp 1 - Edição 2023" },
      { src: "/images/lendas-camp1/foto-6.jpeg", alt: "Jovens e ídolos no Lendas Camp 1" },
    ],
  },
  {
    slug: "lendas-camp-2",
    title: "Dexter Embreagens no Lendas Camp #2",
    excerpt:
      "Pelo segundo ano consecutivo, a Dexter Embreagens apoiou o Lendas Camp. A segunda edição reuniu ainda mais jovens atletas e trouxe novas estrelas do futebol brasileiro.",
    date: "2024",
    coverImage: "/images/lendas-camp-capa.jpg",
    coverPosition: "50% 25%",
    category: "Patrocínio",
    content: [
      "Pelo segundo ano consecutivo, a Dexter Embreagens esteve presente como patrocinadora do Lendas Camp, reforçando nosso compromisso com projetos sociais que fazem a diferença na vida dos jovens.",
      "A segunda edição do Lendas Camp foi ainda maior que a primeira, reunindo mais jovens atletas e trazendo novos craques do futebol brasileiro. Entre os participantes estiveram nomes como Souza, André Petroni, Alexandre Alves e Rogerinho R9, além dos já conhecidos Craque Neto e Velloso.",
      "A programação incluiu treinamentos intensivos com os atletas, clínicas táticas, jogos competitivos e palestras de uma equipe multidisciplinar que abordou temas como nutrição esportiva e psicologia para jovens atletas.",
      "A marca Dexter Embreagens novamente estampou as camisetas oficiais do evento, e o resultado foi emocionante: ver o sorriso de cada criança ao lado dos seus ídolos é a maior recompensa para quem acredita no poder do esporte como ferramenta de transformação.",
      "O Lendas Camp #2 consolidou o evento como referência em vivências esportivas para jovens no Brasil. E a Dexter Embreagens já garantiu presença na terceira edição!",
    ],
    gallery: [
      { src: "/images/lendas-camp/lendas-camp-01.jpg", alt: "Dexter Embreagens no Lendas Camp #2 — camisetas com a marca" },
    ],
  },
  {
    slug: "lendas-camp-3",
    title: "Dexter Embreagens confirma presença no Lendas Camp #3",
    excerpt:
      "O Lendas Camp confirma sua terceira edição em outubro de 2025 no CT Dartanhã, em Guararema (SP). A Dexter segue como patrocinadora do maior evento de imersão futebolística para jovens.",
    date: "Outubro 2025",
    coverImage: "/images/lendas-camp-capa.jpg",
    coverPosition: "50% 25%",
    category: "Patrocínio",
    content: [
      "A Dexter Embreagens confirma sua presença como patrocinadora na terceira edição do Lendas Camp, que acontecerá nos dias 10, 11 e 12 de outubro de 2025 no CT Dartanhã, em Guararema (SP).",
      "O Lendas Camp 3 é voltado para jovens atletas de 10 a 17 anos e oferece a oportunidade de treinar e conviver com atletas que marcaram época no futebol brasileiro e internacional. As edições anteriores contaram com a presença de nomes como Craque Neto, Velloso, Souza, André Petroni, Alexandre Alves e Rogerinho R9.",
      "\"Nosso objetivo é ir muito além do campo. Queremos inspirar esses jovens, não apenas a serem melhores jogadores, mas também melhores pessoas, com base nos princípios de disciplina, respeito, superação e trabalho em equipe\", afirma Renato Lanzoni, fundador e CEO do Lendas Camp.",
      "A programação completa inclui treinamentos com atletas, clínicas táticas, jogos competitivos e palestras de equipe multidisciplinar, abordando temas como nutrição esportiva e psicologia para atletas.",
      "A Dexter Embreagens se orgulha de estar presente desde a primeira edição deste projeto incrível. Apoiar o Lendas Camp é parte do nosso compromisso em contribuir com a comunidade e inspirar as novas gerações, dentro e fora das oficinas.",
    ],
    gallery: [
      { src: "/images/lendas-camp/lendas-camp-01.jpg", alt: "Equipe Dexter Embreagens no Lendas Camp" },
    ],
  },
];

/** Retorna todos os slugs de artigos */
export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

/** Busca um artigo pelo slug */
export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
