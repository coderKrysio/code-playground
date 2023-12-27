import { HeroComponent } from "@/components/hero-component";
import { GameListing } from "@/components/game-listing";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#091833]">
            <div className="h-[50px] w-screen flex justify-start items-center p-5 fixed top-0 left-0 z-[10] bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
                <h1 className="text-2xl font-semibold tracking-wide text-[#00ff9f]">
                    Multi Jeux
                </h1>
            </div>
            <HeroComponent />
            <GameListing />
        </main>
    );
}
