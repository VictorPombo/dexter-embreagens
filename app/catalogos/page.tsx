import { Container } from "@/components/ui/Container";
import { VehicleSearch } from "@/components/sections/VehicleSearch";
import { Book, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogos | Dexter Embreagens",
  description: "Consulte nosso catálogo de aplicações por marca, modelo e código. Catálogo de produtos em breve.",
};

export default function CatalogosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <Container>
          <h1 className="text-4xl md:text-6xl font-condensed font-bold uppercase text-white mb-4">
            Nossos <span className="text-dexter-red">Catálogos</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Consulte aplicações por marca, modelo e código, ou baixe nosso catálogo completo de produtos.
          </p>
        </Container>
      </section>

      {/* Catálogo de Aplicações (busca existente) */}
      <VehicleSearch />

      {/* Catálogo de Produtos — placeholder */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-dexter-blue/10 flex items-center justify-center mx-auto mb-8">
              <Book className="w-10 h-10 text-dexter-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-condensed font-bold uppercase text-slate-900 mb-4">
              Catálogo de Produtos
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Nosso catálogo digital completo com todas as linhas de produtos está sendo preparado.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 font-bold">
              <Clock className="w-5 h-5" />
              Em breve
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
