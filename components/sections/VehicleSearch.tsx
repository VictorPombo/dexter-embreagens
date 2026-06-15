"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Search, ChevronRight, MessageCircle, Truck } from "lucide-react";

// Mock data based on the master prompt
const VEICULOS = [
  { id: 1, marca: "Volvo", modelo: "FH 460 I-Shift", peca: "Conjunto de Embreagem 430mm", codigo: "DX-430-VOLVO" },
  { id: 2, marca: "Ford", modelo: "Cargo 2628/2629", peca: "Kit Embreagem Completo", codigo: "DX-395-FORD" },
  { id: 3, marca: "Mercedes-Benz", modelo: "Actros 2651", peca: "Conjunto Embreagem Automatizada", codigo: "DX-430-MB" },
  { id: 4, marca: "Mercedes-Benz", modelo: "Atego 2426", peca: "Kit Embreagem 395mm", codigo: "DX-395-MB" },
];

export function VehicleSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(VEICULOS);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (!term) {
      setResults(VEICULOS);
      return;
    }

    const filtered = VEICULOS.filter(
      v => v.marca.toLowerCase().includes(term) || v.modelo.toLowerCase().includes(term) || v.codigo.toLowerCase().includes(term)
    );
    setResults(filtered);
  };

  const getWaLink = (peca: string, modelo: string, codigo: string) => {
    const text = `Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20a%20pe%C3%A7a%20*${peca}*%20(C%C3%B3d:%20${codigo})%20para%20o%20ve%C3%ADculo%20*${modelo}*.`;
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <section id="consulta" className="py-24 bg-[#F8FAFC] relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-slate-900"></div>
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Area inside the dark block */}
          <div className="text-center mb-10 pt-4">
            <h2 className="text-4xl md:text-5xl font-condensed font-bold uppercase text-white mb-4">
              Catálogo de Aplicações
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Digite a marca, modelo do seu caminhão ou código original para encontrar a embreagem exata.
            </p>
          </div>

          {/* Search Interface Container */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100">
            
            {/* Search Input */}
            <div className="relative mb-10 group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-7 w-7 text-slate-400 group-focus-within:text-dexter-red transition-colors" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Ex: Volvo FH, Scania R440 ou código da peça..."
                className="block w-full pl-16 pr-6 py-6 text-xl bg-slate-50 border-2 border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-dexter-red transition-colors shadow-inner"
              />
              <div className="absolute inset-y-2 right-2">
                <button className="h-full px-6 bg-slate-900 text-white rounded-xl font-semibold hover:bg-dexter-red transition-colors flex items-center gap-2">
                  Buscar
                </button>
              </div>
            </div>

            {/* Results Grid */}
            <div>
              <div className="flex items-center justify-between mb-6 px-2">
                <h3 className="text-slate-800 font-bold flex items-center gap-2">
                  <Truck className="w-5 h-5 text-dexter-red" />
                  Resultados Encontrados ({results.length})
                </h3>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((item) => (
                    <div 
                      key={item.id} 
                      className="group border-2 border-slate-100 hover:border-dexter-red/30 rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg hover:shadow-dexter-red/5 transition-all bg-white relative overflow-hidden"
                    >
                      {/* Subtle accent line */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-slate-100 group-hover:bg-dexter-red transition-colors"></div>
                      
                      <div className="pl-2">
                        <div className="flex justify-between items-start mb-3">
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase tracking-wider">
                            {item.marca}
                          </span>
                          <span className="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
                            Cód: {item.codigo}
                          </span>
                        </div>
                        
                        <h4 className="font-bold text-xl text-slate-900 mb-1">{item.modelo}</h4>
                        <p className="text-slate-600 font-medium text-sm mb-6">{item.peca}</p>
                      </div>
                      
                      <a 
                        href={getWaLink(item.peca, `${item.marca} ${item.modelo}`, item.codigo)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full block pl-2"
                      >
                        <Button 
                          variant="primary" 
                          className="w-full gap-2 bg-slate-100 text-slate-800 border-none hover:bg-dexter-red hover:text-white group-hover:bg-dexter-red group-hover:text-white transition-all shadow-none"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Orçar Peça
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                  <Truck className="w-12 h-12 text-slate-300 mx-auto mb-4 opacity-50" />
                  <h4 className="text-xl font-bold text-slate-700 mb-2">Nenhum veículo encontrado</h4>
                  <p className="text-slate-500 mb-6 max-w-md mx-auto">
                    Não encontrou o que procurava para a busca "{searchTerm}"? Fale direto com nossos consultores.
                  </p>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="bg-dexter-red border-none">
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
