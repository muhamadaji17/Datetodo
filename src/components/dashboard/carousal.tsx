import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import datas from '@/data/carousel'
import { useEffect } from "react";
import Image from "next/image";



const Carousel1 = () => {
  
  useEffect(() => {
    // console.log(datas)
  
  },[])
    return (
        <Carousel showArrows={true} className="w-full" autoPlay={true}  showStatus={false} showThumbs={false} infiniteLoop={true}>
       {datas.map((data:any) => (
        <>
        <div className="w-full">
        <img
            // src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
           src={data.src}
           alt={data.alt}
           
            className="xl:h-96 h-52"
          />
        </div>
        </>
        ))}

       
        {/* <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
            className="xl:h-96 h-52"
          />
        </div>
        <div className="w-full min-h-40">
          <img
            className="xl:h-96 h-52"
            src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
          />
        </div>
        <div className="w-full min-h-40">
          <img
            className="xl:h-96 h-52"
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
          />
        </div>
        <div className="w-full min-h-40">
          <img
            className="xl:h-96 h-52"
            src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          />
        </div> */}
      </Carousel>
    )
}

export default Carousel1