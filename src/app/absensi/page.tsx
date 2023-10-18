"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Navbar from "@/components/utils/navbar";
import Kamera from "@/components/absensi/kamera";
const Absensi = () => {
  return (
    <>
      <Navbar />
      <Kamera />
      {/* <Location /> */}
    </>
  );
};
export default Absensi;
