import { Container } from "@/components/ui/Container";
import { VehicleSearch } from "@/components/sections/VehicleSearch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogos | Dexter Embreagens",
  description: "Consulte nosso catálogo de aplicações por marca, modelo e código.",
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


    </>
  );
}
