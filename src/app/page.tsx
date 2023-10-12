"use client";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  type Values = {
    username: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>();

  const loginOption = {
    username: { required: "Username is Required" },
    password: { required: "Password is Required" },
  };

  const handleLogin = (data: any) => {
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Berhasil Login",
      });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container w-11/12 xl:w-4/12 mt-32 bg-white m-auto border border-t-gray-300 p-10 rounded-lg shadow-xl">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <form action="" onSubmit={handleSubmit(handleLogin)} className="mt-5">
          <label htmlFor="" className="">
            {/* <span className="block font-semibold text-sm">Username</span> */}
            <input
              type="text"
              className="w-full p-2 block  border border-sky-400 rounded-md outline-none"
              placeholder="Username"
              {...register("username", loginOption.username)}
            />
          </label>
          <div className=" w-full">
            {errors?.username && (
              <small className="text-red-500">{errors.username.message}</small>
            )}
          </div>
          <label htmlFor="" className="flex mt-4">
            {/* <span className="block font-semibold mt-2 text-sm">Password</span> */}
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 block border outline-none border-r-0 border-sky-400 rounded-r-none rounded-md"
              placeholder="Password"
              {...register("password", loginOption.password)}
            />
            <span
              onClick={handleTogglePassword}
              className="border rounded-r-md border-l-0 border-sky-400 rounded-sm pt-2"
            >
              {showPassword ? (
                <VisibilityOffIcon fontSize="small" className="mr-2" />
                ) : (
                <RemoveRedEyeIcon fontSize="small" className="mr-2" />
              )}
            </span>
          </label>
          <div className=" w-full">
            {errors?.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
          </div>
          <button className="mt-4 bg-sky-400 w-4/12 rounded-lg p-2 text-white ">
            {/* <button className="mt-4 bg-sky-400 w-full rounded-lg p-2 text-white " > */}
            Login
          </button>
        </form>
        <div className="mt-4">
          <p>
            Need a new account ?
            <Link
              href="register"
              className="text-blue-300 hover:text-blue-400 ml-1"
            >
              Click Me!
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <p>
            <Link
              href="dashboard"
              className="text-blue-300 hover:text-blue-400 ml-1"
            >
              Dashboard
            </Link>
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
