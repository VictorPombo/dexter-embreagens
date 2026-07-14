import { Hero } from "@/components/sections/Hero";
import { TruckBrands } from "@/components/sections/TruckBrands";
import { Differentials } from "@/components/sections/Differentials";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { ClientSegments } from "@/components/sections/ClientSegments";
import { Blog } from "@/components/sections/Blog";
import { Location } from "@/components/sections/Location";
import { BeforeAndAfter } from "@/components/sections/BeforeAndAfter";

export default function Home() {
  return (
    <>
      <Hero />
      <TruckBrands />
      <Differentials />
      <ProductCategories />
      <ClientSegments />
      <BeforeAndAfter />
      <Blog />
      <Location />
    </>
  );
}
