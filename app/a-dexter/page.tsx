import { Container } from "@/components/ui/Container";
import { INSTITUCIONAL } from "@/lib/institutional";
import { Target, Eye, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Dexter | Dexter Embreagens",
  description: "Conheça a Dexter Embreagens: mais de 20 anos de especialização em embreagens remanufaturadas para veículos pesados.",
};

export default function ADexterPage() {
  const { sobreNos, missao, visao, valores, politicaPrivacidade } = INSTITUCIONAL;

  return (
    <>
      {/* Hero Institucional */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-condensed font-bold uppercase text-white mb-4">
              {sobreNos.titulo}
            </h1>
            <p className="text-xl text-dexter-red font-bold uppercase tracking-wide">
              {sobreNos.subtitulo}
            </p>
          </div>
        </Container>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-condensed font-bold uppercase text-slate-900 mb-6">
                Quem Somos
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                {sobreNos.texto.map((paragrafo, i) => (
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={sobreNos.imagem}
                alt="Equipe Dexter Embreagens"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Missão e Visão */}
      <section id="missao" className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-4">
              Missão, Visão e <span className="text-dexter-red">Valores</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Missão */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-dexter-red/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-dexter-red" />
              </div>
              <h3 className="text-2xl font-condensed font-bold uppercase text-slate-900 mb-4">
                {missao.titulo}
              </h3>
              <p className="text-slate-600 leading-relaxed">{missao.texto}</p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-dexter-blue/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-dexter-blue" />
              </div>
              <h3 className="text-2xl font-condensed font-bold uppercase text-slate-900 mb-4">
                {visao.titulo}
              </h3>
              <p className="text-slate-600 leading-relaxed">{visao.texto}</p>
            </div>
          </div>

          {/* Valores */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Nossos Valores</h3>
            <div className="space-y-3">
              {valores.map((valor, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100">
                  <span className="w-8 h-8 rounded-full bg-dexter-red/10 flex items-center justify-center shrink-0 text-dexter-red font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 font-medium">{valor}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Política de Privacidade */}
      <section id="privacidade" className="py-20 bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-condensed font-bold uppercase text-slate-900 mb-10 text-center">
              {politicaPrivacidade.titulo}
            </h2>
            <div className="space-y-4">
              {politicaPrivacidade.secoes.map((secao, i) => (
                <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-900 hover:bg-slate-100 transition-colors">
                    {secao.titulo}
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {secao.texto}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
