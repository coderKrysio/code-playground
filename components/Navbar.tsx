import { Black_Ops_One } from "next/font/google";

const gameFont = Black_Ops_One({
    subsets: ["latin"],
    weight: "400",
});

const Navbar = () => {
    return (
        <div className="h-[60px] w-screen flex justify-start items-center p-5 fixed top-0 left-0">
            <h1 className={`${gameFont.className} text-3xl text-[#2cb67d]`}>
                JS Games
            </h1>
        </div>
    );
};

export default Navbar;