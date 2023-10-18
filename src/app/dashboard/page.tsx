import Carousel1 from "@/components/dashboard/carousal";
import Film from "@/components/dashboard/film";
import Navbar from "@/components/utils/navbar";
import Swiper1 from "@/components/dashboard/swiper";
import axios from "axios";
import React from "react";

const Dashboard = async () => {
  return (
    <>
      <Navbar />
      <Carousel1 />
      <div
        id="box"
        className="w-11/12 bg-white mb-10 mt-10 mx-auto  flex justify-between"
      >
        <Swiper1 />
      </div>
      <Film />
    </>
  );
};

export default Dashboard;
