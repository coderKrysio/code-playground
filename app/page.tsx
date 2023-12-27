import { HeroComponent } from "@/components/Hero";
import { ListingGame } from "@/components/Listing-Games";
import { Navbar } from "@/components/Navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#091833]">
            <Navbar />
            <HeroComponent />
            <ListingGame />
        </main>
    );
}
