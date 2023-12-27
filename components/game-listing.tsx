"use client";
import { Gamepad2, Swords } from "lucide-react";
import { Card } from "./card";
import { AttentionSeeker, Slide, Zoom } from "react-awesome-reveal";

export const GameListing = () => {
    return (
        <section className="w-screen min-h-screen flex flex-col items-center justify-center p-[50px] pt-[90px]">
            <AttentionSeeker effect="flash">
                <Gamepad2
                    width={"60px"}
                    height={"60px"}
                    color="#d600ff"
                    className="my-5"
                />
            </AttentionSeeker>
            <div className="text-5xl font-semibold tracking-wide text-[#feff6e] flex items-center justify-center gap-4">
                <Slide direction="left" triggerOnce>
                    <Swords
                        width={"60px"}
                        height={"60px"}
                        color="#00ff9f"
                        className="transform -scale-x-100"
                    />
                </Slide>
                <Zoom triggerOnce>Latest Games</Zoom>
                <Slide direction="right" triggerOnce>
                    <Swords width={"60px"} height={"60px"} color="#00ff9f" />
                </Slide>
            </div>
            <div className="pt-[60px] px-3 relative flex flex-wrap items-center justify-center gap-[90px]">
                <Card cardcolor="0abdc6" />
                <Card cardcolor="bd00ff" />
                <Card cardcolor="0abdc6" />
                <Card cardcolor="bd00ff" />
                <Card cardcolor="0abdc6" />
                <Card cardcolor="bd00ff" />
                <Card cardcolor="0abdc6" />
                <Card cardcolor="bd00ff" />
            </div>
        </section>
    );
};
