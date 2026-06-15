import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden text-slate-300">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-dexter-blue to-transparent opacity-50"></div>
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
              A força que o seu caminhão precisa. Especialistas em embreagens remanufaturadas para veículos pesados com mais de 20 anos de mercado.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/dexterembreagens" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-dexter-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com/dexterembreagens" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-dexter-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#consulta" className="hover:text-dexter-blue transition-colors">Consultar Aplicação</a></li>
              <li><a href="#produtos" className="hover:text-dexter-blue transition-colors">Produtos</a></li>
              <li><a href="#b2b" className="hover:text-dexter-blue transition-colors">Para Oficinas e Frotas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contatos</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Fixo: (11) 2704-8290</li>
              <li>Vendas: (11) 91916-9977</li>
              <li>Administrativo: (11) 91963-0006</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Dexter Embreagens. Todos os direitos reservados.</p>
          <p>Plataforma por Victor Pombo</p>
        </div>
      </Container>
    </footer>
  );
}
