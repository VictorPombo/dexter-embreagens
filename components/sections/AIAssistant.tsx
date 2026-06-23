"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Bot,
  Truck,
  Bus,
  CarFront,
  Gauge,
  Footprints,
  Volume2,
  Activity,
  Cog,
  Flame,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  MessageCircle,
  AlertTriangle,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  STEP_VEICULO,
  STEP_SINTOMA,
  getDiagnosis,
  getDetailStep,
  type DiagnosticResult,
  type AnswerOption,
  type WizardStep,
} from "@/lib/diagnosticEngine";

// Mapeamento de nome de ícone → componente Lucide
const ICON_MAP: Record<string, LucideIcon> = {
  Truck,
  Bus,
  CarFront,
  Gauge,
  Footprints,
  Volume2,
  Activity,
  Cog,
  Flame,
};

/** Badge de urgência */
function UrgencyBadge({ urgencia, label }: { urgencia: string; label: string }) {
  const styles: Record<string, string> = {
    low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    high: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  const icons: Record<string, string> = {
    low: "🟢",
    medium: "🟡",
    high: "🔴",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border ${styles[urgencia] ?? styles.medium}`}
    >
      {icons[urgencia] ?? "🟡"} {label}
    </span>
  );
}

/** Card de opção clicável */
function OptionCard({
  option,
  isSelected,
  onClick,
}: {
  option: AnswerOption;
  isSelected: boolean;
  onClick: () => void;
}) {
  const IconComponent = option.icon ? ICON_MAP[option.icon] : null;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`
        group relative w-full text-left rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-dexter-red focus:ring-offset-2 focus:ring-offset-slate-900
        ${
          isSelected
            ? "border-dexter-red bg-dexter-red/10 shadow-lg shadow-dexter-red/10"
            : "border-slate-700 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800"
        }
      `}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {IconComponent && (
          <div
            className={`
              w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors
              ${isSelected ? "bg-dexter-red text-white" : "bg-slate-700 text-slate-400 group-hover:text-white"}
            `}
          >
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4
            className={`font-bold text-base sm:text-lg ${isSelected ? "text-white" : "text-slate-200"}`}
          >
            {option.label}
          </h4>
          {option.descricao && (
            <p className="text-sm text-slate-400 mt-1">{option.descricao}</p>
          )}
        </div>
        <div
          className={`
            w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 transition-all
            ${isSelected ? "border-dexter-red bg-dexter-red" : "border-slate-600"}
          `}
        >
          {isSelected && (
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}

export function AIAssistant() {
  // ── Estado do wizard ──
  const [step, setStep] = useState(0); // 0=veículo, 1=sintoma, 2=detalhe, 3=resultado
  const [veiculo, setVeiculo] = useState("");
  const [sintoma, setSintoma] = useState("");
  const [detalhe, setDetalhe] = useState("");
  const [resultado, setResultado] = useState<DiagnosticResult | null>(null);
  const [animDir, setAnimDir] = useState<"next" | "prev">("next");

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511919169977";

  // ── Navegação ──
  const goNext = useCallback(() => {
    setAnimDir("next");
    setStep((s) => s + 1);
  }, []);

  const goBack = useCallback(() => {
    setAnimDir("prev");
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const reset = useCallback(() => {
    setAnimDir("prev");
    setStep(0);
    setVeiculo("");
    setSintoma("");
    setDetalhe("");
    setResultado(null);
  }, []);

  // ── Handlers de seleção ──
  const handleVeiculo = (id: string) => {
    setVeiculo(id);
  };

  const handleSintoma = (id: string) => {
    setSintoma(id);
  };

  const handleDetalhe = (id: string) => {
    setDetalhe(id);
  };

  /** Avança para resultado calculando o diagnóstico */
  const calcularResultado = useCallback(() => {
    const result = getDiagnosis(sintoma, detalhe);
    setResultado(result);
    setAnimDir("next");
    setStep(3);
  }, [sintoma, detalhe]);

  // ── Monta a etapa de detalhe dinâmico ──
  const detalheStep: WizardStep | null = sintoma ? getDetailStep(sintoma) : null;

  // ── Barra de progresso ──
  const totalSteps = 4;
  const progressPct = ((step + 1) / totalSteps) * 100;

  // ── Link WhatsApp com diagnóstico ──
  const getWhatsAppLink = () => {
    if (!resultado) return `https://wa.me/${whatsappNumber}`;
    const pecasText = resultado.pecas.map((p) => `${p.nome} (${p.codigo})`).join(", ");
    const text = encodeURIComponent(
      `Olá! Fiz o diagnóstico pelo site e o resultado foi:\n\n` +
        `*Diagnóstico:* ${resultado.diagnostico}\n` +
        `*Causa:* ${resultado.causa}\n` +
        `*Urgência:* ${resultado.urgenciaLabel}\n` +
        `*Peças sugeridas:* ${pecasText}\n\n` +
        `Gostaria de orçar essas peças.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="assistente-ia"
      className="py-14 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grade sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow azul superior */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-dexter-red/10 rounded-full blur-[120px]" />
        {/* Glow vermelho inferior */}
        <div className="absolute -bottom-40 right-0 w-[400px] h-[300px] bg-dexter-red/5 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-dexter-red/10 border border-dexter-red/20 text-dexter-red text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 sm:mb-6 ai-pulse">
              <Bot className="w-4 h-4" />
              Assistente Inteligente
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-condensed font-bold uppercase text-white mb-3 sm:mb-4">
              Diagnóstico <span className="text-dexter-red">Assistido por IA</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
              Responda algumas perguntas rápidas sobre o problema do seu veículo e nossa inteligência artificial vai identificar a causa e sugerir as peças certas.
            </p>
          </div>

          {/* Card principal do wizard */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Barra de progresso */}
            <div className="h-1.5 bg-slate-700/50 relative">
              <div
                className="h-full bg-gradient-to-r from-dexter-red to-red-400 transition-all duration-500 ease-out rounded-r-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Indicador de etapas */}
            <div className="flex items-center justify-between px-4 sm:px-8 pt-4 sm:pt-6 pb-2 overflow-x-auto">
              <div className="flex items-center gap-1.5 sm:gap-3">
                {["Veículo", "Sintoma", "Detalhes", "Resultado"].map((label, idx) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className={`
                        w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all
                        ${
                          idx < step
                            ? "bg-dexter-red text-white"
                            : idx === step
                              ? "bg-dexter-red/20 text-dexter-red border-2 border-dexter-red"
                              : "bg-slate-700 text-slate-500"
                        }
                      `}
                    >
                      {idx < step ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold hidden sm:inline ${
                        idx <= step ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {label}
                    </span>
                    {idx < 3 && (
                      <div className={`w-6 h-px ${idx < step ? "bg-dexter-red" : "bg-slate-700"} hidden sm:block`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Conteúdo da etapa */}
            <div className="p-4 sm:p-6 md:p-8 min-h-[240px] sm:min-h-[280px]">
              <div
                key={step}
                className={animDir === "next" ? "ai-slide-in-next" : "ai-slide-in-prev"}
              >
                {/* ──────── ETAPA 0: Tipo de veículo ──────── */}
                {step === 0 && (
                  <StepContent
                    wizardStep={STEP_VEICULO}
                    selectedId={veiculo}
                    onSelect={handleVeiculo}
                  />
                )}

                {/* ──────── ETAPA 1: Sintoma principal ──────── */}
                {step === 1 && (
                  <StepContent
                    wizardStep={STEP_SINTOMA}
                    selectedId={sintoma}
                    onSelect={handleSintoma}
                  />
                )}

                {/* ──────── ETAPA 2: Detalhe do sintoma ──────── */}
                {step === 2 && detalheStep && (
                  <StepContent
                    wizardStep={detalheStep}
                    selectedId={detalhe}
                    onSelect={handleDetalhe}
                  />
                )}

                {/* ──────── ETAPA 3: Resultado ──────── */}
                {step === 3 && resultado && (
                  <div className="space-y-8">
                    {/* Header do resultado */}
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-dexter-red/10 border-2 border-dexter-red/30 flex items-center justify-center mx-auto mb-4 sm:mb-6 ai-pulse">
                        <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-dexter-red" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-condensed font-bold text-white uppercase mb-3">
                        {resultado.diagnostico}
                      </h3>
                      <UrgencyBadge urgencia={resultado.urgencia} label={resultado.urgenciaLabel} />
                    </div>

                    {/* Explicação */}
                    <div className="bg-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                      <div className="flex items-start gap-3 mb-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <h4 className="font-bold text-white">Causa Provável</h4>
                      </div>
                      <p className="text-slate-300 mb-4 pl-8">{resultado.causa}</p>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-dexter-red shrink-0 mt-0.5" />
                        <h4 className="font-bold text-white">Explicação</h4>
                      </div>
                      <p className="text-slate-400 text-sm mt-2 pl-8">{resultado.explicacao}</p>
                    </div>

                    {/* Peças recomendadas */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-dexter-red" />
                        Peças Recomendadas do Nosso Estoque
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {resultado.pecas.map((peca) => (
                          <div
                            key={peca.id}
                            className="bg-slate-800 rounded-xl p-4 sm:p-5 border border-slate-700 hover:border-dexter-red/30 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-bold text-white text-sm">{peca.nome}</h5>
                              <span className="text-xs font-mono text-slate-500 bg-slate-700 px-2 py-0.5 rounded shrink-0 ml-2">
                                {peca.codigo}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">{peca.descricao}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="lg"
                          className="w-full bg-[#25D366] text-white border-none hover:bg-[#20bd5a] gap-2 font-bold shadow-xl shadow-[#25D366]/20"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Orçar peças no WhatsApp
                        </Button>
                      </a>
                      <button
                        type="button"
                        onClick={reset}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-slate-600 text-slate-400 hover:text-white hover:border-slate-500 transition-colors font-semibold"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Refazer diagnóstico
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer com navegação (não aparece na etapa de resultado) */}
            {step < 3 && (
              <div className="px-6 md:px-8 pb-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-semibold"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Voltar
                </button>

                {step < 2 ? (
                  <Button
                    size="lg"
                    onClick={goNext}
                    disabled={(step === 0 && !veiculo) || (step === 1 && !sintoma)}
                    className="bg-dexter-red text-white border-none hover:bg-dexter-red/90 gap-2 font-bold disabled:opacity-40"
                  >
                    Próximo
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    onClick={calcularResultado}
                    disabled={!detalhe}
                    className="bg-dexter-red text-white border-none hover:bg-dexter-red/90 gap-2 font-bold disabled:opacity-40"
                  >
                    Ver Diagnóstico
                    <Sparkles className="w-5 h-5" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Componente auxiliar para renderizar etapas genéricas
// ────────────────────────────────────────────────────────────

function StepContent({
  wizardStep,
  selectedId,
  onSelect,
}: {
  wizardStep: WizardStep;
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  // Layout: 3 opções → 3 colunas; 6 opções → 2 colunas (grid adapta)
  const gridCols =
    wizardStep.opcoes.length <= 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-condensed font-bold text-white uppercase mb-2">
        {wizardStep.pergunta}
      </h3>
      {wizardStep.subtexto && (
        <p className="text-slate-400 text-sm sm:text-base mb-6 sm:mb-8">{wizardStep.subtexto}</p>
      )}
      <div className={`grid ${gridCols} gap-3 sm:gap-4`}>
        {wizardStep.opcoes.map((opt) => (
          <OptionCard
            key={opt.id}
            option={opt}
            isSelected={selectedId === opt.id}
            onClick={() => onSelect(opt.id)}
          />
        ))}
      </div>
    </div>
  );
}
