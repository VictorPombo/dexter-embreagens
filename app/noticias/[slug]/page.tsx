import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/** Gera rotas estáticas para cada artigo */
export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

/** Metadata dinâmica por artigo */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Notícia não encontrada" };
  return {
    title: `${article.title} | Dexter Embreagens`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511919169977";

  return (
    <>
      {/* Hero com imagem de capa */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          style={{ objectPosition: article.coverPosition || "center" }}
          priority
          sizes="100vw"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <Container className="relative z-10 h-full flex flex-col justify-end pb-12">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-medium w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Notícias
          </Link>
          <span className="inline-block bg-dexter-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded w-fit mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-white mb-4 max-w-3xl leading-tight drop-shadow-lg">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            {article.date}
          </div>
        </Container>
      </section>

      {/* Conteúdo do artigo */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Texto do artigo */}
            <div className="prose prose-lg prose-slate max-w-none">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-slate-700 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Galeria de fotos */}
            {article.gallery.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-condensed font-bold uppercase text-slate-900 mb-8">
                  Galeria de <span className="text-dexter-red">Fotos</span>
                </h2>
                <div className={`grid gap-4 ${article.gallery.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {article.gallery.map((photo, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden bg-slate-100 rounded-2xl border border-slate-200 shadow-md group ${
                        article.gallery.length === 1
                          ? "aspect-[4/3]"
                          : article.gallery.length % 2 === 0
                            ? "aspect-[4/3]"
                            : i === 0
                              ? "md:col-span-2 aspect-[16/9]"
                              : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        sizes={article.gallery.length === 1 ? "100vw" : (article.gallery.length % 2 !== 0 && i === 0) ? "100vw" : "50vw"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Gostou do conteúdo?
              </h3>
              <p className="text-slate-600 mb-6">
                Entre em contato conosco para saber mais sobre nossos produtos e serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, vim pelo site e gostaria de mais informações!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#25D366] text-white border-none hover:bg-[#20bd5a] gap-2 font-bold shadow-lg"
                  >
                    Falar no WhatsApp
                  </Button>
                </a>
                <Link href="/noticias">
                  <Button
                    size="lg"
                    className="bg-slate-900 text-white border-none hover:bg-slate-700 gap-2 font-bold"
                  >
                    Ver Mais Notícias
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
