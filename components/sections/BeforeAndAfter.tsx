import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function BeforeAndAfter() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-condensed font-bold uppercase text-slate-900 mb-4">
            Antes e <span className="text-dexter-red">Depois</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Veja a transformação real de uma embreagem que passou pelo nosso processo de remanufatura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Antes */}
          <div className="relative group w-full h-full">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md">
              <Image
                src="/images/plato-antes-v2.jpg"
                alt="Platô de embreagem antes da remanufatura — peça usada e desgastada"
                fill
                className="object-cover object-[center_70%] scale-[1.08]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-2 left-6 right-6 flex justify-center">
              <span className="inline-block bg-slate-900/90 text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm shadow-xl">
                ❌ Antes da Remanufatura
              </span>
            </div>
          </div>

          {/* Depois */}
          <div className="relative group w-full h-full">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-dexter-red/20 shadow-md ring-2 ring-dexter-red/10">
              <Image
                src="/images/plato-remanufaturado-novo.jpg"
                alt="Platô de embreagem depois da remanufatura — peça restaurada como nova"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-2 left-6 right-6 flex justify-center">
              <span className="inline-block bg-dexter-red text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl">
                ✅ Depois da Remanufatura
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-700 text-lg font-medium">
            Economia de até <span className="text-dexter-red font-bold">40%</span> em relação a uma peça nova, com a mesma qualidade e garantia de <span className="font-bold">06 meses</span>.
          </p>
        </div>
      </Container>
    </section>
  );
}
