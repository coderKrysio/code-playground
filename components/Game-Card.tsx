import { Github, Play } from "lucide-react";

export const GameCard = ({
    purple = false,
}: {
    purple?: boolean;
}) => {
    let color = purple ? "after:bg-[#bd00ff]" : "after:bg-[#0abdc6]"
    return (
        <div
            className={`after:w-[375px] after:h-[455px] ${color} after:blur-[2px] after:rounded-2xl after:rounded-es-[74px] flex items-center justify-center relative text-[#091833]`}
        >
            <div className="absolute w-[370px] h-[450px] rounded-2xl rounded-es-[72px] flex flex-col items-center gap-[15px] z-[1] overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-10">
                <div className="w-full h-[150px] bg-[#133e7c]"></div>

                <div className="w-full px-[30px] text-3xl font-bold">
                    This is the game heading
                </div>

                <div className="w-full px-[30px] leading-tight">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus ipsam, ratione architecto ab quasi, nesciunt hic
                    quibusdam fuga iste corporis recusandae vitae!
                </div>
                <div className="px-[30px] w-full mt-[5px] flex justify-between items-center">
                    <button className="py-[10px] px-6 rounded-es-[37px] rounded-lg flex items-center gap-[10px] font-medium group bg-[#091833] text-[#00b8ff]">
                        Play Now <Play width={18} height={18} className="group-hover:fill-[#00b8ff] transition-colors" />
                    </button>
                    <button className="py-[10px] px-6 rounded-lg font-medium flex items-center gap-[10px] group bg-[#091833] text-[#00b8ff]">
                        Github <Github width={18} height={18} className="group-hover:fill-[#00b8ff] transition-colors" />
                    </button>
                </div>
            </div>
        </div>
    );
};
