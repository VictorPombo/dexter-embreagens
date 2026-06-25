import { Hero } from "@/components/sections/Hero";
import { Differentials } from "@/components/sections/Differentials";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { ClientSegments } from "@/components/sections/ClientSegments";
import { Blog } from "@/components/sections/Blog";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Differentials />
      <ProductCategories />
      <ClientSegments />
      <Blog />
      <Location />
    </>
  );
}
