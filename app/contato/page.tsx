import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Dexter Embreagens",
  description: "Entre em contato com a Dexter Embreagens por WhatsApp, telefone ou visite nosso endereço.",
};

export default function ContatoPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511919169977";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de mais informações.")}`;
  const uberLink = "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=-23.6062118&dropoff[longitude]=-46.5413159&dropoff[nickname]=Dexter%20Embreagens&dropoff[formatted_address]=Rua%20Flor%20da%20Lua%2C%2030%20-%20Altos%20da%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%2FSP";

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <Container>
          <h1 className="text-4xl md:text-6xl font-condensed font-bold uppercase text-white mb-4">
            Fale <span className="text-dexter-red">Conosco</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Estamos prontos para atender você. Entre em contato pelo canal mais conveniente.
          </p>
        </Container>
      </section>

      {/* Conteúdo */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Coluna esquerda: info de contato */}
            <div className="space-y-6">
              <h2 className="text-2xl font-condensed font-bold uppercase text-slate-900 mb-8">
                Central de Atendimento
              </h2>

              {/* WhatsApp */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#25D366] transition-colors">WhatsApp</h4>
                  <p className="text-slate-600">(11) 91916-9977</p>
                </div>
              </a>

              {/* Telefones */}
              <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-dexter-blue/10 text-dexter-blue flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefones</h4>
                  <p className="text-slate-600 text-sm">
                    Fixo: (11) 2704-8290<br />
                    Vendas: (11) 91916-9977<br />
                    Administrativo: (11) 91963-0006
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-dexter-red/10 text-dexter-red flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-500 italic text-sm">[INSERIR E-MAIL]</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-dexter-red/10 text-dexter-red flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Endereço</h4>
                  <p className="text-slate-600 text-sm">
                    Rua Flor da Lua, n°30<br />
                    Altos da Vila Prudente<br />
                    São Paulo/SP, CEP 03978-710
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-dexter-blue/10 text-dexter-blue flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Horário</h4>
                  <p className="text-slate-600 text-sm">
                    Seg-Sex: 09:00 às 17:00<br />
                    Sábado: 09:00 às 17:00
                  </p>
                </div>
              </div>

              {/* Botão Uber */}
              <a
                href={uberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
              >
                🚚 Solicitar Retirada via Uber
              </a>

              {/* Instagram */}
              <div className="pt-4">
                <h4 className="font-bold text-slate-900 mb-3">Redes Sociais</h4>
                <a
                  href="https://instagram.com/dexterembreagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  @dexterembreagens
                </a>
              </div>
            </div>

            {/* Coluna direita: mapa */}
            <div className="space-y-6">
              <h2 className="text-2xl font-condensed font-bold uppercase text-slate-900 mb-8">
                Nossa Localização
              </h2>
              <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.126487140889!2d-46.54131589999999!3d-23.6062118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d04cc63eeef%3A0xc619ebdfd5236ed6!2sR.%20Flor%20da%20Lua%2C%2030%20-%20Jardim%20Independencia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003253-150!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localização Dexter Embreagens"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
