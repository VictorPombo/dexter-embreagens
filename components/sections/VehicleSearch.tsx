
"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Search, ChevronRight, MessageCircle, Truck } from "lucide-react";

// Dados do catálogo completo das aplicações
const VEICULOS = [
  { id: 1, modelo: "Ford Cargo 4532", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 2, modelo: "Ford Cargo 1722", peca: "Kit Embreagem", codigo: "7620/8142" },
  { id: 3, modelo: "Ford Cargo 2632e", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 4, modelo: "Ford Cargo 2626", peca: "Kit Embreagem", codigo: "7035/8062" },
  { id: 5, modelo: "Ford Cargo 2628e", peca: "Kit Embreagem", codigo: "7035/8062" },
  { id: 6, modelo: "Ford Cargo 2622 eletrônico", peca: "Kit Embreagem", codigo: "7035/8062/Ponta do piloto 4" },
  { id: 7, modelo: "Ford Cargo 2623", peca: "Kit Embreagem", codigo: "4232/4332" },
  { id: 8, modelo: "Ford Panda 395mm", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 9, modelo: "Ford Cargo 1932", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 10, modelo: "Ford Panda 2629", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 11, modelo: "Ford Cargo 2628", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 12, modelo: "Ford 2628 380mm", peca: "Kit Embreagem", codigo: "7035/8062" },
  { id: 13, modelo: "Ford Eurocargo", peca: "Kit Embreagem", codigo: "7035/8062" },
  { id: 14, modelo: "Ford 1317/1319/1719 macaquinho", peca: "Kit Embreagem", codigo: "7620/8142" },
  { id: 15, modelo: "Ford Cargo 1317E 350mm", peca: "Kit Embreagem", codigo: "7481/8649" },
  { id: 16, modelo: "Ford Cargo 1317", peca: "Kit Embreagem", codigo: "7281/8649" },
  { id: 17, modelo: "Ford F100", peca: "Kit Embreagem", codigo: "12 polegadas" },
  { id: 18, modelo: "Ford cargo moderno 430mm", peca: "Kit Embreagem", codigo: "7273/8386" },
  { id: 19, modelo: "Mercedes 1620 (estria fina)", peca: "Kit Embreagem", codigo: "7512/8338" },
  { id: 20, modelo: "Mercedes 1620 (estria grossa )", peca: "Kit Embreagem", codigo: "7513/8335  + rolamento chapéu chinês" },
  { id: 21, modelo: "Mercedes 1935", peca: "Kit Embreagem", codigo: "7273/8491 (simples)" },
  { id: 22, modelo: "Mercedes 1935", peca: "Kit Embreagem", codigo: "7717/8381/8382" },
  { id: 23, modelo: "Mercedes Axor 2035", peca: "Kit Embreagem", codigo: "7497/8553/Piloto 1" },
  { id: 24, modelo: "Mercedes Axor 2544 semi automático", peca: "Kit Embreagem", codigo: "7597/8553" },
  { id: 25, modelo: "Mercedes Axor  2726", peca: "Kit Embreagem", codigo: "7497/8553" },
  { id: 26, modelo: "Mercedes Axor 2544", peca: "Kit Embreagem", codigo: "7497/8553" },
  { id: 27, modelo: "Mercedes Atron 1719", peca: "Kit Embreagem", codigo: "7597/8766" },
  { id: 28, modelo: "Mercedes Atron 2729", peca: "Kit Embreagem", codigo: "7497/8553" },
  { id: 29, modelo: "Mercedes Benz 1630", peca: "Kit Embreagem", codigo: "7181/8273" },
  { id: 30, modelo: "Mercedes 2644 dupla automático", peca: "Kit Embreagem", codigo: "7738/5582/5051" },
  { id: 31, modelo: "Mercedes Actross 2651 dupla", peca: "Kit Embreagem", codigo: "7738/5582/5051" },
  { id: 32, modelo: "Mercedes 709", peca: "Kit Embreagem", codigo: "7202/8346" },
  { id: 33, modelo: "Mercedes Atego 1719", peca: "Kit Embreagem", codigo: "7597/8766/Piloto 3" },
  { id: 34, modelo: "Mercedes Atego 2426", peca: "Kit Embreagem", codigo: "7597/8766" },
  { id: 35, modelo: "Mercedes Atego 2730", peca: "Kit Embreagem", codigo: "7497/8553" },
  { id: 36, modelo: "Mercedes Accelo 1016", peca: "Kit Embreagem", codigo: "7343/8523" },
  { id: 37, modelo: "Mercedes 1113", peca: "Kit Embreagem", codigo: "7106/8346" },
  { id: 38, modelo: "Mercedes 1313", peca: "Kit Embreagem", codigo: "7171/8391" },
  { id: 39, modelo: "Mercedes 1418", peca: "Kit Embreagem", codigo: "7192/8326" },
  { id: 40, modelo: "Mercedes 1634", peca: "Kit Embreagem", codigo: "7497/8705 (estria grossa)" },
  { id: 41, modelo: "Mercedes 8-150", peca: "Kit Embreagem", codigo: "7142/8585 rolamento á R$180,00" },
  { id: 42, modelo: "Mercedes 608", peca: "Kit Embreagem", codigo: "7125/8408" },
  { id: 43, modelo: "Mercedes Acelo 815", peca: "Kit Embreagem", codigo: "7343/8523" },
  { id: 44, modelo: "Ônibus Mercedes", peca: "Kit Embreagem", codigo: "7597/8766" },
  { id: 45, modelo: "Ônibus Mercedes", peca: "Kit Embreagem", codigo: "7158/8273" },
  { id: 46, modelo: "Guindaste,Mercedes 1630/1828", peca: "Kit Embreagem", codigo: "" },
  { id: 47, modelo: "Mercedes Work 16.220", peca: "Kit Embreagem", codigo: "7620/8142" },
  { id: 48, modelo: "Volvo New FH 540", peca: "Kit Embreagem", codigo: "7713/8612" },
  { id: 49, modelo: "Volvo 340", peca: "Kit Embreagem", codigo: "7273/8491" },
  { id: 50, modelo: "Volvo B450R", peca: "Kit Embreagem", codigo: "7713/8698" },
  { id: 51, modelo: "Volvo NH 380", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 52, modelo: "Volvo D13", peca: "Kit Embreagem", codigo: "7273/8698" },
  { id: 53, modelo: "Volvo NL10", peca: "Kit Embreagem", codigo: "7273/8491" },
  { id: 54, modelo: "Volvo NL 340", peca: "Kit Embreagem", codigo: "7273/84913" },
  { id: 55, modelo: "Volvo B11 Modelo B450", peca: "Kit Embreagem", codigo: "7713/8612/Piloto 7" },
  { id: 56, modelo: "Volvo FH520 Dupla", peca: "Kit Embreagem", codigo: "7741/5584/5583" },
  { id: 57, modelo: "Volvo FH I-Shift 460", peca: "Kit Embreagem", codigo: "7713/8612/Piloto 7" },
  { id: 58, modelo: "Volvo VM 210", peca: "Kit Embreagem", codigo: "7620/8142" },
  { id: 59, modelo: "Volvo FH 440", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 60, modelo: "Volvo VM 330", peca: "Kit Embreagem", codigo: "VM/VM" },
  { id: 61, modelo: "New FH 540", peca: "Kit Embreagem", codigo: "7713/8612" },
  { id: 62, modelo: "Volvo VM 270", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 63, modelo: "Scania G429 S5", peca: "Kit Embreagem", codigo: "7511-v/8801-v" },
  { id: 64, modelo: "Scania P250", peca: "Kit Embreagem", codigo: "7511-v/8801-v" },
  { id: 65, modelo: "Scania P340", peca: "Kit Embreagem", codigo: "7511/8801" },
  { id: 66, modelo: "Scania P310 ou P360", peca: "Kit Embreagem", codigo: "tomada de força" },
  { id: 67, modelo: "Scania P93 série 4 BT", peca: "Kit Embreagem", codigo: "tomada de força" },
  { id: 68, modelo: "Scania P94 série 4 BT 8x4", peca: "Kit Embreagem", codigo: "tomada de força" },
  { id: 69, modelo: "Scania pesado", peca: "Kit Embreagem", codigo: "7511/8801" },
  { id: 70, modelo: "Scania 113", peca: "Kit Embreagem", codigo: "7201/8306" },
  { id: 71, modelo: "Scania 112", peca: "Kit Embreagem", codigo: "7201/8306" },
  { id: 72, modelo: "Scania 110", peca: "Kit Embreagem", codigo: "7152/8331" },
  { id: 73, modelo: "Internacional", peca: "Kit Embreagem", codigo: "7181 ou 7158/8273" },
  { id: 74, modelo: "V.W 17.260", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 75, modelo: "V.W 17.230 V", peca: "Kit Embreagem", codigo: "Tronic 7597/8597" },
  { id: 76, modelo: "V.W 26.260", peca: "Kit Embreagem", codigo: "4232/4232 ou 7035/8062" },
  { id: 77, modelo: "VW 26.260 MAN", peca: "Kit Embreagem", codigo: "7343/8523" },
  { id: 78, modelo: "V.W 26.289", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 79, modelo: "V.W 26.280", peca: "Kit Embreagem", codigo: "7597/85" },
  { id: 80, modelo: "V.W 17.230", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 81, modelo: "V.W 25.250", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 82, modelo: "VW 25.380", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 83, modelo: "V.W 24.320", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 84, modelo: "V.W 24.280", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 85, modelo: "V.W 24.250", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 86, modelo: "VW 23-210", peca: "Kit Embreagem", codigo: "7035/8062" },
  { id: 87, modelo: "V.W 31.260 Man", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 88, modelo: "V.W 31.320", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 89, modelo: "V.W 31.330", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 90, modelo: "VW 15.190 man", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 91, modelo: "VW 15.160", peca: "Kit Embreagem", codigo: "7142/8585" },
  { id: 92, modelo: "V.W 15.180", peca: "Kit Embreagem", codigo: "7481/8649" },
  { id: 93, modelo: "V.W 17.190", peca: "Kit Embreagem", codigo: "7597/8597" },
  { id: 94, modelo: "VW 13.180", peca: "Kit Embreagem", codigo: "7343/8523 ou 7620/8142" },
  { id: 95, modelo: "VW 11.160 Express", peca: "Kit Embreagem", codigo: "7343/8523" },
  { id: 96, modelo: "V.W 9.160", peca: "Kit Embreagem", codigo: "7142/8585" },
  { id: 97, modelo: "V.W 9.106", peca: "Kit Embreagem", codigo: "7142/8585" },
  { id: 98, modelo: "V.W 8.160", peca: "Kit Embreagem", codigo: "7142/8585" },
  { id: 99, modelo: "VW 5.150", peca: "Kit Embreagem", codigo: "7142/8585" },
  { id: 100, modelo: "VW 860", peca: "Kit Embreagem", codigo: "13 polegadas" },
  { id: 101, modelo: "V.W MA 17", peca: "Kit Embreagem", codigo: "4232/4232" },
  { id: 102, modelo: "V.W MA 12", peca: "Kit Embreagem", codigo: "7620/8142" },
  { id: 103, modelo: "MAN TGX 29.440", peca: "Kit Embreagem", codigo: "7273/8705" },
  { id: 104, modelo: "Iveco Stralis", peca: "Kit Embreagem", codigo: "7273/8705/ Piloto 4 ou 6" },
  { id: 105, modelo: "Iveco Tector", peca: "Kit Embreagem", codigo: "7036/8063" },
  { id: 106, modelo: "DAF Grande", peca: "Kit Embreagem", codigo: "7273/8612" },
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
      v => v.modelo.toLowerCase().includes(term) || v.codigo.toLowerCase().includes(term) || v.peca.toLowerCase().includes(term)
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
                placeholder="Ex: FH 460, Actros, Cargo ou código da peça..."
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
                            {item.modelo}
                          </span>
                          <span className="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
                            Cód: {item.codigo}
                          </span>
                        </div>
                        
                        <h4 className="font-bold text-xl text-slate-900 mb-1">{item.peca}</h4>
                        <p className="text-slate-600 font-medium text-sm mb-6">Modelo: {item.modelo}</p>
                      </div>
                      
                      <a 
                        href={getWaLink(item.peca, item.modelo, item.codigo)} 
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
