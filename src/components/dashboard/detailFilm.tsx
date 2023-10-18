// "use client";
import axios from "axios";
import React from "react";
import { useState } from "react";

const DetailFilm = async (props: any) => {
  const id = props.params.id;
  const [movies, setMovies] = useState([]);

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`
  );
  console.log(response);

  // React.useEffect(() => {
  //   axios
  //     .get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
  //     .then((response: any) => {
  //       console.log(response);
  //       // Check if the response is successful and data is present
  //       if (response) {
  //         setMovies(response);
  //         // setLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching movie details:", error);
  //       // setLoading(false);
  //     });
  // }, [id]);
  console.log(movies);
  const sinopsis = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Repudiandae non recusandae quisquam possimus maiores odio ad
  harum id maxime mollitia praesentium, molestiae quis, eos nisi
  voluptas dolores, laudantium quo est minima ab. Quidem porro
  voluptas doloribus dolores unde odio similique doloremque,
  aliquid voluptates omnis asperiores cumque cupiditate! Eaque
  dolore temporibus officiis ullam, vero, pariatur culpa sit
  exercitationem omnis, corporis laborum aspernatur aut
  consectetur atque eius nostrum quia optio voluptate autem quas
  explicabo tempora. A fuga, illo aut aspernatur libero vel hic
  temporibus repellat, corporis aliquam debitis? Quaerat
  voluptates, quis qui aperiam maiores quas. Omnis voluptate quia
  maiores similique sint enim!`;

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const maxChars = 50;

  return (
    <div className=" sm:mt-6 mt-2 p-4 flex flex-wrap">
      <div className="min-h-40 max-h-80 sm:mr-10 bg-red-200 mb-10">
        <img
          src="/outs.jpg"
          alt="logo"
          className="h-full w-full sm:w-72 rounded-md rounded-b-none"
        />
        <button className="bg-yellow-300 w-full rounded-md rounded-t-none h-9 text-lg font-mono hover:bg-yellow-400 font-bold hidden sm:block">
          Buy Tickets
        </button>
      </div>
      <div className=" w-full mb-2 sm:w-6/12 md:w-7/12 lg:w-8/12 text-justify">
        <h1 className="font-semibold text-3xl mt-10 capitalize sm:mt-0">
          {/* {id} */}
        </h1>
        <div className="mt-2">
          <div className="flex">
            <label className="font-bold">Pengarang </label>
            <span className="" style={{ marginLeft: 10 }}>
              Shinobu Kaitani
            </span>
          </div>
          <div className="flex mt-1">
            <label className="font-bold">Genre</label>
            <span className="ml-12">
              Perjudian, Fiksi psikologis, Manga olahraga
            </span>
          </div>
          <div className="flex mt-1">
            <label className="font-bold">Manga</label>
            <span className="ml-10 lowercase">
              ONE OUTS 1, ONE OUTS 4, ONE OUTS 7, ONE OUTS 10, ONE OUTS 12, ONE
              OUTS 14, ONE OUTS 16, ONE OUTS 18, ONE OUTS 20
            </span>
          </div>
          <div className="flex mt-1">
            <label className="font-bold">Penerbit</label>
            <span className="ml-7">Shueisha</span>
          </div>
          {/* <div className="lg:mt-4">
            <strong>Sinopsis</strong>
            <p>
              {showMore ? sinopsis : sinopsis.slice(0, maxChars)}
              {sinopsis.length > maxChars && (
                <span>
                  <span
                    id="more"
                    style={{ display: showMore ? "inline" : "none" }}
                  >
                    {sinopsis.slice(maxChars)}
                  </span>
                  {showMore ? (
                    <button
                      onClick={toggleShowMore}
                      className="ml-1 text-blue-300 underline"
                    >
                      See Less
                    </button>
                  ) : (
                    <button
                      onClick={toggleShowMore}
                      className="ml-1 text-blue-300 underline"
                    >
                      See More
                    </button>
                  )}
                </span>
              )}
            </p>
          </div> */}
        </div>
      </div>
      <button className="bg-yellow-300 w-full rounded-md rounded-t-none h-9 text-lg font-mono hover:bg-yellow-400 font-bold block sm:hidden">
        Buy Tickets
      </button>
    </div>
  );
};

export default DetailFilm;
