import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Differentials } from "@/components/sections/Differentials";
import { VehicleSearch } from "@/components/sections/VehicleSearch";
import { AIAssistant } from "@/components/sections/AIAssistant";
import { Products } from "@/components/sections/Products";
import { B2B } from "@/components/sections/B2B";
import { Blog } from "@/components/sections/Blog";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Differentials />
      <VehicleSearch />
      <AIAssistant />
      
      <div id="produtos">
        <Products />
      </div>
      
      <div id="oficinas">
        <B2B />
      </div>
      
      <Blog />
      
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
