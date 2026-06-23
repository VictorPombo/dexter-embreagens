import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden text-slate-300">
      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-dexter-blue to-transparent opacity-50" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-sem-fundo.png"
                alt="Dexter Embreagens"
                width={200}
                height={80}
                className="h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              A força que o seu caminhão precisa. Especialistas em embreagens remanufaturadas para caminhões, ônibus e guindastes com mais de 20 anos de mercado.
            </p>
            {/* Redes sociais — só Instagram */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/dexterembreagens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-dexter-red hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/produtos" className="hover:text-dexter-blue transition-colors">Produtos</Link></li>
              <li><Link href="/servicos" className="hover:text-dexter-blue transition-colors">Serviços</Link></li>
              <li><Link href="/catalogos" className="hover:text-dexter-blue transition-colors">Catálogos</Link></li>
              <li><Link href="/contato" className="hover:text-dexter-blue transition-colors">Contato</Link></li>
              <li><Link href="/a-dexter" className="hover:text-dexter-blue transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contatos</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Fixo: (11) 2704-8290</li>
              <li>Vendas: (11) 91916-9977</li>
              <li>Administrativo: (11) 91963-0006</li>
              <li className="text-slate-500 italic">[INSERIR E-MAIL]</li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Dexter Embreagens. Todos os direitos reservados.</p>
          <p>Plataforma por Victor Pombo</p>
        </div>
      </Container>
    </footer>
  );
}
