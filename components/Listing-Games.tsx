"use client";
import { Gamepad2, Swords } from "lucide-react";
import { AttentionSeeker, Fade, Slide, Zoom } from "react-awesome-reveal";
import { Card } from "./Card";
import { games } from "@/utils/data";

export const ListingGame = () => {
    return (
        <section className="w-screen min-h-screen flex flex-col items-center justify-center p-[50px]">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <AttentionSeeker effect="flash">
                        <Gamepad2
                            width={"60px"}
                            height={"60px"}
                            color="#d600ff"
                            className="my-5"
                        />
                    </AttentionSeeker>
                </div>
                <div className="text-5xl font-semibold tracking-wide text-[#feff6e] flex items-center justify-center gap-4">
                    <Slide direction="left" triggerOnce>
                        <Swords
                            width={"60px"}
                            height={"60px"}
                            color="#00ff9f"
                            className="transform -scale-x-100"
                        />
                    </Slide>
                    <Zoom triggerOnce className="text-center">
                        <span>Latest Games</span>
                    </Zoom>
                    <Slide direction="right" triggerOnce>
                        <Swords
                            width={"60px"}
                            height={"60px"}
                            color="#00ff9f"
                        />
                    </Slide>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-[60px]">
                <Fade
                    reverse={false}
                    duration={700}
                    className="pt-[60px] px-3 relative w-fit"
                >
                    {games.map((game) => (
                        <Card
                            key={game.id}
                            cardInfo={game}
                            purple={game.id % 2 === 0}
                        />
                    ))}
                </Fade>
            </div>
        </section>
    );
};
