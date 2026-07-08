import { Container } from "@/components/ui/Container";
import { Truck } from "lucide-react";

export function TruckLines() {
  const brands = [
    { name: "AGRALE", color: "text-red-600", font: "font-black italic" },
    { name: "DAF", color: "text-blue-100", font: "font-black" },
    { name: "Ford", color: "text-blue-500", font: "font-bold italic" },
    { name: "Volkswagen", color: "text-white", font: "font-normal" },
    { name: "Mercedes-Benz", color: "text-gray-300", font: "font-serif" },
    { name: "MAN", color: "text-white", font: "font-black uppercase" },
    { name: "SINOTRUK", color: "text-white", font: "font-bold" },
    { name: "SCANIA", color: "text-blue-200", font: "font-black uppercase" },
    { name: "VOLVO", color: "text-white", font: "font-black uppercase" },
  ];

  return (
    <section className="w-full bg-[#070b1a] py-6 border-b border-blue-900/30">
      <Container>
        {/* Title Area */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex items-center justify-center w-12 h-12">
            {/* Hexagon shape outline */}
            <div className="absolute inset-0 border-2 border-[#D4FF00] rounded-sm transform rotate-45" />
            <Truck className="w-6 h-6 text-[#D4FF00] relative z-10" />
          </div>
          <h2 className="text-[#D4FF00] font-bold text-lg md:text-xl uppercase tracking-wider">
            Linhas de Caminhões
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#D4FF00]/50 to-transparent ml-4" />
        </div>

        {/* Logos Area */}
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-2 md:gap-x-4 lg:justify-between">
          {brands.map((brand, idx) => (
            <div key={brand.name} className="flex items-center">
              <div className="flex flex-col items-center justify-center group cursor-pointer hover:scale-105 transition-transform px-2 md:px-4">
                <span className={`text-xl md:text-2xl ${brand.font} ${brand.color} drop-shadow-md`}>
                  {brand.name}
                </span>
              </div>
              
              {/* Separator Line */}
              {idx < brands.length - 1 && (
                <div className="hidden lg:block w-px h-8 bg-blue-800/50 mx-2" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
