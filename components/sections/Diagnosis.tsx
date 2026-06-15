"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, Wrench, Settings, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

const DIAGNOSTICS = [
  {
    id: "patina",
    sintoma: "Embreagem patina (Sem força)",
    causa: "Disco de embreagem gasto ou sujo de óleo.",
    pecaIndicada: "Conjunto Completo (Disco e Platô)",
    icon: AlertTriangle
  },
  {
    id: "duro",
    sintoma: "Pedal muito duro e pesado",
    causa: "Problema de pressão no platô ou falha no atuador.",
    pecaIndicada: "Platô / Atuador Hidráulico",
    icon: Wrench
  },
  {
    id: "barulho",
    sintoma: "Barulho estranho ao pisar",
    causa: "Falta de lubrificação ou desgaste extremo no mancal.",
    pecaIndicada: "Mancal e Rolamento",
    icon: Settings
  },
  {
    id: "trepida",
    sintoma: "Trepidação forte ao arrancar",
    causa: "Disco de embreagem empenado ou volante irregular.",
    pecaIndicada: "Disco de Embreagem",
    icon: ShieldCheck
  }
];

export function Diagnosis() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";

  return (
    <section id="diagnostico" className="py-24 bg-[#E2231A] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#E2231A] to-transparent"></div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-bold tracking-wide uppercase mb-6">
              <AlertTriangle className="w-4 h-4" />
              Auto Diagnóstico
            </div>
            <h2 className="text-4xl md:text-5xl font-condensed font-bold uppercase leading-tight mb-6">
              Seu caminhão <br/> parou?
            </h2>
            <p className="text-white/80 text-lg font-medium mb-8">
              Identifique rapidamente o problema através do sintoma e saiba qual peça você vai precisar substituir para voltar a rodar.
            </p>
            
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#E2231A] hover:bg-slate-100 border-none shadow-xl gap-2 font-bold w-full sm:w-auto">
                Falar com Especialista agora
                <ChevronRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {DIAGNOSTICS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-2xl shadow-black/10 border-b-4 border-slate-200 hover:border-[#E2231A] transition-all group flex flex-col justify-between h-full hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mb-6 group-hover:bg-[#E2231A]/10 group-hover:text-[#E2231A] transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.sintoma}</h3>
                  <p className="text-sm text-slate-600 mb-6 font-medium">{item.causa}</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Peça Indicada</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#E2231A]">{item.pecaIndicada}</span>
                    <a href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20meu%20caminh%C3%A3o%20apresenta%20*${item.sintoma}*.%20Gostaria%20de%20or%C3%A7ar%20*${item.pecaIndicada}*.`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E2231A]/10 flex items-center justify-center text-[#E2231A] hover:bg-[#E2231A] hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </Container>
    </section>
  );
}
