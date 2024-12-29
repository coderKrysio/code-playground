import { Github, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
    name: string;
    image: string;
    github: string;
    link: string;
}

export const Card = ({
    purple = false,
    cardInfo,
}: {
    purple?: boolean;
    cardInfo: CardProps;
}) => {
    let color = purple ? "after:bg-[#bd00ff]" : "after:bg-[#0abdc6]";
    return (
        <div
            className={`after:w-[350px] after:h-[392px] ${color} after:blur-[2px] after:rounded-xl flex items-center justify-center relative text-[#091833]`}
        >
            <div className="absolute w-[350px] h-full rounded-xl flex flex-col items-center justify-between gap-4 z-10 p-5 overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-10">
                <div className="w-full h-[200px] bg-[#133e7c] rounded-md overflow-hidden">
                    <Image
                        src={cardInfo.image}
                        alt={cardInfo.name}
                        width={310}
                        height={200}
                        priority
                    />
                </div>

                <div
                    className={`w-full text-3xl font-bold ${
                        purple && "text-white"
                    }`}
                >
                    {cardInfo.name}
                </div>

                <div className="w-full mt-auto flex justify-between items-center">
                    <Link
                        href={cardInfo.link}
                        className="py-[10px] px-6 rounded-lg flex items-center gap-[10px] font-medium group bg-[#091833] text-[#00b8ff]"
                    >
                        Play Now{" "}
                        <Play
                            width={18}
                            height={18}
                            className="group-hover:fill-[#00b8ff] transition-colors"
                        />
                    </Link>
                    <Link
                        href={cardInfo.github}
                        className="py-[10px] px-6 rounded-lg font-medium flex items-center gap-[10px] group bg-[#091833] text-[#00b8ff]"
                    >
                        Github{" "}
                        <Github
                            width={18}
                            height={18}
                            className="group-hover:fill-[#00b8ff] transition-colors"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};
