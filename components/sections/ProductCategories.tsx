import { Container } from "@/components/ui/Container";
import { PRODUCTS } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Mapa de imagens por slug do produto */
const IMAGE_MAP: Record<string, string> = {
  embreagens: "/images/produto-embreagens.png",
  volantes: "/images/produto-volantes.png",
  garfos: "/images/produto-garfos.png",
  mancais: "/images/produto-mancais.png",
};

/** Produtos em destaque na Home (4 primeiros) */
const FEATURED = PRODUCTS.filter((p) =>
  ["embreagens", "volantes", "garfos", "mancais"].includes(p.slug)
);

export function ProductCategories() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <Container>
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-4">
            Nossos <span className="text-dexter-red">Produtos</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Especialistas em embreagens para veículos pesados. Confira nossas linhas de produtos remanufaturados.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {FEATURED.map((product) => {
            const imageSrc = IMAGE_MAP[product.slug] || "/images/produto-embreagens.png";
            return (
              <Link
                key={product.slug}
                href={`/produtos/${product.slug}`}
                className="group relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden flex flex-col hover:border-dexter-red/30 hover:shadow-xl hover:shadow-dexter-red/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Imagem do produto */}
                <div className="relative w-full aspect-square bg-slate-900 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={product.nome}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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

        {/* CTA para ver todos */}
        <div className="text-center mt-10">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-dexter-red hover:text-dexter-red transition-colors"
          >
            Ver Todos os Produtos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
