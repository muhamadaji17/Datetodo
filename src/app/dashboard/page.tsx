"use client";

import Carousel1 from "@/components/dashboard/carousal";
import Layout from "@/components/dashboard/page";
import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sliders from "@/data/slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const [selected, setSelected]: any = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  const sliderClick = (event: React.MouseEvent<HTMLElement>, data: any) => {
    setSelected(data);
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
  }, []);
  return (
    <>
      <Layout />
      <Carousel1 />
      <div
        id="box"
        className="w-11/12 bg-white mb-10 mt-10 mx-auto sm:pl-16 flex justify-between"
      >
        <Swiper
          // className="mt-12"
          modules={[Navigation, Pagination]}
          spaceBetween={1}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          // onClick={() => console.log("klik")}
          loop={true}
        >
          {sliders.map((slider: any) => (
            <SwiperSlide>
              {/* <Image 
          src={slider.src}
          alt={slider.nama}
          width={10}
          height={10}
          /> */}
          {/* <Link href={{ 
            pathname: `/dashboard/${slider.name}`,
            query: {data : slider.name}
           }}> */}
          
              <img
                src={slider.src}
                alt={slider.name}
                onClick={() => router.push(`/dashboard/${slider.name}`)}
                className="sm:h-80 sm:w-60 h-40 w-20 rounded-md"
              />
          {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

// ReactDOM.render(<Dashboard />, document.querySelector('.demo-carousel'));
export default Dashboard;
