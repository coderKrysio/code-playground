"use client";
import {
    Circle,
    Diamond,
    RectangleHorizontal,
    Squircle,
    Triangle,
    TriangleRight,
} from "lucide-react";
import { Bounce, Flip, Rotate } from "react-awesome-reveal";
import { BannerCarousel } from "./Banner-Carousel";

export const HeroComponent = () => {
    return (
        <section className="w-screen h-screen p-[140px] pb-[100px] relative z-[1] max-[1000px]:p-[90px] max-[750px]:p-[50px] max-[750px]:pt-[90px] max-[550px]:p-[30px] max-[550px]:pt-[90px]">
            <Rotate
                delay={400}
                direction="bottom-right"
                className="absolute top-[160px] left-[45px] max-[1000px]:left-[55px]"
            >
                <TriangleRight
                    width={"150px"}
                    height={"150px"}
                    strokeWidth={2.5}
                    color="#00b8ff"
                    className="z-[1] rotate-[160deg] blur-sm max-[1000px]:hidden"
                />
            </Rotate>

            <Rotate
                delay={400}
                direction="top-left"
                className="absolute top-[60px] left-[125px] max-[1000px]:left-[115px]"
            >
                <RectangleHorizontal
                    width={"150px"}
                    height={"150px"}
                    strokeWidth={2.5}
                    color="#3fff2d"
                    className="z-[1] rotate-[160deg] blur-sm max-[1000px]:hidden"
                />
            </Rotate>

            <Bounce className="absolute top-[60px] left-[30px] z-[1] max-[1000px]:left-[40px]">
                <Circle
                    width={"150px"}
                    height={"150px"}
                    strokeWidth={1}
                    color="#d600ff"
                    fill="#d600ff"
                    className="blur-sm max-[1000px]:hidden"
                />
            </Bounce>

            <div className="hero--container rounded-xl relative">
                <Bounce duration={600} triggerOnce className="w-full h-full">
                    <div className="h-[120%] w-[110%] relative left-[-5%] top-[-10%] bg-purple-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-10 px-[120px] py-[100px] z-[2] max-[1150px]:px-[80px] max-[1000px]:py-[80px] max-[1000px]:h-[110%] max-[1000px]:top-[-5%] max-[750px]:px-[40px] max-[750px]:py-[40px]">
                        <Flip
                            delay={700}
                            triggerOnce
                            direction="horizontal"
                            className="absolute bottom-[-30px] left-[-30px] max-[750px]:left-0"
                        >
                            <div className="font-extrabold text-6xl text-[#3fff2d] max-[750px]:text-4xl">
                                The Game Hub
                            </div>
                        </Flip>
                        <BannerCarousel />
                    </div>
                </Bounce>
            </div>

            <Rotate
                delay={400}
                direction="bottom-left"
                className="absolute bottom-[170px] right-[30px] z-[-1]"
            >
                <Triangle
                    width={"150px"}
                    height={"150px"}
                    strokeWidth={3}
                    color="#001eff"
                    className=" rotate-[-20deg] blur-sm max-[1000px]:hidden"
                />
            </Rotate>

            <Rotate
                delay={400}
                direction="bottom-right"
                className="absolute bottom-[20px] right-[130px] z-[-1]"
            >
                <Diamond
                    width={"150px"}
                    height={"150px"}
                    strokeWidth={3}
                    color="#feff6e"
                    className="rotate-[-20deg] blur-sm max-[1000px]:hidden"
                />
            </Rotate>

            <Bounce className="absolute bottom-[40px] right-[40px] z-[1]">
                <Squircle
                    width={"160px"}
                    height={"160px"}
                    strokeWidth={1}
                    color="#00ff9f"
                    fill="#00ff9f"
                    className="rotate-[30deg] blur-sm max-[1000px]:hidden"
                />
            </Bounce>
        </section>
    );
};
