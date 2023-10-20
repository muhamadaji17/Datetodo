import axios from "axios";
import { useEffect, useState } from "react";

const EditFilm = (props: any) => {
  const id = props.id;
  const [movie, setMovie] = useState("");
  const [image1, setImage] = useState("");

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

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  useEffect(() => {
    if (movie && movie.backdrop_path) {
      setImage(`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`);
    }
  }, [movie]);
  return (
    <div className="">
      <div className="text-center">
        <h1 className="uppercase font-bold font-sans text-2xl">Edit Film</h1>
      </div>
      <div className="mt-5">
        <div className="sm:hidden">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Poster
          </label>
          <div className="mt-1 mb-2">
            <div className="flex rounded-md shadow-sm  ring-gray-300 sm:w-40 w-full">
              <input
                type="file"
                name="username"
                id="username"
                autoComplete="username"
                className="block flex-1  bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="janesmith"
                onChange={handleImageChange}
              />
            </div>
            <div>
              <img src={`${image1}`} className="w-96 mt-5" alt="" />
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-wrap ">
          <div>
            <div className="">
              <label
                htmlFor="username"
                className="block text-sm font-medium  text-gray-900"
              >
                Title
              </label>
              <div className="mt-1">
                <div className="flex rounded-md shadow-sm  ring-gray-300 sm:w-96 w-full">
                  <input
                    type="text"
                    id="username"
                    className="block flex-1  border outline-none border-black bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    defaultValue={movie.title}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 ">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Realease Date
              </label>
              <div className="mt-1">
                <div className="flex rounded-md shadow-sm  ring-gray-300 sm:w-40 w-full">
                  <input
                    type="date"
                    name="username"
                    className="block flex-1 border outline-none border-black bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    defaultValue={movie.release_date}
                  />
                </div>
              </div>
            </div>

            <div className="sm:flex sm:flex-wrap">
              <div className=" mt-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Total Audience
                </label>
                <div className="mt-1">
                  <div className="flex rounded-md shadow-sm  ring-gray-300 sm:w-40 w-full">
                    <input
                      type="text"
                      name="username"
                      className="block flex-1 border outline-none border-black bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                      defaultValue={movie.popularity}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:ml-10 mt-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Revenue
                </label>
                <div className="mt-1">
                  <div className="flex rounded-md shadow-sm  ring-gray-300 sm:w-40 w-full">
                    <input
                      type="text"
                      name="username"
                      className="block flex-1 border outline-none border-black bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                      defaultValue={movie?.revenue?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:ml-10 mt-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Rating
                </label>
                <div className="mt-1">
                  <div className="flex rounded-md shadow-sm  ring-gray-300 sm:w-40 w-full">
                    <input
                      type="text"
                      name="username"
                      className="block flex-1 border outline-none border-black bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                      defaultValue={movie.vote_average}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sinopsis
              </label>
              <div className="mt-1">
                <div className="flex rounded-md shadow-sm  ring-gray-300  w-full">
                  <textarea
                    id=""
                    cols={44}
                    rows={10}
                    className="p-1 outline-none border border-black"
                    defaultValue={movie.overview}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mt-5 text-white">
              <button className="bg-green-500 rounded-sm mr-32 w-20 h-10 P-2">
                UPDATE
              </button>
              <button
                className="bg-red-500 uppercase rounded-sm w-20 h-10 P-2"
                type="reset"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="mx-auto">
            <div className="sm:block hidden">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 sm:ml-8"
              >
                Poster
              </label>
              <div className="mt-1 ml-7 mb-2">
                <div className="flex rounded-md shadow-sm  ring-gray-300  w-full">
                  <input
                    type="file"
                    name="username"
                    className="block flex-1  bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="">
                  <img src={`${image1}`} className="w-96 mt-5 h-64" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFilm;
