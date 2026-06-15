import { Container } from "@/components/ui/Container";
import { ShieldCheck, Truck, Wrench, Clock } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "+20 Anos de Mercado",
    description: "Tradição e confiança em cada peça.",
  },
  {
    icon: Wrench,
    title: "Remanufatura Premium",
    description: "Recuperação com qualidade de nova.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia Total",
    description: "Cobertura completa contra defeitos.",
  },
  {
    icon: Truck,
    title: "Pronta Entrega",
    description: "Agilidade para seu caminhão não parar.",
  },
];

export function Differentials() {
  return (
    <section className="bg-white border-y border-slate-200 py-12 shadow-sm relative z-20 -mt-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-dexter-blue/10 flex items-center justify-center text-dexter-blue">
                <item.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-slate-900 font-condensed font-bold text-xl uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
