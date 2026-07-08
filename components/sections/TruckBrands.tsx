"use client";

import { Container } from "@/components/ui/Container";
import { Truck } from "lucide-react";

/**
 * Seção "Linhas de Caminhões"
 * Usando SVGs inline coloridos (oficiais) para evitar bloqueadores de anúncios (AdBlock)
 * e garantir que as logos sempre carreguem.
 */

function MercedesLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16" fill="none">
      <circle cx="50" cy="50" r="46" stroke="#E2E8F0" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" stroke="#E2E8F0" strokeWidth="1.5" />
      <path d="M50 12 L50 50 L16 70" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 50 L84 70" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function VolvoLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16" fill="none">
      <circle cx="44" cy="52" r="28" stroke="#E2E8F0" strokeWidth="4" fill="#003057" />
      <line x1="66" y1="30" x2="82" y2="14" stroke="#E2E8F0" strokeWidth="4" />
      <line x1="82" y1="14" x2="72" y2="14" stroke="#E2E8F0" strokeWidth="4" />
      <line x1="82" y1="14" x2="82" y2="24" stroke="#E2E8F0" strokeWidth="4" />
      <rect x="24" y="44" width="40" height="16" fill="#003057" />
      <text x="44" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">VOLVO</text>
    </svg>
  );
}

function ScaniaLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16" fill="none">
      {/* Blue shield */}
      <path d="M50 5 L90 22 L90 60 Q90 88 50 98 Q10 88 10 60 L10 22 Z" fill="#001E62" />
      {/* Silver border */}
      <path d="M50 5 L90 22 L90 60 Q90 88 50 98 Q10 88 10 60 L10 22 Z" stroke="#E2E8F0" strokeWidth="3" />
      {/* Red Griffin */}
      <path d="M42 32 Q38 28 42 24 Q48 20 54 24 L58 28 Q62 26 64 30 L62 36 Q66 38 64 42 L58 44 L60 50 Q58 54 52 52 L48 48 Q42 50 40 46 L42 42 Q38 40 40 36 Z" fill="#D31245" />
      {/* Crown (gold) */}
      <path d="M44 22 L48 16 L52 22 L56 16 L54 24 Z" fill="#FFC72C" />
      <text x="50" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">SCANIA</text>
    </svg>
  );
}

function VWLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16" fill="none">
      <circle cx="50" cy="50" r="44" fill="#001E50" />
      <circle cx="50" cy="50" r="42" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M28 28 L42 72 L50 52 L58 72 L72 28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M38 28 L50 52 L62 28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function FordLogo() {
  return (
    <svg viewBox="0 0 140 80" className="w-16 h-10 md:w-24 md:h-14" fill="none">
      <ellipse cx="70" cy="40" rx="65" ry="35" fill="#003478" />
      <ellipse cx="70" cy="40" rx="62" ry="32" stroke="#FFFFFF" strokeWidth="2" />
      <text x="70" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="34" fontWeight="400" fontFamily="Georgia, serif" fontStyle="italic">Ford</text>
    </svg>
  );
}

function IvecoLogo() {
  return (
    <svg viewBox="0 0 140 50" className="w-16 h-8 md:w-24 md:h-10" fill="none">
      <text x="70" y="38" textAnchor="middle" fill="#003B75" fontSize="38" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="4">IVECO</text>
    </svg>
  );
}

function MANLogo() {
  return (
    <svg viewBox="0 0 120 50" className="w-14 h-8 md:w-20 md:h-12" fill="none">
      <path d="M40 18 Q60 5 80 18" stroke="#E2E8F0" strokeWidth="4" fill="none" />
      <text x="60" y="44" textAnchor="middle" fill="#E2E8F0" fontSize="36" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="6">MAN</text>
    </svg>
  );
}

function DAFLogo() {
  return (
    <svg viewBox="0 0 120 50" className="w-14 h-8 md:w-20 md:h-12" fill="none">
      <text x="60" y="38" textAnchor="middle" fill="#005B9F" fontSize="36" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="5">DAF</text>
      <line x1="20" y1="46" x2="100" y2="46" stroke="#E3000F" strokeWidth="4" />
    </svg>
  );
}

function AgraleLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16" fill="none">
      <path d="M50 10 L85 85 L15 85 Z" stroke="#E3000F" strokeWidth="12" strokeLinejoin="round" fill="none" />
      <path d="M35 55 L65 55" stroke="#E3000F" strokeWidth="12" strokeLinecap="square" />
      <text x="50" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="2">AGRALE</text>
    </svg>
  );
}

function SinotrukLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16" fill="none">
      <path d="M50 10 L90 80 L10 80 Z" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" fill="none" />
      <path d="M50 10 L50 80" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M30 45 L70 45" stroke="#FFFFFF" strokeWidth="6" />
      <text x="50" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">SINOTRUK</text>
    </svg>
  );
}

const brands = [
  { name: "Agrale", Logo: AgraleLogo },
  { name: "DAF", Logo: DAFLogo },
  { name: "Ford", Logo: FordLogo },
  { name: "Volkswagen", Logo: VWLogo },
  { name: "Mercedes-Benz", Logo: MercedesLogo },
  { name: "MAN", Logo: MANLogo },
  { name: "Sinotruk", Logo: SinotrukLogo },
  { name: "Scania", Logo: ScaniaLogo },
  { name: "Volvo", Logo: VolvoLogo },
  { name: "Iveco", Logo: IvecoLogo },
];

export function TruckBrands() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A1024] to-[#0E1730] py-6 md:py-10 overflow-hidden">
      {/* Textura sutil de fundo */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/hero_truck_clean.png')] bg-right bg-no-repeat bg-cover pointer-events-none" />

      <Container className="relative z-10">
        {/* Header: ícone + título + linha */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg border border-yellow-400/50 flex items-center justify-center">
            <Truck className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="font-condensed font-bold text-sm md:text-base uppercase tracking-[0.2em] text-yellow-400">
            Linhas de Caminhões
          </h2>
          {/* Linha decorativa */}
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent ml-2" />
        </div>

        {/* Grid de logos — separados por linhas verticais sutis */}
        <div className="flex items-center justify-between gap-4 md:gap-0 overflow-x-auto scrollbar-hide pb-4">
          {brands.map((brand, index) => (
            <div key={brand.name} className="flex items-center">
              <div className="group flex flex-col items-center gap-3 px-4 md:px-6 cursor-default flex-shrink-0">
                {/* Logo oficial colorida */}
                <div className="relative transition-transform duration-300 group-hover:scale-110 flex items-center justify-center drop-shadow-md">
                  <brand.Logo />
                </div>
                {/* Nome da Marca */}
                <span className="text-[9px] md:text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest whitespace-nowrap mt-1">
                  {brand.name}
                </span>
              </div>
              {/* Separador vertical */}
              {index < brands.length - 1 && (
                <div className="w-px h-12 bg-blue-500/30 flex-shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
