import { Container } from "@/components/ui/Container";
import { PRODUCTS } from "@/lib/products";
import { Layers, Circle, GitFork, Shield, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {PRODUCTS.map((product) => {
              return (
                <Link
                  key={product.slug}
                  href={`/produtos/${product.slug}`}
                  className="group relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden flex flex-col hover:border-dexter-red/30 hover:shadow-xl hover:shadow-dexter-red/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Imagem do produto */}
                  <div 
                    className="relative w-full aspect-square overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1e3a8a 50%, #dc2626 50%)' }}
                  >
                    <Image
                      src={product.imagem}
                      alt={product.nome}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Nome + Seta */}
                  <div className="p-4 md:p-5 flex items-center justify-between">
                    <h3 className="font-condensed font-bold text-sm md:text-base uppercase text-slate-900 group-hover:text-dexter-red transition-colors leading-tight">
                      {product.nome}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-dexter-red group-hover:text-white transition-colors text-slate-400 shrink-0 ml-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
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
