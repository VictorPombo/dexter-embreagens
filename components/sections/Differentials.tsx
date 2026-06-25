import { Container } from "@/components/ui/Container";
import { ShieldCheck, Truck, Wrench, Clock } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "+20 Anos de Mercado",
    description: "Tradição e confiança em cada peça.",
    color: "bg-dexter-red/10 text-dexter-red",
  },
  {
    icon: Wrench,
    title: "Remanufatura",
    description: "Recuperação com qualidade de nova.",
    color: "bg-dexter-blue/10 text-dexter-blue",
  },
  {
    icon: ShieldCheck,
    title: "Garantia",
    description: "06 meses de garantia em nossas peças.",
    color: "bg-dexter-red/10 text-dexter-red",
  },
  {
    icon: Truck,
    title: "Pronta Entrega",
    description: "Agilidade para seu caminhão não parar.",
    color: "bg-dexter-blue/10 text-dexter-blue",
  },
];

export function Differentials() {
  return (
    <section className="bg-white border-y border-slate-200 py-12 shadow-sm relative z-20 -mt-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center`}>
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
