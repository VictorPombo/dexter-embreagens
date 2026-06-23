import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/products";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Dexter Embreagens",
  description: "Serviço de remanufatura de embreagens para veículos pesados com garantia completa.",
};

export default function ServicosPage() {
  const servico = SERVICES[0]; // Remanufatura
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511919169977";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de saber sobre o serviço de remanufatura.")}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-condensed font-bold uppercase text-white mb-4">
                Serviço de <span className="text-dexter-red">Remanufatura</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8">
                {servico.descricaoCompleta}
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] text-white border-none hover:bg-[#20bd5a] gap-2 font-bold shadow-xl">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Remanufatura
                </Button>
              </a>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-slate-800">
              <Image
                src={servico.imagem}
                alt={servico.nome}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Etapas do Processo */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-4">
              Como <span className="text-dexter-red">Funciona</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              O processo de remanufatura segue 6 etapas rigorosas para garantir qualidade de peça nova.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {servico.etapas.map((etapa, i) => (
              <div key={i} className="flex items-start gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-dexter-red/20 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-dexter-red text-white flex items-center justify-center shrink-0 font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{etapa.titulo}</h3>
                  <p className="text-slate-600">{etapa.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-dexter-red text-white border-none hover:bg-red-700 gap-2 font-bold shadow-lg">
                Solicitar Orçamento de Remanufatura
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
