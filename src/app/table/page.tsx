import ShortenedSinopsis from "@/components/table/showMore";
import Navbar from "@/components/utils/navbar";
import axios from "axios";
import { format } from "date-fns";
import { useState } from "react";
import TableBasic from "@/components/table/tableBasic";

const Table = () => {
  return (
    <>
      <Navbar />
      {/* <div className="mt-20">
        <table className=" border border-slate-400 mx-auto">
          <thead>
            <tr className="text-sm font-thin">
              <th className="border border-black w-14 ">No</th>
              <th className="border border-black w-40">Poster</th>
              <th className="border border-black w-40">Title</th>
              <th className="border border-black w-40">Realease Date</th>
              <th className="border border-black w-40">Overview</th>
              <th className="border border-black w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data: any, i: number) => (
              <tr className="text-md" key={data.id}>
                <td className="border border-black text-center">{i + 1}</td>
                <td className="border h-48 border-black p-1">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  />
                </td>
                <td className="border border-black text-center">
                  {data.title}
                </td>
                <td className="border border-black text-center">
                  {format(new Date(data.release_date), "dd MMMM yyyy")}
                </td>
                <td className="border border-black px-1 ">
                  <ShortenedSinopsis sinopsis={data.overview} maxLength={20} />
                </td>
                <td className="border border-black ...">
                  <button className="bg-green-500 ml-2 w-16 rounded-md text-white">
                    Edit
                  </button>
                  <button className="bg-red-500 ml-2 w-16 rounded-md text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className=" md:w-9/12 mx-auto  mb-10">
        <TableBasic />
      </div>
    </>
  );
};

export default Table;
