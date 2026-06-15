"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const ARTICLES = [
  {
    id: 1,
    title: "A Importância da Manutenção Preventiva em Embreagens Pesadas",
    excerpt: "Saiba como evitar que o seu caminhão fique parado na estrada por problemas que poderiam ser identificados nas revisões periódicas.",
    date: "12 Março 2024",
    image: "/images/blog_manutencao.png",
    category: "Dicas de Manutenção"
  },
  {
    id: 2,
    title: "Sinais de que a Embreagem do seu Caminhão Está Patinando",
    excerpt: "Motor acelerando mas a velocidade não acompanha? Entenda os primeiros sinais de desgaste e quando é a hora certa de encostar na oficina.",
    date: "28 Fevereiro 2024",
    image: "/images/blog_estrada.png",
    category: "Diagnóstico"
  },
  {
    id: 3,
    title: "Por que Escolher Embreagens Remanufaturadas de Fábrica?",
    excerpt: "Descubra como o processo industrial de remanufatura garante qualidade de peça nova com um custo-benefício insuperável para a sua frota.",
    date: "15 Janeiro 2024",
    image: "/images/blog_fabrica.png",
    category: "Indústria"
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
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
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
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-dexter-blue hover:text-dexter-red transition-colors">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center', width: '100%' }}>
          <button className="px-8 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-dexter-red hover:text-dexter-red transition-colors">
            Ver Todos os Artigos
          </button>
        </div>
      </Container>
    </section>
  );
}
