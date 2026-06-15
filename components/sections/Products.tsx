import { Container } from "@/components/ui/Container";
import { Settings, RefreshCw, Layers, Shield } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Conjunto de Embreagem",
    description: "Kit completo com disco e platô remanufaturados com componentes de primeira linha.",
    icon: Layers,
    image: "/images/clutch_part.png",
  },
  {
    title: "Serviço de Remanufatura",
    description: "Traga sua peça usada. Fazemos a remanufatura com garantia de peça nova.",
    icon: RefreshCw,
    image: "/images/reman_mechanic.png",
  },
  {
    title: "Atuadores e Cilindros",
    description: "Linha completa de cilindros mestre, auxiliar e atuadores hidráulicos.",
    icon: Settings,
    image: "/images/atuador_cilindro.png",
  },
  {
    title: "Mancal e Rolamento",
    description: "Rolamentos de alta durabilidade para acionamento suave e seguro.",
    icon: Shield,
    image: "/images/mancal_rolamento.png",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-4">
            Produtos & Serviços
          </h2>
          <p className="text-slate-600 text-lg">
            Qualidade exigida pelas montadoras, com o custo-benefício que a sua operação precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row bg-white shadow-md hover:shadow-xl hover:border-dexter-blue/30 transition-all duration-300 h-full">
              <div className="relative h-48 md:h-auto md:w-2/5 overflow-hidden bg-slate-100">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/40 md:via-white/10 to-transparent"></div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center relative z-10 bg-white">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-dexter-blue mb-4 shadow-sm group-hover:bg-dexter-blue group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-condensed font-bold uppercase text-slate-900 mb-3 group-hover:text-dexter-blue transition-colors">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
