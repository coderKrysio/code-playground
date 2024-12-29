import { Footer } from "@/components/Footer";
import { HeroComponent } from "@/components/Hero";
import { ListingGame } from "@/components/Listing-Games";
import { ListingSites } from "@/components/Listing-Sites";
import { Navbar } from "@/components/Navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 overflow-hidden bg-[#091833]">
            <Navbar />
            <ListingGame />
            <ListingSites />
            <Footer />
        </main>
    );
}
