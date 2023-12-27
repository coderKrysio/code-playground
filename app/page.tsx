import { Navbar } from "@/components/navbar";
import { HeroComponent } from "@/components/hero-component";
import { GameListing } from "@/components/game-listing";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#091833]">
            <Navbar />
            <HeroComponent />
            <GameListing />
        </main>
    );
}
