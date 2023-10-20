"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Navbar from "@/components/utils/navbar";
import Kamera from "@/components/absensi/kamera";
import Button from "@/components/button";
const Absensi = () => {
  return (
    <>
      <Navbar />
      <Kamera />
      {/* <Location /> */}
      {/* <Button>al;skal;sk</Button> */}
    </>
  );
};
export default Absensi;
