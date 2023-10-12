"use client";

import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useForm } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Link } from "@mui/material";
import { addYears, format, isBefore } from "date-fns";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import Swal from "sweetalert2";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  type Values = {
    username: string;
    fullname: string;
    tgl_lahir: Date;
    alamat: string;
    jenis_kelamin: string;
    password: string;
    terms: boolean;
  };

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    unregister,
    formState: { errors },
  } = useForm<Values>();

  const registerOption = {
    username: { required: "Username is Required" },
    fullname: { required: "Fullname is Required" },
    tgl_lahir: { required: "Tanggal Lahir is Required" },
    alamat: { required: "Alamat is Required" },
    jenis_kelamin: { required: "Jenis Kelamin is Required" },
    password: { required: "Password is Required" },
    terms: { required: "Terms is Required" },
  };

  const handleRegister = (data: any) => {
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleDateChange = (value: any) => {
    register("tgl_lahir");
    if (value) {
      const currentDate = new Date();
      const minDate = addYears(currentDate, -11); // 11 tahun yang lalu
      if (isBefore(value.$d, minDate)) {
        setError("tgl_lahir", {
          message: "Usia harus minimal 11 tahun.",
        });
        unregister("tgl_lahir");
      } else {
        const formattedDate: any = format(value.$d, "dd/MM/yyyy");
        setValue("tgl_lahir", formattedDate);
        setSelectedDate(value);
      }
    }
  };
  return (
    <div className="container w-80 xl:w-5/12 mb-7 mt-7 pt-8 pb-8 border xl:mt-5 xl:mb-5 border-t-gray-300 bg-white m-auto rounded-lg shadow-lg">
      <h1 className="text-lg font-semibold text-center">Register</h1>
      <form
        action=""
        className="mt-5 ml-6 sm:ml-6 md:ml-6 xl:ml-16"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="mt-8">
          <input
            type="text"
            placeholder="Username"
            className="rounded-md p-2 w-64 outline-none sm:w-10 md:w-64 lg:64 xl:w-80 border border-sky-300"
            {...register("username", registerOption.username)}
          />
        </div>
        <div className=" w-full">
          {errors?.username && (
            <small className="text-red-500">{errors.username.message}</small>
          )}
        </div>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Fullname"
            className="rounded-md p-2 w-64 outline-none sm:w-10 md:w-64 lg:64 xl:w-80 border border-sky-300"
            {...register("fullname", registerOption.fullname)}
          />
        </div>
        <div className=" w-full">
          {errors?.fullname && (
            <small className="text-red-500">{errors.fullname.message}</small>
          )}
        </div>
        <div className="mt-4 rounded-md">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Tanggal Lahir"
                format="DD/MM/YYYY"
                className="w-52 xl:w-64"
                {...register("tgl_lahir")}
                onChange={handleDateChange}
                value={dayjs(selectedDate)}
                // minDate={dayjs('12/10/2023')}
                maxDate={dayjs("10/12/2023")}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className=" w-full">
          {errors?.tgl_lahir && (
            <small className="text-red-500">{errors.tgl_lahir.message}</small>
          )}
        </div>
        <div className="mt-5">
          <div className="mt-4 mr-8">
            <textarea
              id=""
              cols={22}
              rows={3}
              maxLength={100}
              className="round p-2 border outline-none border-sky-300 w-52 xl:w-64 text-sm"
              placeholder="Alamat"
              {...register("alamat", registerOption.alamat)}
            />
          </div>
          <div className=" w-full">
            {errors?.alamat && (
              <small className="text-red-500">{errors.alamat.message}</small>
            )}
          </div>
          <div className="mt-4">
            <input
              type="radio"
              value={"laki-laki"}
              {...register("jenis_kelamin", registerOption.jenis_kelamin)}
            />
            <span className="ml-1">Laki- Laki</span>
            <input
              type="radio"
              className="ml-8"
              value={"perempuan"}
              {...register("jenis_kelamin", registerOption.jenis_kelamin)}
            />
            <span className="ml-1">Perempuan</span>
          </div>
          <div className=" w-full">
            {errors?.jenis_kelamin && (
              <small className="text-red-500">
                {errors.jenis_kelamin.message}
              </small>
            )}
          </div>

          <label htmlFor="" className="flex mt-4">
            <input
              type={showPassword ? "text" : "password"}
              className="w-56 sm:w-20 md:w-64 lg:64 xl:w-72 p-2 block border outline-none border-r-0 border-sky-400 rounded-r-none rounded-md"
              placeholder="Password"
              {...register("password", registerOption.password)}
            />
            <span
              onClick={handleTogglePassword}
              className="border rounded-r-md border-l-0 border-sky-400 rounded-sm pt-2"
            >
              <RemoveRedEyeIcon fontSize="small" className="mr-2" />
            </span>
          </label>
          <div className=" w-full">
            {errors?.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
          </div>
          <div className="mt-4 mr-8">
            <input
              type="checkbox"
              className="mr-1"
              {...register("terms", registerOption.terms)}
            />{" "}
            <span className="text-sm">please check our terms & police</span>
          </div>
          <div className=" w-full">
            {errors?.terms && (
              <small className="text-red-500">{errors.terms.message}</small>
            )}
          </div>
          <button className="bg-green-400 border rounded-md mt-4 p-2  w-3/12">
            Register
          </button>
        </div>
      </form>
      <div className="ml-8 mt-4">
        <p>
          Already Have Account ?
          <Link href={"/"} className="text-blue-300 hover:text-blue-400 ml-1">
            Please Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
