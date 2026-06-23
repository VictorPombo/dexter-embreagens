import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Search } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
  const waLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento!`;

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-slate-900">
      {/* Background Truck Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_truck_bg.png" 
          alt="Caminhão pesado" 
          fill 
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Dark overlay to make left text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      {/* The Red Angled Block on the Right */}
      <div 
        className="absolute bottom-0 right-0 top-0 w-full md:w-[55%] bg-[#E2231A] z-10 hidden md:block opacity-90"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {/* Decorative inner lines or gradients inside the red block can go here */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay"></div>
      </div>

      <Container className="relative z-20 h-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text and Buttons */}
        <div className="max-w-2xl space-y-8 text-white md:pr-12 pt-12 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#E2231A]"></span>
            Qualidade Dexter
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-condensed font-bold uppercase leading-[1.1] tracking-tight">
            Embreagens <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Novas
            </span> <br/>
            Comercial
          </h1>
          
          <p className="text-lg text-white/80 max-w-lg font-medium">
            Especialistas em embreagens remanufaturadas para veículos pesados. 
            A durabilidade e a confiança que a estrada exige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#E2231A] hover:bg-red-700 text-white border-none shadow-lg">
                <MessageCircle className="w-5 h-5" />
                Saiba Mais
              </Button>
            </a>
            <a href="#consulta">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-transparent text-white border border-white/30 hover:bg-white/10 shadow-sm">
                <Search className="w-5 h-5" />
                Consultar Aplicação
              </Button>
            </a>
          </div>
        </div>

        {/* Right Side: Product Image overlapping the red block */}
        <div className="hidden md:flex flex-1 relative h-full items-center justify-center">
          <div className="relative w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
            <Image 
              src="/images/clutch_part.png" 
              alt="Platô de Embreagem Dexter" 
              fill 
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
