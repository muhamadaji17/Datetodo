// "use client";

import { reqGetFilm } from "@/redux/dashboard/action/ActionReducer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardReducer from "@/redux/dashboard/reducer/Dashboard";

const Film = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?page=2&sort_by=popularity.desc&include_video=true&api_key=194ce4da0cfba52c1bdb1078179b6d85"
  );
  const datas = response.data.results;
  const images = response.data.results.poster_path;
  // console.log(datas);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 ml-10 mr-10">
        {datas.map((data: any) => (
          <div key={data.id}>
            <a href={`/dashboard/${data.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.title}
                className="rounded-md transform hover:scale-105 transition-all"
              />
              <h1 className="mt-3">{data.title}</h1>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Film;
