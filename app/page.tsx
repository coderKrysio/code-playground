"use client";

import CarouselContainer from "@/components/CarouselContainer";
import CategoryPanel from "@/components/CategoryPanel";
import Navbar from "@/components/Navbar";

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
