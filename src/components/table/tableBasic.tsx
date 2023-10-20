"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { format } from "date-fns";
import ShortenedSinopsis from "./showMore";
import { colsFilm } from "./cols";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import { type } from "os";
import { useRouter } from "next/navigation";

// type values = {
//   search : string
// }
export default function BasicTable() {
  const [datas, setDatas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [year, setYear] = useState(2023);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const fetchData = async (page: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=popularity.desc&include_video=true&api_key=194ce4da0cfba52c1bdb1078179b6d85&year=${year}`
    );
    setDatas(response.data.results);
    setTotalPages(500 || response.data.total_pages);
    // setTotalPages(response.data.total_pages);
  };
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, year]);

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (data: any) => {
    const parse = parseInt(data.search);
    setYear(parse);
    fetchData(currentPage);
  };

  return (
    <>
      <div
        className="bg-green-100 w-full mt-10 text-end sm:pb-5 sm:pr-4"
        // style={{ marginLeft: 104 }}
      >
        <form action="" onSubmit={handleSubmit(handleSearch)}>
          <input
            type="number"
            className="bg-white mt-5 text-sm rounded-md outline-none w-32 p-1 border border-r-0 rounded-r-none"
            style={{ height: 35 }}
            placeholder="Search Tahun"
            {...register("search")}
          />
          <span>
            <button>
              <SearchIcon
                className="bg-white rounded-md rounded-l-none outline-none border border-l-0 pl-1"
                fontSize="large"
                style={{ marginBottom: 3 }}
              />
            </button>
          </span>
        </form>
      </div>

      <TableContainer component={Paper}>
        <Table
          // sx={{ minWidth: 650 }}
          aria-label="simple table"
          className=""
        >
          <TableHead className=" ">
            <TableRow className="bg-orange-300">
              <TableCell align="center" className="w-2" width={1}>
                No
              </TableCell>
              {colsFilm.map((cols: any, i: number) => (
                <TableCell
                  align="center"
                  key={i}
                  width={150}
                  className="  "
                  style={{ fontSize: "medium" }}
                >
                  {cols.name}
                </TableCell>
              ))}

              <TableCell align="center" className="w-48  ">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className=" ">
            {datas && datas.length > 0 ? (
              (datas || [])?.map((data: any, i: number) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{ backgroundColor: i % 2 === 0 ? "white" : "#f5f5f5" }}
                  className=" "
                >
                  <TableCell component="th" scope="row" className="w-1">
                    {/* {i + 1} */}
                    {(currentPage - 1) * 20 + i + 1}
                  </TableCell>
                  <TableCell align="center" className=" ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    />
                  </TableCell>
                  <TableCell align="center" className="  ">
                    {data.title}
                  </TableCell>
                  <TableCell align="center" className=" ">
                    {format(new Date(data.release_date), "dd MMMM yyyy")}
                    {/* {data.release_date} */}
                  </TableCell>
                  <TableCell align="center" className=" ">
                    <ShortenedSinopsis
                      sinopsis={data.overview}
                      maxLength={20}
                    />
                  </TableCell>
                  <TableCell align="center" className=" ">
                    <button
                      className="bg-green-500 ml-2 w-16 rounded-md h-7 text-white mb-2 sm:mb-0"
                      onClick={() => router.push(`table/${data.id}`)}
                    >
                      Edit
                    </button>
                    <button className="bg-red-500 ml-2 w-16 rounded-md h-7 text-white">
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
              // className="text-center mx-auto "
              >
                <TableCell
                  colSpan={8}
                  //  className="text-center mx-auto pl-10"
                >
                  <h1 className="text-center text-red-400">Data Tidak Ada</h1>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Stack spacing={2} marginTop={2} marginLeft={2} marginBottom={2}>
          <Pagination
            onChange={handlePageChange}
            count={totalPages}
            variant="outlined"
            color="primary"
            showFirstButton
            showLastButton
          />
        </Stack>
      </TableContainer>
    </>
  );
}
