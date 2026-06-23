/**
 * Motor de diagnóstico inteligente para problemas de embreagem.
 * Usa árvore de decisão baseada em sintomas reais do dia-a-dia.
 * Preparado para futura integração com Supabase (Fase 2).
 */

// ────────────────────────────────────────────────────────────
// Tipos
// ────────────────────────────────────────────────────────────

/** Nível de urgência do problema */
export type Urgency = "low" | "medium" | "high";

/** Peça sugerida do estoque */
export interface StockPart {
  id: string;
  nome: string;
  codigo: string;
  descricao: string;
}

/** Resultado final do diagnóstico */
export interface DiagnosticResult {
  diagnostico: string;
  causa: string;
  explicacao: string;
  urgencia: Urgency;
  urgenciaLabel: string;
  pecas: StockPart[];
}

/** Opção de resposta em cada etapa */
export interface AnswerOption {
  id: string;
  label: string;
  descricao?: string;
  icon?: string; // nome do ícone Lucide
}

/** Etapa do wizard */
export interface WizardStep {
  id: string;
  pergunta: string;
  subtexto?: string;
  opcoes: AnswerOption[];
}

// ────────────────────────────────────────────────────────────
// Dados de estoque (mock — futuramente vem do Supabase)
// ────────────────────────────────────────────────────────────

const ESTOQUE: Record<string, StockPart> = {
  conjunto_completo: {
    id: "conjunto_completo",
    nome: "Conjunto Completo (Disco + Platô)",
    codigo: "DX-KIT-430",
    descricao: "Kit completo remanufaturado com disco e platô para veículos pesados.",
  },
  disco: {
    id: "disco",
    nome: "Disco de Embreagem",
    codigo: "DX-DISC-430",
    descricao: "Disco remanufaturado com lonas de alta performance.",
  },
  plato: {
    id: "plato",
    nome: "Platô de Embreagem",
    codigo: "DX-PLAT-430",
    descricao: "Platô remanufaturado com molas de pressão calibradas.",
  },
  mancal: {
    id: "mancal",
    nome: "Mancal e Rolamento",
    codigo: "DX-MAN-01",
    descricao: "Rolamento de alta durabilidade para acionamento suave.",
  },
  atuador: {
    id: "atuador",
    nome: "Atuador Hidráulico",
    codigo: "DX-ATU-01",
    descricao: "Atuador hidráulico remanufaturado com vedação nova.",
  },
  cilindro_mestre: {
    id: "cilindro_mestre",
    nome: "Cilindro Mestre",
    codigo: "DX-CIL-M01",
    descricao: "Cilindro mestre de embreagem com reparo completo.",
  },
  cilindro_auxiliar: {
    id: "cilindro_auxiliar",
    nome: "Cilindro Auxiliar",
    codigo: "DX-CIL-A01",
    descricao: "Cilindro auxiliar (escravo) com vedação refeita.",
  },
  volante: {
    id: "volante",
    nome: "Volante do Motor",
    codigo: "DX-VOL-01",
    descricao: "Retífica e balanceamento do volante do motor.",
  },
};

// ────────────────────────────────────────────────────────────
// Etapas do wizard
// ────────────────────────────────────────────────────────────

/** Etapa 1 — Tipo de veículo */
export const STEP_VEICULO: WizardStep = {
  id: "veiculo",
  pergunta: "Qual o tipo do seu veículo?",
  subtexto: "Selecione a categoria que melhor se encaixa.",
  opcoes: [
    { id: "caminhao", label: "Caminhão", descricao: "Pesados e semipesados", icon: "Truck" },
    { id: "onibus", label: "Ônibus", descricao: "Rodoviários e urbanos", icon: "Bus" },
    { id: "utilitario", label: "Van / Utilitário", descricao: "Sprinter, Daily, etc.", icon: "CarFront" },
  ],
};

/** Etapa 2 — Sintoma principal */
export const STEP_SINTOMA: WizardStep = {
  id: "sintoma",
  pergunta: "O que está acontecendo com o veículo?",
  subtexto: "Escolha o sintoma mais parecido com o que você observa.",
  opcoes: [
    { id: "patinando", label: "Embreagem patinando", descricao: "Sem força, RPM sobe mas não anda", icon: "Gauge" },
    { id: "pedal_duro", label: "Pedal duro / pesado", descricao: "Dificuldade para pisar", icon: "Footprints" },
    { id: "barulho", label: "Barulho ao pisar", descricao: "Chiado, rangido ou batida", icon: "Volume2" },
    { id: "trepidacao", label: "Trepidação ao arrancar", descricao: "Veículo treme ao sair", icon: "Activity" },
    { id: "marcha", label: "Dificuldade de engatar marcha", descricao: "Marcha não entra ou arranha", icon: "Cog" },
    { id: "cheiro", label: "Cheiro de queimado", descricao: "Cheiro forte vindo da embreagem", icon: "Flame" },
  ],
};

// ────────────────────────────────────────────────────────────
// Etapa 3 — Sub-perguntas condicionais por sintoma
// ────────────────────────────────────────────────────────────

export const STEP_DETALHE: Record<string, WizardStep> = {
  patinando: {
    id: "detalhe_patinando",
    pergunta: "Quando o problema aparece?",
    subtexto: "Isso ajuda a identificar o grau de desgaste.",
    opcoes: [
      { id: "subida", label: "Em subidas ou com carga pesada", descricao: "Perde força só em esforço" },
      { id: "sempre", label: "Em todas as situações", descricao: "Mesmo em plano e sem carga" },
      { id: "intermitente", label: "Vai e volta", descricao: "Às vezes funciona, às vezes patina" },
    ],
  },
  pedal_duro: {
    id: "detalhe_pedal",
    pergunta: "Tem vazamento de fluido?",
    subtexto: "Verifique se há líquido embaixo do veículo ou no painel.",
    opcoes: [
      { id: "sim_vaza", label: "Sim, tem vazamento", descricao: "Fluido no chão ou no motor" },
      { id: "nao_vaza", label: "Não vejo vazamento", descricao: "Pedal pesado mas sem líquido" },
      { id: "nao_sei", label: "Não sei dizer", descricao: "Não tenho certeza" },
    ],
  },
  barulho: {
    id: "detalhe_barulho",
    pergunta: "Quando o barulho aparece?",
    subtexto: "Isso indica qual componente está desgastado.",
    opcoes: [
      { id: "pisando", label: "Quando piso no pedal", descricao: "Barulho ao acionar" },
      { id: "soltando", label: "Quando solto o pedal", descricao: "Barulho ao desengate" },
      { id: "sempre_barulho", label: "Barulho constante", descricao: "Com ou sem pedal pisado" },
    ],
  },
  trepidacao: {
    id: "detalhe_trepidacao",
    pergunta: "A trepidação acontece quando?",
    subtexto: "Ajuda a diferenciar entre disco e volante.",
    opcoes: [
      { id: "saindo", label: "Só ao sair (1ª marcha)", descricao: "No arranque inicial" },
      { id: "todas_marchas", label: "Em várias marchas", descricao: "Treme em diferentes velocidades" },
    ],
  },
  marcha: {
    id: "detalhe_marcha",
    pergunta: "Qual o comportamento?",
    subtexto: "Cada sintoma aponta para uma causa diferente.",
    opcoes: [
      { id: "nao_entra", label: "Marcha não entra", descricao: "Não consegue encaixar" },
      { id: "arranha", label: "Arranha ao engatar", descricao: "Entra com barulho de engrenagem" },
      { id: "pula", label: "Sai sozinha", descricao: "Pula fora da marcha em movimento" },
    ],
  },
  cheiro: {
    id: "detalhe_cheiro",
    pergunta: "Quando o cheiro aparece?",
    subtexto: "Isso indica a gravidade do desgaste.",
    opcoes: [
      { id: "rampa", label: "Só em subidas ou arrancadas", descricao: "Em esforço máximo" },
      { id: "parado", label: "Mesmo com pouco esforço", descricao: "No trânsito comum" },
    ],
  },
};

// ────────────────────────────────────────────────────────────
// Mapeamento de diagnósticos
// ────────────────────────────────────────────────────────────

interface DiagnosticRule {
  diagnostico: string;
  causa: string;
  explicacao: string;
  urgencia: Urgency;
  urgenciaLabel: string;
  pecaIds: string[];
}

/** Chave = "sintoma:detalhe" */
const REGRAS: Record<string, DiagnosticRule> = {
  // ── Patinando ──
  "patinando:subida": {
    diagnostico: "Disco de embreagem com desgaste parcial",
    causa: "As lonas do disco estão finas e perdem aderência sob carga.",
    explicacao:
      "Quando a embreagem patina só em esforço (subida/carga), o disco já está no limite mas ainda funciona em condições leves. É o momento ideal para trocar antes de piorar.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — troque em breve",
    pecaIds: ["disco", "conjunto_completo"],
  },
  "patinando:sempre": {
    diagnostico: "Disco de embreagem totalmente desgastado",
    causa: "As lonas estão gastas ou contaminadas por óleo.",
    explicacao:
      "Quando patina em qualquer situação, o disco já não tem capacidade de transmitir torque. O veículo pode ficar parado a qualquer momento. Troca urgente do conjunto.",
    urgencia: "high",
    urgenciaLabel: "Urgente — risco de parar",
    pecaIds: ["conjunto_completo"],
  },
  "patinando:intermitente": {
    diagnostico: "Possível contaminação do disco por óleo",
    causa: "Vazamento de óleo do motor ou câmbio está contaminando o disco.",
    explicacao:
      "A patinação intermitente geralmente indica que o disco está sendo molhado por óleo. Além de trocar o disco, é preciso investigar o vazamento.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — investigar vazamento",
    pecaIds: ["disco", "conjunto_completo"],
  },
  // ── Pedal Duro ──
  "pedal_duro:sim_vaza": {
    diagnostico: "Vazamento no sistema hidráulico da embreagem",
    causa: "Cilindro mestre ou auxiliar com vedação danificada.",
    explicacao:
      "O vazamento de fluido impede que a pressão hidráulica chegue até o atuador. Isso deixa o pedal pesado e a embreagem não desacopla totalmente.",
    urgencia: "high",
    urgenciaLabel: "Urgente — risco de perder embreagem",
    pecaIds: ["cilindro_mestre", "cilindro_auxiliar", "atuador"],
  },
  "pedal_duro:nao_vaza": {
    diagnostico: "Platô com problema de pressão",
    causa: "Molas do platô enfraquecidas ou mecanismo de liberação travado.",
    explicacao:
      "Sem vazamento, o problema geralmente está no platô ou no atuador mecânico. O esforço excessivo pode danificar outros componentes.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — agendar troca",
    pecaIds: ["plato", "atuador", "conjunto_completo"],
  },
  "pedal_duro:nao_sei": {
    diagnostico: "Sistema hidráulico ou platô necessitam inspeção",
    causa: "Pode ser vazamento não visível ou problema mecânico no platô.",
    explicacao:
      "Recomendamos uma inspeção presencial. Nossos consultores podem ajudar a identificar a causa exata pelo WhatsApp com fotos ou vídeo.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — procure um mecânico",
    pecaIds: ["cilindro_mestre", "cilindro_auxiliar", "plato", "atuador"],
  },
  // ── Barulho ──
  "barulho:pisando": {
    diagnostico: "Mancal / rolamento de embreagem desgastado",
    causa: "O rolamento que empurra o platô está sem lubrificação ou gasto.",
    explicacao:
      "Barulho ao pisar no pedal é o sintoma clássico de mancal desgastado. Se não trocar, pode travar e danificar o platô.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — troque o mancal",
    pecaIds: ["mancal"],
  },
  "barulho:soltando": {
    diagnostico: "Problema no disco ou no amortecimento torcional",
    causa: "Molas do disco ou garfo de acionamento com folga.",
    explicacao:
      "Barulho ao soltar o pedal indica que o disco está com as molas internas comprometidas. Recomendado trocar o conjunto completo.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — agendar reparo",
    pecaIds: ["disco", "conjunto_completo"],
  },
  "barulho:sempre_barulho": {
    diagnostico: "Desgaste avançado em múltiplos componentes",
    causa: "Mancal, disco e/ou platô com desgaste simultâneo.",
    explicacao:
      "Barulho constante indica que mais de uma peça está comprometida. O ideal é trocar o conjunto completo e o mancal.",
    urgencia: "high",
    urgenciaLabel: "Urgente — vários componentes afetados",
    pecaIds: ["conjunto_completo", "mancal"],
  },
  // ── Trepidação ──
  "trepidacao:saindo": {
    diagnostico: "Disco de embreagem empenado ou irregular",
    causa: "Disco com deformação ou lonas com desgaste irregular.",
    explicacao:
      "A trepidação na saída acontece quando o disco não encosta uniformemente no volante. Trocar o disco resolve na maioria dos casos.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — evite forçar a saída",
    pecaIds: ["disco", "conjunto_completo"],
  },
  "trepidacao:todas_marchas": {
    diagnostico: "Volante do motor com superfície irregular",
    causa: "Volante com desgaste, empenamento ou ponto duro.",
    explicacao:
      "Quando a trepidação aparece em várias marchas, o volante do motor precisa ser retificado ou substituído, além do conjunto de embreagem.",
    urgencia: "high",
    urgenciaLabel: "Urgente — pode danificar o câmbio",
    pecaIds: ["volante", "conjunto_completo"],
  },
  // ── Marcha ──
  "marcha:nao_entra": {
    diagnostico: "Embreagem não está desacoplando totalmente",
    causa: "Curso do pedal insuficiente ou atuador com falha.",
    explicacao:
      "Quando a marcha não entra, significa que a embreagem não está separando o motor do câmbio. Geralmente é problema no atuador ou na regulagem do sistema.",
    urgencia: "high",
    urgenciaLabel: "Urgente — veículo pode não sair",
    pecaIds: ["atuador", "cilindro_auxiliar", "plato"],
  },
  "marcha:arranha": {
    diagnostico: "Disco não está liberando totalmente",
    causa: "Disco grudado, platô desregulado ou ar no sistema hidráulico.",
    explicacao:
      "O arranhado na hora de engatar indica que o disco ainda está girando. Pode ser problema simples (ar no sistema) ou desgaste do conjunto.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — pode piorar rápido",
    pecaIds: ["conjunto_completo", "cilindro_auxiliar"],
  },
  "marcha:pula": {
    diagnostico: "Problema de sincronização câmbio/embreagem",
    causa: "Disco com amortecimento comprometido ou câmbio com desgaste interno.",
    explicacao:
      "Marcha que sai sozinha pode indicar desgaste nas molas do disco ou problema no câmbio. Recomendamos inspeção profissional.",
    urgencia: "high",
    urgenciaLabel: "Urgente — risco na estrada",
    pecaIds: ["disco", "conjunto_completo"],
  },
  // ── Cheiro ──
  "cheiro:rampa": {
    diagnostico: "Superaquecimento por uso excessivo da embreagem",
    causa: "Disco patinando em situações de esforço (subida, arrancada pesada).",
    explicacao:
      "O cheiro de queimado em esforço indica que o disco está no limite. Se continuar forçando, as lonas vão vitrificar e a embreagem perderá toda aderência.",
    urgencia: "medium",
    urgenciaLabel: "Atenção — disc com desgaste avançado",
    pecaIds: ["disco", "conjunto_completo"],
  },
  "cheiro:parado": {
    diagnostico: "Lonas do disco vitrificadas",
    causa: "Disco superaquecido repetidamente, lonas já sem capacidade de atrito.",
    explicacao:
      "Se o cheiro aparece mesmo sem esforço, o disco já está vitrificado (liso/polido). Não recupera — precisa trocar o conjunto completo.",
    urgencia: "high",
    urgenciaLabel: "Urgente — embreagem comprometida",
    pecaIds: ["conjunto_completo"],
  },
};

// ────────────────────────────────────────────────────────────
// Função principal
// ────────────────────────────────────────────────────────────

/**
 * Retorna o diagnóstico com base no sintoma e detalhe selecionados.
 * @param sintoma ID do sintoma (etapa 2)
 * @param detalhe ID do detalhe (etapa 3)
 */
export function getDiagnosis(sintoma: string, detalhe: string): DiagnosticResult {
  const chave = `${sintoma}:${detalhe}`;
  const regra = REGRAS[chave];

  // Fallback genérico caso alguma combinação não esteja mapeada
  if (!regra) {
    return {
      diagnostico: "Diagnóstico inconclusivo",
      causa: "Não foi possível determinar a causa com as informações fornecidas.",
      explicacao:
        "Recomendamos falar com um dos nossos consultores pelo WhatsApp. Envie fotos ou vídeos do problema para uma análise mais precisa.",
      urgencia: "medium",
      urgenciaLabel: "Fale com um especialista",
      pecas: [ESTOQUE.conjunto_completo],
    };
  }

  return {
    diagnostico: regra.diagnostico,
    causa: regra.causa,
    explicacao: regra.explicacao,
    urgencia: regra.urgencia,
    urgenciaLabel: regra.urgenciaLabel,
    pecas: regra.pecaIds.map((id) => ESTOQUE[id]),
  };
}

/**
 * Retorna a sub-pergunta (etapa 3) para o sintoma selecionado.
 */
export function getDetailStep(sintomaId: string): WizardStep | null {
  return STEP_DETALHE[sintomaId] ?? null;
}
