/**
 * Textos institucionais da Dexter Embreagens.
 * Centralizados para reutilização em páginas e componentes.
 */

export const INSTITUCIONAL = {
  sobreNos: {
    titulo: "Sobre a Dexter Embreagens",
    subtitulo: "A força que o seu caminhão precisa",
    texto: [
      "A Dexter Embreagens é uma empresa brasileira especializada na remanufatura e comercialização de embreagens para veículos pesados. Com mais de 20 anos de atuação no mercado de caminhões, ônibus e guindastes, construímos nossa reputação entregando peças com qualidade de nova e custo-benefício imbatível.",
      "Nossa operação é focada exclusivamente no segmento de pesados — não trabalhamos com veículos de passeio. Essa especialização nos permite dominar cada detalhe técnico das embreagens que remanufaturamos, desde a seleção de materiais até a calibração final em bancada.",
      "Estamos localizados em São Paulo, com estrutura própria para atender transportadoras, oficinas mecânicas, frotistas e operadores de guindastes em todo o Brasil. Nosso compromisso é manter seu veículo rodando com segurança e economia.",
    ],
    imagem: "/images/reman_mechanic.png",
  },

  missao: {
    titulo: "Missão",
    texto:
      "Fornecer embreagens remanufaturadas de alta performance para veículos pesados, combinando qualidade industrial com preço justo, para que nossos clientes mantenham suas operações rodando sem paradas desnecessárias.",
  },

  visao: {
    titulo: "Visão",
    texto:
      "Continuar como referência em remanufatura de embreagens para o segmento de pesados, reconhecida pela qualidade técnica, agilidade no atendimento e compromisso com a satisfação do cliente.",
  },

  valores: [
    "Qualidade sem concessão — cada peça sai com padrão de nova",
    "Especialização — foco total em veículos pesados",
    "Agilidade — pronta entrega para não parar sua operação",
    "Transparência — diagnóstico honesto e preço justo",
    "Compromisso — garantia real em tudo que vendemos",
  ],

  politicaPrivacidade: {
    titulo: "Política de Privacidade",
    secoes: [
      {
        titulo: "Coleta de Dados",
        texto:
          "A Dexter Embreagens coleta apenas os dados pessoais necessários para atendimento comercial: nome, telefone, e-mail e informações sobre o veículo do cliente. Esses dados são fornecidos voluntariamente pelo usuário ao entrar em contato por WhatsApp, telefone ou formulário do site.",
      },
      {
        titulo: "Uso dos Dados",
        texto:
          "Os dados coletados são utilizados exclusivamente para: responder solicitações de orçamento, enviar informações sobre pedidos e peças, e comunicar novidades e promoções (apenas com consentimento). Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros.",
      },
      {
        titulo: "Armazenamento e Segurança",
        texto:
          "Os dados são armazenados em ambiente seguro com acesso restrito. Adotamos medidas técnicas e organizacionais para proteger as informações contra acesso não autorizado, perda ou destruição.",
      },
      {
        titulo: "Direitos do Titular",
        texto:
          "Conforme a LGPD (Lei Geral de Proteção de Dados), você tem direito a: acessar seus dados, solicitar correção, exclusão ou portabilidade. Para exercer esses direitos, entre em contato pelo nosso WhatsApp ou e-mail.",
      },
      {
        titulo: "Cookies",
        texto:
          "O site utiliza cookies essenciais para funcionamento e cookies de análise para melhorar a experiência do usuário. Você pode desabilitar cookies nas configurações do seu navegador.",
      },
    ],
  },
};

/** Segmentos de clientes atendidos */
export const SEGMENTOS_CLIENTES = [
  {
    id: "transportadoras",
    nome: "Transportadoras",
    icon: "Truck",
  },
  {
    id: "concretagem",
    nome: "Empresas de Concretagem",
    icon: "Building2",
  },
  {
    id: "oficinas",
    nome: "Oficinas Especializadas",
    icon: "Wrench",
  },
  {
    id: "frotistas",
    nome: "Frotistas",
    icon: "SquareParking",
  },
  {
    id: "quimicos",
    nome: "Transportadoras de Produtos Químicos",
    icon: "FlaskConical",
  },
  {
    id: "guindastes",
    nome: "Operadores de Guindastes",
    icon: "Crane",
  },
  {
    id: "reciclagem",
    nome: "Empresas de Reciclagem Urbana",
    icon: "Recycle",
  },
  {
    id: "mineradoras",
    nome: "Mineradoras",
    icon: "Mountain",
  },
];
