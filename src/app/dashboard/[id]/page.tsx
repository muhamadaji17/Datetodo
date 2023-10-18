"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Modal } from "@mui/material";
// import Modal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "43%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  // background: "rgba(0, 0, 0, 1.0)", // Warna latar belakang yang di-blurkan
  // backdropFilter: "blur(100px)", // Efek blur latar belakang
  // zIndex: 100, // Atur z-index untuk menempatkan di atas modal

  // p: 4,
};

const mobileStyle = {
  width: 3, // Ubah lebar modal sesuai dengan kebutuhan di layar ponsel
  transform: "translate(-50%, -50%)",
  // left: "50%",
  top: "50%",
};

const DetailFilm = (props: any) => {
  type Films = [
    title: string,
    release_date: string,
    revenue: number,
    backdrop_path: string,
    release_date: string,
    popularity: number,
    vote_average: number,
    overview: string
  ];
  const id = props.params.id;
  const [movies, setMovies] = useState<Films | null>("");
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=194ce4da0cfba52c1bdb1078179b6d85`
      )
      .then((response: Films) => {
        setMovies(response.data);
        return response;
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        // setLoading(false);
      });
  }, []);
  // console.log("movie", typeof movies.vote_average);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className=" sm:mt-6 mt-2 p-4 flex flex-wrap">
        <div className="sm:mr-10 sm:mb-16 h-64">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
            alt="logo"
            className="min-h-full w-full sm:w-72 md:w-full lg:w-96 rounded-lg sm:rounded-b-none"
          />
          <button
            className="bg-yellow-300 w-full rounded-lg rounded-t-none h-12 text-lg font-mono hover:bg-yellow-400 font-bold hidden sm:block"
            onClick={handleOpen}
          >
            Trailer <PlayCircleIcon />
          </button>
        </div>
        <div className=" w-full mb-2 sm:w-6/12 md:w-8/12 lg:w-7/12 text-justify">
          <h1 className="font-semibold text-3xl mt-5 capitalize sm:mt-0">
            {movies?.title}
          </h1>
          <div className="mt-2">
            <div className="flex">
              <label className="font-bold">Realease Date </label>
              <span className="" style={{ marginLeft: 10 }}>
                {movies?.release_date}
                {/* {format(new Date(movies?.release_date), "dd/MM/yyyy")} */}
              </span>
            </div>
            <div className="flex mt-1">
              <label className="font-bold">Total Audience</label>
              <span className="ml-1">{movies?.popularity}</span>
            </div>
            <div className="flex mt-1">
              <label className="font-bold">Revenue </label>
              <span className="lowercase" style={{ marginLeft: 54 }}>
                {/* $. {movies?.revenue} */}
                {movies?.revenue?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            <div className="flex mt-1">
              <label className="font-bold">Ratings</label>
              <span className="" style={{ marginLeft: 63 }}>
                {movies?.vote_average}
              </span>
            </div>
            <div className="lg:mt-4 mt-4 mb-4">
              <strong>Sinopsis</strong>
              <p className="font-sans">{movies?.overview}</p>
            </div>
          </div>
        </div>
        <button
          className="bg-yellow-300 w-full rounded-md sm:rounded-t-none h-11 text-lg font-mono hover:bg-yellow-400 font-bold block sm:hidden "
          onClick={handleOpen}
        >
          Trailer <PlayCircleIcon />
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className="w-30"
      >
        <Box sx={isMobile ? mobileStyle : style}>
          <Typography id="modal-modal-description">
            <button
              className="items-end justify-end text-end  text-lg right-0"
              onClick={handleClose}
            >
              <HighlightOffIcon
                fontSize="large"
                style={{ color: " #FFFFFF" }}
                className="text-end justify-end content-end items-end"
              />
            </button>
            <ReactPlayer
              url={["https://www.youtube.com/watch?v=1ww23XLJVFs"]}
              width={isMobile ? 400 : 600}
              style={isMobile ? { marginTop: 320 } : {}}
              playing={true}
              controls={true}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default DetailFilm;
