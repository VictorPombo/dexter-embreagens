import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Users, ArrowRight } from "lucide-react";
import Image from "next/image";

export function B2B() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
  const waLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20condi%C3%A7%C3%B5es%20para%20oficinas%20e%20frotas.`;

  return (
    <section id="b2b" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dexter-blue/5 to-transparent pointer-events-none z-10"></div>
      
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/truck_fleet.png" 
          alt="Frota de caminhões" 
          fill 
          className="object-cover opacity-10 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <Container className="relative z-20">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl shadow-slate-200 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dexter-blue text-white mb-6 shadow-lg shadow-dexter-blue/20">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-4">
              Condições para Oficinas e Frotas
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Tem uma oficina mecânica ou uma transportadora? Oferecemos faturamento exclusivo, tabela diferenciada e suporte técnico dedicado para parceiros.
            </p>
            
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="gap-2 shadow-md">
                Quero Condições B2B
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center justify-center h-full">
              <h4 className="text-4xl font-condensed font-bold text-dexter-blue mb-2">30+</h4>
              <p className="text-sm text-slate-600 font-medium">Oficinas parceiras</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center justify-center h-full">
              <h4 className="text-4xl font-condensed font-bold text-dexter-blue mb-2">12x</h4>
              <p className="text-sm text-slate-600 font-medium">Condições de pago</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center justify-center h-full">
              <h4 className="text-4xl font-condensed font-bold text-dexter-blue mb-2">24h</h4>
              <p className="text-sm text-slate-600 font-medium">Entrega rápida</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex flex-col items-center text-center justify-center h-full">
              <h4 className="text-4xl font-condensed font-bold text-dexter-blue mb-2">100%</h4>
              <p className="text-sm text-slate-600 font-medium">Garantia em peças</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
