import { useEffect, useState } from "react";
import user from "../../../../public/ghoul.jpg";
import axios from "axios";
import { format } from "date-fns";

const DetailFilm = (props: any) => {
  const id = props.id;

  const [movie, setMovie] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=194ce4da0cfba52c1bdb1078179b6d85`
      )
      .then((response: any) => {
        setMovie(response.data);
        return response;
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        // setLoading(false);
      });
  }, []);
  //   console.log(movie);

  return (
    <div className="  flex flex-wrap mb-10">
      <div className="sm:mr-10 sm:mb-16 h-64">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          //   src="/ghoul.jpg"
          alt="logo"
          className=" w-full sm:w-72 md:w-full lg:w-96 rounded-lg sm:rounded-b-none"
          style={{ height: 430 }}
        />
      </div>
      <div className=" w-full sm:w-6/12 md:w-8/12 lg:w-7/12 text-justify mt-44 sm:mt-0">
        <h1 className="font-semibold text-3xl mt-5 capitalize sm:mt-0">
          {movie?.title}
          Judul
        </h1>
        <div className="mt-2">
          <div className="flex">
            <label className="font-bold">Realease Date </label>
            <span className="" style={{ marginLeft: 10 }}>
              {movie?.release_date}
              {/* {format(new Date(movie?.release_date), "dd/MM/yyyy")} */}
            </span>
          </div>
          <div className="flex mt-1">
            <label className="font-bold">Total Audience</label>
            <span className="ml-1"> {movie?.popularity}</span>
          </div>
          <div className="flex mt-1">
            <label className="font-bold">Revenue </label>
            <span className="lowercase" style={{ marginLeft: 54 }}>
              {/* $. {movies?.revenue} */}
              {movie?.revenue?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
              {/* RP 200.000.000 */}
            </span>
          </div>
          <div className="flex mt-1">
            <label className="font-bold">Ratings</label>
            <span className="" style={{ marginLeft: 63 }}>
              {movie?.vote_average}
            </span>
          </div>
          <div className="lg:mt-4 mt-4 mb-4">
            <strong>Sinopsis</strong>
            <p className="font-sans">
              {movie?.overview}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              provident sit aut asperiores molestias pariatur. Ducimus obcaecati
              est culpa itaque sunt explicabo sint repellendus illum quia
              nesciunt quaerat veniam placeat, similique ad autem, et eligendi
              praesentium cum quo ab! Iste, quidem dolore necessitatibus nemo
              suscipit magnam alias maiores vitae porro. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFilm;
