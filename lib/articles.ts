/** Dados centralizados dos artigos/notícias */

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  category: string;
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
    slug: "lendas-camp",
    title: "Dexter Embreagens patrocina o Lendas Camp",
    excerpt:
      "Fomos patrocinadores do Lendas Camp, projeto social que reúne crianças com estrelas do futebol brasileiro como Craque Neto, Velloso, Muller e outros. Orgulho de apoiar essa iniciativa.",
    date: "2024",
    coverImage: "/images/lendas-camp-capa.jpg",
    category: "Patrocínio",
    content: [
      "A Dexter Embreagens tem orgulho de ter sido uma das patrocinadoras do Lendas Camp, um projeto social incrível que une crianças e adolescentes a lendas do futebol brasileiro.",
      "O evento contou com a participação de grandes nomes como Craque Neto, Velloso, Muller e muitos outros ídolos do esporte, que dedicaram seu tempo para compartilhar experiências, ensinar técnicas e, principalmente, inspirar as novas gerações através do esporte.",
      "Mais do que futebol, o Lendas Camp promove valores como disciplina, trabalho em equipe e superação — princípios que também guiam o dia a dia da Dexter Embreagens no mercado de pesados.",
      "Acreditamos que investir em projetos sociais é uma forma de retribuir à comunidade e contribuir para a formação de cidadãos melhores. O sorriso de cada criança que participou do evento já é a maior recompensa.",
      "Seguimos firmes no compromisso de apoiar iniciativas que fazem a diferença, dentro e fora das oficinas. O Lendas Camp já confirmou sua terceira edição e nós estaremos lá novamente!",
    ],
    gallery: [
      { src: "/images/lendas-camp/lendas-camp-01.jpg", alt: "Equipe Dexter Embreagens no Lendas Camp com Velloso e Craque Neto" },
      { src: "/images/lendas-camp-capa.jpg", alt: "Time reunido no Lendas Camp 2024" },
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
