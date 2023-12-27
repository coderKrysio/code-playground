import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const BannerCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="w-full h-full grid items-center text-white">
            <Carousel
                arrows={false}
                infinite
                autoPlay
                transitionDuration={200}
                responsive={responsive}
                className="w-full h-full rounded-md"
            >
                <div className="w-full h-full bg-red-400">Item 1</div>
                <div className="w-full h-full bg-green-400">Item 2</div>
                <div className="w-full h-full bg-blue-400">Item 3</div>
                <div className="w-full h-full bg-yellow-400">Item 4</div>
            </Carousel>
        </div>
    );
};
