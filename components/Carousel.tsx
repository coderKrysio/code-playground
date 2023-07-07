import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const CarouselContainer = () => {
    return (
        <div 
        className="border-2 border-white w-[750px] p-5 h-[700px]"
        >
            <Carousel 
            className="rounded-2xl overflow-hidden"            
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            >
                <div className="flex items-center justify-center">
                    <Image src={"https://plus.unsplash.com/premium_photo-1682320427001-e7a016510197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVpZ2h0fGVufDB8fDB8fHww&w=1000&q=80"} alt="image1" width={725} height={600}/>
                </div>

                <div>
                    <Image src={"https://plus.unsplash.com/premium_photo-1682320427001-e7a016510197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVpZ2h0fGVufDB8fDB8fHww&w=1000&q=80"} alt="image2" width={725} height={600} />
                </div>

                <div>
                    <Image src={"https://plus.unsplash.com/premium_photo-1682320427001-e7a016510197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVpZ2h0fGVufDB8fDB8fHww&w=1000&q=80"} alt="image3" width={725} height={600} />
                </div>

                <div>
                    <Image src={"https://plus.unsplash.com/premium_photo-1682320427001-e7a016510197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVpZ2h0fGVufDB8fDB8fHww&w=1000&q=80"} alt="image4" width={725} height={600} />

                </div>

                <div>
                    <Image src={"https://plus.unsplash.com/premium_photo-1682320427001-e7a016510197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVpZ2h0fGVufDB8fDB8fHww&w=1000&q=80"} alt="image5" width={725} height={600} />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselContainer;
