"use client";
import Carousel1 from "@/components/dashboard/carousal";
import Layout from "@/components/utils/navbar";
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
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
// import { useRouter } from "next/router";

const Swiper1 = () => {
  const router = useRouter();
  const [selected, setSelected]: any = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&include_video=true&api_key=194ce4da0cfba52c1bdb1078179b6d85"
        // "https://api.themoviedb.org/3/discover/movie?page=1&api_key=194ce4da0cfba52c1bdb1078179b6d85"
      )
      .then(
        (response) => setMovies(response.data.results)
        // return response
      );
  }, []);

  console.log("m", movies);

  const sliderClick = (event: React.MouseEvent<HTMLElement>, data: any) => {
    setSelected(data);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Swiper
      // className="mt-12"
      modules={[Navigation, Pagination, Autoplay]}
      // spaceBetween={1}
      // slidesPerView={4}
      slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      // onClick={() => console.log("klik")}
      loop={true}
    >
      {movies.map((slider: any) => (
        <SwiperSlide>
          <div key={slider.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${slider.poster_path}`}
              alt={slider.name}
              onClick={() => router.push(`/dashboard/${slider.id}`)}
              // className="sm:h-80 sm:w-60 h-40 w-20 rounded-md"
              className="h-80 w-72 rounded-md cursor-pointer transition-all transform hover:scale-105"
            />
            {/* </Link> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiper1;
