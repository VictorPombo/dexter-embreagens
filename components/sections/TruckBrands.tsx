import { Truck, Hexagon } from "lucide-react";
import { Container } from "@/components/ui/Container";

const brands = [
  "AGRALE",
  "DAF",
  "Ford",
  "Volkswagen",
  "Mercedes-Benz",
  "MAN",
  "SINOTRUK",
  "SCANIA",
  "VOLVO"
];

export function TruckBrands() {
  return (
    <section className="w-full bg-[#050B14] py-8 border-b border-slate-800">
      <Container>
        <div className="flex flex-col gap-6">
          
          {/* Cabeçalho (Ícone + Título + Linha) */}
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center text-yellow-500">
              <Hexagon className="w-12 h-12 stroke-[1.5]" />
              <Truck className="w-5 h-5 absolute" />
            </div>
            
            <div className="flex-1 flex items-center gap-4">
              <h3 className="text-yellow-500 font-bold uppercase tracking-wider text-lg shrink-0">
                Linhas de Caminhões
              </h3>
              {/* Linha amarela decorativa que estica */}
              <div className="h-px bg-yellow-500/50 w-full max-w-[200px]"></div>
              <div className="h-px bg-slate-800 w-full flex-1"></div>
            </div>
          </div>

          {/* Carrossel de Marcas */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center justify-between min-w-max gap-8 px-4">
              {brands.map((brand, i) => (
                <div key={i} className="flex items-center gap-8">
                  {/* Marca (usando texto estilizado temporário até ter as imagens das logos) */}
                  <div className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
                    <span className="text-2xl font-black text-white font-condensed tracking-tighter">
                      {brand}
                    </span>
                  </div>
                  
                  {/* Divisor vertical (exceto no último) */}
                  {i < brands.length - 1 && (
                    <div className="w-px h-10 bg-slate-800"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
