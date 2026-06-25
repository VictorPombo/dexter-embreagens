import { Container } from "@/components/ui/Container";
import { PRODUCTS } from "@/lib/products";
import { Layers, Circle, GitFork, Shield, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | Dexter Embreagens",
  description: "Embreagens remanufaturadas, volantes, garfos, atuadores e mancais para caminhões, ônibus e guindastes.",
};

const ICON_MAP: Record<string, LucideIcon> = { Layers, Circle, GitFork, Shield };

export default function ProdutosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <Container>
          <h1 className="text-4xl md:text-6xl font-condensed font-bold uppercase text-white mb-4">
            Nossos <span className="text-dexter-red">Produtos</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Linha completa de peças remanufaturadas para embreagens de veículos pesados. Qualidade de peça nova com custo-benefício imbatível.
          </p>
        </Container>
      </section>

      {/* Grid de Produtos */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PRODUCTS.map((product) => {
              const IconComponent = ICON_MAP[product.icon] || Layers;
              return (
                <Link
                  key={product.slug}
                  href={`/produtos/${product.slug}`}
                  className="group bg-white rounded-2xl border-2 border-slate-100 p-8 flex flex-col hover:border-dexter-red/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-dexter-red/10 group-hover:border-dexter-red/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-slate-400 group-hover:text-dexter-red transition-colors" />
                  </div>
                  <h2 className="text-xl font-condensed font-bold uppercase text-slate-900 mb-3 group-hover:text-dexter-red transition-colors">
                    {product.nome}
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 flex-1">
                    {product.descricaoCurta}
                  </p>
                  <div className="flex items-center gap-2 text-dexter-blue font-bold text-sm group-hover:text-dexter-red transition-colors">
                    Ver detalhes
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
