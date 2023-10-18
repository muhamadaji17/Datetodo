"use client";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { REQ_LOGIN } from "@/redux/auth/action/ActionReducer";
import React from "react";
// import { setCookie } from "cookies-next";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

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

  const router = useRouter();
  // const dispatch = useDispatch();

  const handleLogin = async (data: any) => {
    try {
      const response = await axios.post(
        "http://103.175.219.184:8001/api/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Berhasil Login",
          confirmButtonColor: "#00FA9A          ",
        });
        // setCookie("token", response.data.accessToken);
        sessionStorage.setItem("token", response.data.accessToken);
        // sessionStorage.setItem("username", data.username);
        router.push("dashboard");
      }
    } catch (error: any) {
      // console.error(error.response.data.message);
      // console.error(error.response);
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonColor: "#1E90FF        ",
        text: error.response.data.message,
        // text: error.response.status,
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    }

    // dispatch(REQ_LOGIN(data));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const token = sessionStorage.getItem("token");
  React.useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  });
  return (
    <div className="container w-11/12 xl:w-4/12 mt-32 bg-white m-auto border border-t-gray-300 p-10 rounded-lg shadow-xl">
      <h1 className="text-3xl text-center font-bold">Login</h1>
      <form ref={formRef} onSubmit={handleSubmit(handleLogin)} className="mt-5">
        <label className="">
          {/* <span className="block font-semibold text-sm">Username</span> */}
          <input
            type="text"
            className="w-full p-2 block  border border-sky-400 rounded-md outline-none"
            placeholder="Username"
            id="username"
            {...register("username", loginOption.username)}
          />
        </label>
        <div className=" w-full">
          {errors?.username && (
            <small className="text-red-500">{errors.username.message}</small>
          )}
        </div>
        <label className="flex mt-4">
          {/* <span className="block font-semibold mt-2 text-sm">Password</span> */}
          <input
            type={showPassword ? "text" : "password"}
            id="password"
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
    </div>
  );
};

export default Login;
