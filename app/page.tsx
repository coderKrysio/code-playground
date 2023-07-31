import { Navbar } from "@/components/navbar";
import { CarouselContainer } from "@/components/carousel-container";
import { CategoryPanel } from "@/components/category-panel";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <CarouselContainer />
      <CategoryPanel />
      <CategoryPanel />
    </main>
  );
}
