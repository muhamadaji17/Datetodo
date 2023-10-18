"use client";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Navbar from "@/components/utils/navbar";

const Kamera = () => {
  const webcamRef = useRef("");
  const [imgSrc, setImgSrc] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords);
      });
    }
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <div className="md:flex">
        <div className="mt-2">
          <Webcam
            className="md:ml-24 w-96 rounded-md"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        </div>
        <div className="text-center mt-2 mb-2 md:mx-10 md:my-36">
          <button
            className="bg-green-400 rounded-md w-40 h-8"
            onClick={capture}
          >
            Take a picture
          </button>
        </div>
        <div className="" style={{ marginTop: 6 }}>
          {imgSrc && (
            <img
              src={imgSrc}
              className="mx-auto rounded-md"
              style={{ height: 290 }}
            />
          )}
        </div>
      </div>
      <div>
        <h1>Informasi Lokasi : </h1>
        {latitude !== null && longitude !== 0 ? (
          <div>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Kamera;
