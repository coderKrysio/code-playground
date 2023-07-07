"use client";
import Navbar from "@/components/Navbar";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Carousel />
    </main>
  );
}
