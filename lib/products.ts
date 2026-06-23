/**
 * Dados centralizados de produtos e serviços da Dexter Embreagens.
 * Fonte única de verdade — usado nas páginas, cards e catálogos.
 */

export interface Product {
  slug: string;
  nome: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  especificacoes: string[];
  aplicacao: string;
  imagem: string;
  icon: string; // nome do ícone Lucide
}

export interface Service {
  slug: string;
  nome: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  etapas: { titulo: string; descricao: string }[];
  imagem: string;
  icon: string;
}

// ────────────────────────────────────────────────────────────
// Produtos
// ────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    slug: "embreagens",
    nome: "Embreagens Remanufaturadas",
    descricaoCurta:
      "Conjuntos completos remanufaturados com qualidade de peça nova para caminhões, ônibus e guindastes.",
    descricaoCompleta:
      "Nossas embreagens remanufaturadas passam por um rigoroso processo industrial que inclui desmontagem completa, inspeção dimensional, substituição de componentes desgastados e montagem com torque controlado. Cada conjunto sai da linha com as mesmas especificações da peça original, garantindo acoplamento perfeito, transmissão de torque eficiente e vida útil prolongada. Trabalhamos com discos de 350mm a 430mm, atendendo toda a linha de veículos pesados nacionais e importados.",
    especificacoes: [
      "Discos de 350mm a 430mm",
      "Compatível com câmbio manual e automatizado",
      "Lonas de alta performance (cerâmica e orgânica)",
      "Platôs com molas calibradas em bancada",
      "Garantia completa contra defeitos de fabricação",
    ],
    aplicacao:
      "Caminhões Volvo, Scania, Mercedes-Benz, DAF, Ford Cargo, VW Constellation, MAN e ônibus rodoviários/urbanos.",
    imagem: "/images/clutch_part.png",
    icon: "Layers",
  },
  {
    slug: "volantes",
    nome: "Volantes de Embreagem",
    descricaoCurta:
      "Retífica e balanceamento de volantes do motor com precisão industrial.",
    descricaoCompleta:
      "O volante do motor é a superfície de contato direta com o disco de embreagem. Quando apresenta desgaste, empenamento ou pontos duros, causa trepidação, ruído e desgaste prematuro do conjunto. Na Dexter, realizamos a retífica com usinagem CNC, devolvendo a planicidade original da peça. Após a usinagem, cada volante passa por balanceamento dinâmico para eliminar vibrações. O resultado é uma superfície lisa, plana e perfeitamente equilibrada.",
    especificacoes: [
      "Usinagem CNC com tolerância de 0,02mm",
      "Balanceamento dinâmico computadorizado",
      "Verificação de runout (batimento axial)",
      "Compatível com volantes simples e dupla massa",
      "Laudo técnico de medição incluso",
    ],
    aplicacao:
      "Todos os modelos de caminhões e ônibus com volante de embreagem convencional ou dupla massa.",
    imagem: "/images/clutch_part.png",
    icon: "Circle",
  },
  {
    slug: "garfos",
    nome: "Garfos de Embreagem",
    descricaoCurta:
      "Garfos de acionamento remanufaturados e novos para todas as marcas de pesados.",
    descricaoCompleta:
      "O garfo de acionamento é o braço mecânico que transmite o movimento do pedal para o mancal, pressionando o platô e desacoplando a embreagem. Garfos desgastados causam curso irregular do pedal, dificuldade para engatar marchas e desgaste acelerado do mancal. Trabalhamos com garfos remanufaturados (com solda e reforço estrutural) e garfos novos para aplicações que exigem peça original.",
    especificacoes: [
      "Aço carbono com tratamento térmico",
      "Pinos e buchas substituídos",
      "Solda TIG para reforço estrutural",
      "Compatível com atuação mecânica e hidráulica",
      "Disponível novo e remanufaturado",
    ],
    aplicacao:
      "Mercedes-Benz Actros, Atego, Axor; Volvo FH, FM; Scania R, P; Ford Cargo; VW Constellation.",
    imagem: "/images/clutch_part.png",
    icon: "GitFork",
  },
  {
    slug: "atuadores",
    nome: "Atuadores",
    descricaoCurta:
      "Atuadores hidráulicos e cilindros mestre/auxiliar remanufaturados.",
    descricaoCompleta:
      "Os atuadores hidráulicos são responsáveis por converter a pressão do pedal em força mecânica sobre o platô. Quando apresentam vazamento ou perda de pressão, o pedal fica duro, a embreagem não desacopla completamente e as marchas travam. Na Dexter, remanufaturamos atuadores com troca total de vedações, retífica do cilindro interno e teste de pressão em bancada. Também trabalhamos com cilindros mestre e auxiliar (escravo) para completar o sistema hidráulico.",
    especificacoes: [
      "Vedações originais substituídas",
      "Cilindro interno retificado",
      "Teste de pressão em bancada (até 50 bar)",
      "Inclui cilindro mestre e auxiliar",
      "Compatível com sistemas concêntricos e externos",
    ],
    aplicacao:
      "Toda a linha de veículos pesados com acionamento hidráulico de embreagem.",
    imagem: "/images/atuador_cilindro.png",
    icon: "Cylinder",
  },
  {
    slug: "mancais",
    nome: "Mancais e Rolamentos",
    descricaoCurta:
      "Rolamentos de embreagem de alta durabilidade para acionamento suave e silencioso.",
    descricaoCompleta:
      "O mancal (ou rolamento de embreagem) é a peça que faz contato direto com o platô quando o pedal é acionado. Sua função é girar livremente enquanto empurra as molas do platô, permitindo o desacoplamento suave. Mancais desgastados causam chiado, vibração e, em casos extremos, podem travar e destruir o platô. Trabalhamos com rolamentos selados de alta durabilidade, projetados para aguentar a carga axial dos veículos pesados.",
    especificacoes: [
      "Rolamento selado de alta carga axial",
      "Lubrificação permanente de fábrica",
      "Resistente a temperatura extrema",
      "Gaiola de aço ou poliamida reforçada",
      "Garantia contra defeitos de fabricação",
    ],
    aplicacao:
      "Caminhões, ônibus e guindastes de todas as marcas com embreagem mecânica ou hidráulica.",
    imagem: "/images/mancal_rolamento.png",
    icon: "Shield",
  },
];

// ────────────────────────────────────────────────────────────
// Serviços
// ────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "remanufatura",
    nome: "Serviço de Remanufatura",
    descricaoCurta:
      "Traga sua peça usada. Fazemos a remanufatura completa com garantia de peça nova.",
    descricaoCompleta:
      "O serviço de remanufatura da Dexter transforma sua embreagem usada em uma peça com desempenho equivalente ao de uma nova. O processo é industrial, com controle de qualidade em cada etapa. Você traz a carcaça da peça antiga e nós devolvemos um produto pronto para rodar, com garantia completa. Isso significa economia de até 40% em relação a uma peça nova, sem abrir mão da qualidade e segurança.",
    etapas: [
      {
        titulo: "1. Recebimento e Triagem",
        descricao:
          "A peça usada é recebida e classificada. Avaliamos o estado geral e definimos se é viável para remanufatura.",
      },
      {
        titulo: "2. Desmontagem e Lavagem",
        descricao:
          "Desmontagem completa com lavagem industrial para remover sujeira, óleo e resíduos acumulados.",
      },
      {
        titulo: "3. Inspeção e Medição",
        descricao:
          "Cada componente é medido e comparado com as especificações originais. Peças fora de tolerância são descartadas.",
      },
      {
        titulo: "4. Substituição de Componentes",
        descricao:
          "Lonas, molas, rebites, vedações e todos os componentes de desgaste são substituídos por novos.",
      },
      {
        titulo: "5. Montagem e Calibração",
        descricao:
          "Montagem com torque controlado e calibração das molas de pressão em bancada.",
      },
      {
        titulo: "6. Teste Final e Garantia",
        descricao:
          "Teste de funcionamento simulando condições reais. Aprovada, a peça recebe selo de garantia Dexter.",
      },
    ],
    imagem: "/images/reman_mechanic.png",
    icon: "RefreshCw",
  },
];

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────

/** Busca um produto pelo slug */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Lista os slugs válidos para generateStaticParams */
export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
