export const GameContainer = () => {
    return (
        <div
        className="h-[350px] w-[250px] flex flex-col gap-[20px] items-center p-2"
        >
            <div
            className="h-[300px] w-[225px] bg-yellow-300 rounded-lg"
            >Game Poster</div>

            <p
            className="text-left text-lg w-full"
            >Game Title</p>
        </div>
    )
}