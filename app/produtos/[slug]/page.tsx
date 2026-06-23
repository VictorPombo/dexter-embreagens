import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, getAllProductSlugs, getProductBySlug } from "@/lib/products";
import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/** Gera rotas estáticas para cada produto */
export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

/** Metadata dinâmica por produto */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: `${product.nome} | Dexter Embreagens`,
    description: product.descricaoCurta,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511919169977";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, gostaria de orçar: ${product.nome}`)}`;

  return (
    <>
      {/* Hero do Produto */}
      <section className="bg-slate-900 py-16 relative overflow-hidden">
        <Container className="relative z-10">
          <Link href="/produtos" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Produtos
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-white mb-4">
                {product.nome}
              </h1>
              <p className="text-slate-400 text-lg mb-8">
                {product.descricaoCurta}
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] text-white border-none hover:bg-[#20bd5a] gap-2 font-bold shadow-xl">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-slate-800">
              <Image
                src={product.imagem}
                alt={product.nome}
                fill
                className="object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Descrição completa */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-condensed font-bold uppercase text-slate-900 mb-6">
              Sobre o Produto
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              {product.descricaoCompleta}
            </p>

            {/* Especificações */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Especificações Técnicas</h3>
              <ul className="space-y-3">
                {product.especificacoes.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-dexter-red shrink-0 mt-0.5" />
                    <span className="text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aplicação */}
            <div className="bg-dexter-red/5 rounded-2xl p-8 border border-dexter-red/10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Aplicação</h3>
              <p className="text-slate-700">{product.aplicacao}</p>
            </div>

            {/* CTA final */}
            <div className="text-center mt-12">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-dexter-red text-white border-none hover:bg-red-700 gap-2 font-bold shadow-lg">
                  <MessageCircle className="w-5 h-5" />
                  Orçar {product.nome}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
