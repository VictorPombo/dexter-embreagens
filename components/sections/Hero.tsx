import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-[#0A1024]">
      {/* MOBILE: Imagem Original (Quadrada) */}
      <div className="relative w-full aspect-square md:hidden">
        <Image
          src="/images/banner-site.jpeg"
          alt="Dexter Embreagens"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DESKTOP: Imagem Horizontal Nova -> Img Nativo sem compressão */}
      <div className="relative w-full hidden md:block">
        <img
          src="/images/banner-desktop.jpg"
          alt="Dexter Embreagens"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
