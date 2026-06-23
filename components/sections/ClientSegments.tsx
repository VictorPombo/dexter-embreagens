import { Container } from "@/components/ui/Container";
import { Truck, Building2, Wrench, SquareParking, FlaskConical, Package, Construction } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SEGMENTOS_CLIENTES } from "@/lib/institutional";

/** Mapa de ícones por nome */
const ICON_MAP: Record<string, LucideIcon> = {
  Truck,
  Building2,
  Wrench,
  SquareParking,
  FlaskConical,
  Package,
  Crane: Construction,
};

export function ClientSegments() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-dexter-red/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-white mb-4">
            Segmentos <span className="text-dexter-red">Atendidos</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Atendemos exclusivamente o segmento de veículos pesados. Conheça os setores que confiam na Dexter.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {SEGMENTOS_CLIENTES.map((seg) => {
            const IconComponent = ICON_MAP[seg.icon] || Truck;
            return (
              <div
                key={seg.id}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center hover:border-dexter-red/30 hover:bg-slate-800 transition-all w-[calc(50%-0.5rem)] sm:w-[calc(25%-1.125rem)]"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center mb-4 group-hover:bg-dexter-red/10 transition-colors">
                  <IconComponent className="w-7 h-7 text-slate-400 group-hover:text-dexter-red transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  {seg.nome}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
