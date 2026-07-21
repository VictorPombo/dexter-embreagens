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
      <section 
        className="relative py-20 bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/fachada-dexter-editada.png')" }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-condensed font-bold uppercase text-white mb-4 drop-shadow-md">
            Nossos <span className="text-dexter-red">Catálogos</span>
          </h1>
        </Container>
      </section>

      {/* Catálogo de Aplicações (busca existente) */}
      <VehicleSearch />


    </>
  );
}
