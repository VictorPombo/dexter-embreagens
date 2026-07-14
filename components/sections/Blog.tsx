"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ARTICLES = [
  {
    id: 4,
    title: "Dexter Embreagens na Fenatran 2024",
    excerpt: "A Dexter marcou presença na Fenatran 2024, a maior feira de transporte e logística da América Latina. Visitamos os estandes das principais montadoras e reforçamos nosso compromisso com o setor de pesados.",
    date: "Novembro 2024",
    image: "/images/fenatran-2024-capa.jpg",
    category: "Eventos",
  },
  {
    id: 5,
    title: "Dexter Embreagens patrocina o Lendas Camp",
    excerpt: "Fomos patrocinadores do Lendas Camp, projeto social que reúne crianças com estrelas do futebol brasileiro como Craque Neto, Velloso, Muller e outros. Orgulho de apoiar essa iniciativa.",
    date: "2024",
    image: "/images/lendas-camp-capa.jpg",
    category: "Patrocínio",
  }
];

export function Blog() {
  return (
    <section id="noticias" className="py-24 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-4">
            Notícias e <span className="text-dexter-red">Artigos</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Acompanhe nossas dicas técnicas, informações sobre o mercado de pesados e novidades da Dexter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {ARTICLES.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group flex flex-col hover:-translate-y-2 transition-transform duration-300 w-full">
              <div className="relative h-48 md:h-60 w-full overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover group-hover:scale-105 transition-transform duration-700 ${article.id === 5 ? 'object-top' : 'object-center'}`}
                />
                <div className="absolute top-4 left-4 bg-dexter-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-dexter-red transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Link href="/" className="inline-flex items-center gap-2 font-bold text-dexter-blue hover:text-dexter-red transition-colors">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center', width: '100%' }}>
          <Link href="/">
            <button className="px-8 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-dexter-red hover:text-dexter-red transition-colors">
              Ver Todos os Artigos
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
