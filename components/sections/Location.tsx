import { Container } from "@/components/ui/Container";
import { MapPin, Clock } from "lucide-react";

export function Location() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-6">
              Onde Estamos
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Venha conhecer nossa estrutura ou retirar sua peça presencialmente. Temos amplo espaço para estacionar seu caminhão.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm">
                <div className="mt-1 w-12 h-12 shrink-0 rounded-full bg-dexter-red/10 flex items-center justify-center text-dexter-red">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Endereço</h4>
                  <p className="text-slate-600">
                    Rua Flor da Lua, n°30<br />
                    Altos da Vila Prudente<br />
                    São Paulo/SP, CEP 03978-710
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm">
                <div className="mt-1 w-12 h-12 shrink-0 rounded-full bg-dexter-blue/10 flex items-center justify-center text-dexter-blue">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Horário de Atendimento</h4>
                  <p className="text-slate-600">
                    Segunda a Sexta: 09:00 às 17:00<br />
                    Sábado: 09:00 às 17:00<br />
                    <span className="text-sm italic">Almoço: 12:00 às 13:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Botão Uber */}
            <a
              href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=-23.6062118&dropoff[longitude]=-46.5413159&dropoff[nickname]=Dexter%20Embreagens&dropoff[formatted_address]=Rua%20Flor%20da%20Lua%2C%2030%20-%20Altos%20da%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%2FSP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg mt-4"
            >
              🚚 Solicitar Retirada via Uber
            </a>
          </div>
          
          <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.126487140889!2d-46.54131589999999!3d-23.6062118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d04cc63eeef%3A0xc619ebdfd5236ed6!2sR.%20Flor%20da%20Lua%2C%2030%20-%20Jardim%20Independencia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003253-150!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Mapa de localização Dexter Embreagens"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
