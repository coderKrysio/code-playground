import { Carousel } from "react-responsive-carousel"
import GameContainer from "./GameContainer"

const CategoryPanel = () => {
    return (
        <div className="w-[850px] flex flex-col justify-center items-center p-3">
            <h2
            className="text-xl border-b-2 border-[#94a1b2] w-full p-2"
            >Category Panel</h2>
            
            <div
            className="w-full p-3 flex gap-[30px] overflow-x-scroll"
            >
                <GameContainer />
                <GameContainer />
                <GameContainer />
                <GameContainer />
                <GameContainer />    
            </div>
        </div>
    )
}

export default CategoryPanel