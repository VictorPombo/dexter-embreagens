import { Container } from "@/components/ui/Container";
import { Phone, Mail, Clock, MapPin, Lock, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511919169977";

  return (
    <header className="w-full bg-white relative z-50 shadow-sm">
      {/* 1. Top Red Bar */}
      <div className="bg-[#E2231A] text-white py-1">
        <Container className="flex justify-between items-center text-xs font-semibold">
          <div className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors">
            <Lock className="w-3 h-3" />
            <span>Área Restrita</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/dexterembreagens" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Language Flags placeholder */}
            <div className="flex gap-1 border-l border-white/20 pl-4 ml-2">
              <span className="text-[10px] bg-green-600 px-1 rounded">BR</span>
              <span className="text-[10px] bg-blue-800 px-1 rounded opacity-50">US</span>
              <span className="text-[10px] bg-red-600 px-1 rounded opacity-50">ES</span>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Middle Logo & Info Bar */}
      <div className="py-4 border-b border-slate-100 hidden md:block">
        <Container className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image 
              src="/logo-sem-fundo.png" 
              alt="Dexter Embreagens" 
              width={260} 
              height={90} 
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Info blocks */}
          <div className="flex gap-8 items-center text-right">
            <div className="flex items-center gap-3">
              <div>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Onde Estamos</h4>
                <p className="text-[12px] text-slate-400">Rua Flor da Lua, 30<br/>São Paulo/SP</p>
              </div>
              <MapPin className="w-8 h-8 text-slate-400 stroke-1" />
            </div>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-8">
              <div>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Fale Conosco</h4>
                <p className="text-[12px] text-slate-400">Vendas: (11) 91916-9977<br/>Fixo: (11) 2704-8290</p>
              </div>
              <Phone className="w-8 h-8 text-slate-400 stroke-1" />
            </div>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-8">
              <div>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Atendimento</h4>
                <p className="text-[12px] text-slate-400">Seg-Sex - 09h às 17h<br/>Sáb - 09h às 17h</p>
              </div>
              <Clock className="w-8 h-8 text-slate-400 stroke-1" />
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Logo Bar */}
      <div className="py-4 border-b border-slate-100 md:hidden">
        <Container className="flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo-sem-fundo.png" 
              alt="Dexter Embreagens" 
              width={180} 
              height={65} 
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>
        </Container>
      </div>

      {/* 3. Bottom Navigation Bar */}
      <div className="bg-[#F2F4F8] border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <Container>
          <nav className="flex justify-center md:justify-center overflow-x-auto">
            <ul className="flex items-center gap-6 md:gap-12 whitespace-nowrap text-sm font-semibold text-slate-700">
              <li>
                <Link href="/" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  HOME
                </Link>
              </li>
              <li className="relative group cursor-pointer">
                <div className="flex items-center gap-1 py-4 border-b-2 border-transparent group-hover:border-dexter-red group-hover:text-dexter-red transition-all">
                  A DEXTER <ChevronDown className="w-4 h-4" />
                </div>
              </li>
              <li>
                <Link href="#consulta" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  CATÁLOGO
                </Link>
              </li>
              <li>
                <Link href="#assistente-ia" className="flex items-center gap-1.5 py-4 border-b-2 border-transparent hover:border-dexter-blue hover:text-dexter-blue transition-all">
                  ASSISTENTE
                  <span className="text-[10px] bg-dexter-blue text-white px-1.5 py-0.5 rounded-full font-bold leading-none">IA</span>
                </Link>
              </li>
              <li className="relative group cursor-pointer">
                <Link href="#produtos" className="flex items-center gap-1 py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  PRODUTOS <ChevronDown className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="#b2b" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  DISTRIBUIDORES
                </Link>
              </li>
              <li>
                <Link href="#contato" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  CONTATO
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
