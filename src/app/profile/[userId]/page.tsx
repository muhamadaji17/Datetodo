"use client";
import Navbar from "@/components/utils/navbar";
import storeGetById from "@/storeGetbyId";
import { Box, Radio, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import axios from "axios";
import { format } from "date-fns";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import getData from "@/api/index";

type Values = {
  username: string;
  fullname: string;
  phone: string;
  email: string;
  dob: Date;
  gender: string;
  imageFile: string;
};

const Profile = () => {
  const {
    loading,
    updateProfile,
    loadingUpdate,
    updateImage,
    loadingImage,
    getImages,
  } = storeGetById();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [imageIsValid, setImageIsValid] = useState(false);
  const [image, setImage] = useState("");
  // const [image, setImage] = useState("/user.png");
  const [dataApi, setDataApi] = useState([]);
  const [coba, setCoba] = useState();
  const [selectedValue, setSelectedValue] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    // } = useForm();
  } = useForm<Values>();

  // console.log(image);

  const fecthApi = () => {
    getData()
      .then((response1) => {
        setValue("username", response1.data.payload.username);
        setValue("fullname", response1.data.payload.fullname);
        setValue("email", response1.data.payload.email);
        setValue("phone", response1.data.payload.phone);
        setValue("dob", response1.data.payload.dob);
        // console.log(typeof response1.data.payload.image);
        setImage(response1.data.payload.image);
        // setImage(
        //   `${process.env.API_URL}/api/files/get/user/${response1.data.payload.image}`
        // );
        setValue("gender", response1.data.payload.gender);
        setSelectedValue(response1.data.payload.gender);
        setDataApi(response1.data.payload);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fecthImage = () => {
    axios
      .get(`${process.env.API_URL}/api/files/get/user/${image}`, {
        headers: {
          "Content-Type": "image/jpeg",
        },
      })
      .then((response) => {
        setCoba(response.data);
      })
      .catch((error) => {
        console.error("eror", error);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    register("gender");
    setSelectedValue(event.target.value);
  };

  const handleDateChange = (date: any) => {
    register("dob");
    setSelectedDate(date);

    const formattedDate: any = format(date.$d, "yyyy/MM/dd");
    setValue("dob", formattedDate);
  };

  const handleChangeProfile = (formData: any) => {
    console.log(formData);
    // updateProfile(formData);
  };

  // console.log(getImages);

  const handleChangeFoto = (event: any) => {
    if (event.target.files.length > 0) {
      // const file = event.target.files[0];
      // const isJPEG = file?.type === "image/jpeg";
      // const isJPG = file?.type === "image/jpg";
      // const isPNG = file?.type === "image/png";
      // const size = file?.size <= 100009;
      // if (isJPEG || isJPG || isPNG || size) {
      //   const reader = new FileReader();
      //     reader.onload = function (e: any) {
      //       setImage(e.target.result);
      //     };
      //     reader.readAsDataURL(file);
      //     setImageIsValid(true);
      //   } else {
      //     setImageIsValid(false);
      //     Swal.fire({
      //       icon: "error",
      //       title: "Error",
      //       confirmButtonColor: "#1E90FF",
      //       text: `harus gambar 10mb`,
      //     });
      //   }

      const imageFile = event.target.files[0];
      updateImage(imageFile);
      if (getImages.message === "Image upload successful") {
        setImage(getImages.filename);
      }
    } else {
      // User canceled the file selection
      alert("Oops");
    }
  };
  // console.log(JSON.stringify(getImages));

  // console.log(`${process.env.API_URL}/api/files/get/user/${image}`);
  console.log(image);
  // console.log("asasas", coba);
  useEffect(() => {
    fecthApi();
    fecthImage();
  }, [loadingImage, image]);

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit(handleChangeProfile)}
        className="bg-white border border-t-slate-400 p-2 mt-10 w-10/12 mx-auto rounded-md shadow-md"
      >
        <div className=" sm:grid sm:grid-cols-3" id="kotak">
          <div className="md:relative">
            <img
              // src={
              //   image
              //     ? image
              //     : `${process.env.API_URL}/api/files/get/user/${image}`
              // }
              // src={image}
              // src={coba}
              src={`${process.env.API_URL}/api/files/get/user/${image}`}
              className="w-64 h-64 object-top  rounded-full mb-5 md:mt-10"
              alt=""
            />
            <div className="ml-8 md:absolute top-56 left-44 cursor-pointer text-blue-600 ">
              <label className="">
                <input
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  // {...register("imageFile")}
                  className="w-10 cursor-pointer"
                  onChange={(e) => handleChangeFoto(e)}
                />
                <span className="custom-icon relative">
                  {/* <CameraAltOutlinedIcon fontSize="large" /> */}
                  <img
                    src="/camera.png"
                    className="w-10 h-10 font-bold cursor-pointer"
                    alt=""
                  />
                </span>
              </label>
            </div>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
            className="mt-16"
          >
            <TextField
              focused
              id="standard-basic"
              label="Username"
              variant="standard"
              {...register("username")}
            />
            <TextField
              focused
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              onInput={(e) => {
                e.preventDefault();
                const input = e.target as HTMLInputElement;
                const newValue = input.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                input.value = newValue;
              }}
              {...register("phone")}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="YYYY/MM/DD"
                  slotProps={{
                    actionBar: {
                      actions: ["clear"],
                    },
                  }}
                  label="Tanggal Lahir"
                  className="w-full mb-5"
                  {...register("dob")}
                  value={dataApi?.dob ? dayjs(dataApi?.dob) : selectedDate}
                  onChange={handleDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
            className="mt-16"
          >
            <TextField
              focused
              id="standard-basic"
              label="Full Name"
              variant="standard"
              {...register("fullname")}
            />
            <TextField
              focused
              id="standard-basic"
              label="E-Mail"
              type="email"
              variant="standard"
              {...register("email")}
            />
            <div className="flex flex-wrap pt-5">
              <Radio
                checked={selectedValue === "L"}
                {...register("gender")}
                onChange={handleChange}
                value={"L"}
                className="w-9 mt-10"
              />
              <p className="text-sm mt-3 ">Laki Laki</p>
              <Radio
                {...register("gender")}
                checked={selectedValue === "P"}
                onChange={handleChange}
                value={"P"}
                className="w-7 "
              />
              <p className="text-sm mt-3 ">Perempuan</p>
            </div>
          </Box>
        </div>
        <div className="text-end mr-40 mb-5">
          <button
            type="submit"
            className="mt-10 bg-green-500 mr-5 p-2 rounded-md w-20 text-white"
          >
            Save
          </button>
          <button className="mt-10 bg-red-500  p-2 rounded-md w-20 text-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
