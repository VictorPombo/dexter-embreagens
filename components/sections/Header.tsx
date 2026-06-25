"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, Clock, MapPin, Lock, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export function Header() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511919169977";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  const toggleMobileSub = (key: string) => {
    setMobileSubOpen((prev) => (prev === key ? null : key));
  };

  return (
    <header className="w-full bg-white relative z-50 shadow-sm">
      {/* Linha vermelha fina no topo */}
      <div className="h-1 w-full bg-dexter-red" />
      {/* 2. Middle Logo & Info Bar (Desktop) */}
      <div className="py-4 border-b border-slate-100 hidden md:block">
        <Container className="flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo-sem-fundo.png" 
              alt="Dexter Embreagens" 
              width={320} 
              height={110} 
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

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
                <p className="text-[12px] text-slate-400">Seg-Sex: 7:30h às 16:30h<br/>Sáb: 8:00h às 15:00h</p>
              </div>
              <Clock className="w-8 h-8 text-slate-400 stroke-1" />
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Logo Bar */}
      <div className="py-3 border-b border-slate-100 md:hidden">
        <Container className="flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo-sem-fundo.png" 
              alt="Dexter Embreagens" 
              width={220} 
              height={80} 
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </Container>
      </div>

      {/* 3. Desktop Navigation Bar */}
      <div className="bg-[#F2F4F8] border-b border-slate-200 shadow-sm sticky top-0 z-40 hidden md:block">
        <Container>
          <nav className="flex justify-center">
            <ul className="flex items-center gap-6 lg:gap-10 whitespace-nowrap text-sm font-semibold text-slate-700">
              <li>
                <Link href="/" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  HOME
                </Link>
              </li>

              {/* A DEXTER — Dropdown */}
              <li className="relative group">
                <div className="flex items-center gap-1 py-4 border-b-2 border-transparent group-hover:border-dexter-red group-hover:text-dexter-red transition-all cursor-pointer">
                  A DEXTER <ChevronDown className="w-4 h-4" />
                </div>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2 min-w-[220px]">
                    <Link href="/a-dexter" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-dexter-red transition-colors">
                      Sobre Nós
                    </Link>
                    <Link href="/a-dexter#missao" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-dexter-red transition-colors">
                      Missão e Visão
                    </Link>
                    <Link href="/a-dexter#privacidade" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-dexter-red transition-colors">
                      Política de Privacidade
                    </Link>
                  </div>
                </div>
              </li>

              {/* PRODUTOS — Dropdown */}
              <li className="relative group">
                <div className="flex items-center gap-1 py-4 border-b-2 border-transparent group-hover:border-dexter-red group-hover:text-dexter-red transition-all cursor-pointer">
                  <Link href="/produtos" className="flex items-center gap-1">
                    PRODUTOS <ChevronDown className="w-4 h-4" />
                  </Link>
                </div>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2 min-w-[260px]">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/produtos/${p.slug}`}
                        className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-dexter-red transition-colors"
                      >
                        {p.nome}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link href="/servicos" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  SERVIÇOS
                </Link>
              </li>
              <li>
                <Link href="/catalogos" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  CATÁLOGOS
                </Link>
              </li>


              <li>
                <Link href="/noticias" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  NOTÍCIAS
                </Link>
              </li>
              <li>
                <Link href="/contato" className="block py-4 border-b-2 border-transparent hover:border-dexter-red hover:text-dexter-red transition-all">
                  CONTATO
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>

      {/* 4. Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[65px] bg-white z-50 overflow-y-auto md:hidden animate-in slide-in-from-top-2">
          <nav className="px-4 py-4">
            <ul className="space-y-1">
              <MobileLink href="/" label="HOME" onClick={() => setMobileOpen(false)} />

              {/* A Dexter — accordion */}
              <li>
                <button type="button" onClick={() => toggleMobileSub("dexter")} className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors">
                  A DEXTER
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubOpen === "dexter" ? "rotate-180" : ""}`} />
                </button>
                {mobileSubOpen === "dexter" && (
                  <ul className="pl-6 space-y-1 pb-2">
                    <MobileLink href="/a-dexter" label="Sobre Nós" onClick={() => setMobileOpen(false)} />
                    <MobileLink href="/a-dexter#missao" label="Missão e Visão" onClick={() => setMobileOpen(false)} />
                    <MobileLink href="/a-dexter#privacidade" label="Política de Privacidade" onClick={() => setMobileOpen(false)} />
                  </ul>
                )}
              </li>

              {/* Produtos — accordion */}
              <li>
                <button type="button" onClick={() => toggleMobileSub("produtos")} className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors">
                  PRODUTOS
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubOpen === "produtos" ? "rotate-180" : ""}`} />
                </button>
                {mobileSubOpen === "produtos" && (
                  <ul className="pl-6 space-y-1 pb-2">
                    {PRODUCTS.map((p) => (
                      <MobileLink key={p.slug} href={`/produtos/${p.slug}`} label={p.nome} onClick={() => setMobileOpen(false)} />
                    ))}
                  </ul>
                )}
              </li>

              <MobileLink href="/servicos" label="SERVIÇOS" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/catalogos" label="CATÁLOGOS" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/noticias" label="NOTÍCIAS" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/contato" label="CONTATO" onClick={() => setMobileOpen(false)} />
            </ul>

            {/* Info rápida no mobile */}
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3 px-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Vendas: (11) 91916-9977</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex: 7:30h às 16:30h</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Rua Flor da Lua, 30 — SP</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Link do menu mobile */
function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block px-4 py-3 font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
      >
        {label}
      </Link>
    </li>
  );
}
