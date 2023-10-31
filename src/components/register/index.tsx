"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { addYears, format, isBefore } from "date-fns";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useForm } from "react-hook-form";
import { InputAdornment, Radio } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type Values = {
  username: string;
  // fullname: string;
  dob: Date;
  jenis_kelamin: string;
  password: string;
  terms: boolean;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
};

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedValue, setSelectedValue] = useState("");
  // const [password1Error, setPassword1Error] = useState("");
  // const [password2Error, setPassword2Error] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Values>();

  const registerOption = {
    username: { required: "Username is Required" },
    // fullname: { required: "Fullname is Required" },
    dob: { required: "Tanggal Lahir is Required" },
    jenis_kelamin: { required: "Jenis Kelamin is Required" },
    password: { required: "Password is Required" },
    terms: { required: "Terms is Required" },
    firstName: { required: "First Name is Required" },
    lastName: { required: "Last Name is Required" },
    phone: { required: "Phone Number is Required" },
    email: { required: "Email is Required" },
  };
  const router = useRouter();
  const handleRegister = async (data: any) => {
    const fullname = `${data.firstName} ${data.lastName}`;
    const dataGabung = {
      fullname,
      username: data.username,
      dob: data.dob,
      gender: data.jenis_kelamin,
      password: data.password,
      phone: data.phone,
      email: data.email,
    };
    // console.log(fullname);
    console.log(dataGabung);
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/auth/register`,
        dataGabung,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Berhasil Login",
          confirmButtonColor: "#00FA9A          ",
        });
        router.push("/");
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonColor: "#1E90FF",
        text: error.response.data.message,
      });
      console.log(error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleDateChange = (date: any) => {
    register("dob");

    const formattedDate: any = format(date.$d, "yyyy/MM/dd");
    // const formattedDate: any = format(date.$d, "dd/MM/yyyy");
    setValue("dob", formattedDate);
    setSelectedDate(date);
  };

  const handleRadioChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleUsername = (e: any) => {
    if (e.length <= 5) {
      setUsernameError("Username should be more than 5 characters");
    } else if (e.length >= 10) {
      setUsernameError("Username cannot be more than 10 characters");
    } else {
      setUsernameError("");
    }
  };
  // const handleCheckPassword1 = (e: any) => {
  //   if (e.length <= 8) {
  //     setPassword1Error("Password should be more than 8 characters");
  //   } else {
  //     setPassword1Error("");
  //   }
  // };

  // const handleCheckPassword2 = (e: any) => {
  //   if (e.length <= 8) {
  //     setPassword2Error("Password should be more than 8 characters");
  //   } else if (e.length === password1Error) {
  //     setPassword2Error("Password Not Match");
  //   } else {
  //     setPassword2Error("");
  //   }
  // };

  const handlePassword1Change = (e: any) => {
    const newPassword1 = e.target.value;
    setPassword1(newPassword1);

    if (newPassword1.length <= 8) {
      setPassword1Error("Password should be more than 8 characters");
    } else {
      setPassword1Error("");
    }
  };

  const handlePassword2Change = (e: any) => {
    const newPassword2 = e.target.value;
    setPassword2(newPassword2);

    if (newPassword2.length <= 8) {
      setPassword2Error("Password should be more than 8 characters");
    } else if (newPassword2 !== password1) {
      setPassword2Error("Passwords do not match");
    } else {
      setPassword2Error("");
    }
  };

  // useEffect(() => {
  //   // Password1 validation
  //   if (password1.length <= 8) {
  //     setPassword1Error("Password should be more than 8 characters");
  //   } else {
  //     setPassword1Error("");
  //   }

  //   // Password2 validation
  //   if (password2.length <= 8) {
  //     setPassword2Error("Password should be more than 8 characters");
  //   } else if (password2 !== password1) {
  //     setPassword2Error("Passwords do not match");
  //   } else {
  //     setPassword2Error("");
  //   }
  // }, [password1, password2]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box sx={{ mt: 3 }}>
          <form action="" onSubmit={handleSubmit(handleRegister)} ref={formRef}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  {...register("firstName", registerOption.firstName)}
                  autoFocus
                />
                {errors?.firstName && (
                  <small className="text-red-500">
                    {errors.firstName.message}
                  </small>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  {...register("lastName", registerOption.lastName)}
                />
                {errors?.lastName && (
                  <small className="text-red-500">
                    {errors.lastName.message}
                  </small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="username"
                  label="Username"
                  {...register("username", registerOption.username)}
                  onChange={(e) => handleUsername(e.target.value)}
                  helperText={usernameError}
                  error={usernameError !== ""}
                />
                {errors?.username && (
                  <small className="text-red-500">
                    {errors.username.message}
                  </small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  autoComplete="email"
                  {...register("email", registerOption.email)}
                />
                {errors?.email && (
                  <small className="text-red-500">{errors.email.message}</small>
                )}
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Tanggal Lahir"
                      // format="DD/MM/YYYY"
                      format="YYYY/MM/DD"
                      className="w-52 xl:w-64"
                      {...register("dob")}
                      onChange={handleDateChange}
                      value={dayjs(selectedDate)}
                      // minDate={dayjs('12/10/2023')}
                      maxDate={dayjs("10/12/2023")}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                {errors?.dob && (
                  <small className="text-red-500">{errors.dob.message}</small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  type="number"
                  {...register("phone", registerOption.phone)}
                />
                {errors?.phone && (
                  <small className="text-red-500">{errors.phone.message}</small>
                )}
              </Grid>
              <FormControlLabel
                value="L"
                control={<Radio />}
                label="Laki-Laki"
                labelPlacement="end"
                checked={selectedValue === "L"}
                {...register("jenis_kelamin", registerOption.jenis_kelamin)}
                onChange={handleRadioChange}
                className="ml-1 mt-3"
              />

              <FormControlLabel
                value="P"
                control={<Radio />}
                label="Perempuan"
                labelPlacement="end"
                checked={selectedValue === "P"}
                {...register("jenis_kelamin", registerOption.jenis_kelamin)}
                onChange={handleRadioChange}
                className="mt-3"
              />
              {errors?.jenis_kelamin && (
                <small className="text-red-500">
                  {errors.jenis_kelamin.message}
                </small>
              )}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  id="password1"
                  {...register("password", registerOption.password)}
                  // onChange={(e) => handleCheckPassword1(e.target.value)}
                  onChange={handlePassword1Change}
                  type={showPassword ? "text" : "password"}
                  helperText={password1Error}
                  error={password1Error !== ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={handleTogglePassword}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon
                            fontSize="medium"
                            className="mr-2 cursor-pointer transition-all"
                          />
                        ) : (
                          <RemoveRedEyeIcon
                            fontSize="medium"
                            className="mr-2 cursor-pointer transition-all"
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {errors?.password && (
                  <small className="text-red-500">
                    {errors.password.message}
                  </small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  id="password2"
                  type={showPassword2 ? "text" : "password"}
                  // onChange={(e) => handleCheckPassword2(e.target.value)}
                  onChange={handlePassword2Change}
                  // helperText={password2Error}
                  // error={password2Error !== ""}
                  helperText={password2Error}
                  value={password2}
                  error={password2Error !== ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={handleTogglePassword2}
                      >
                        {showPassword2 ? (
                          <VisibilityOffIcon
                            fontSize="medium"
                            className="mr-2 cursor-pointer transition-all"
                          />
                        ) : (
                          <RemoveRedEyeIcon
                            fontSize="medium"
                            className="mr-2 cursor-pointer transition-all"
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {errors?.password && (
                  <small className="text-red-500">
                    {errors.password.message}
                  </small>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="true"
                      color="primary"
                      required
                      // {...register("terms", registerOption.terms)}
                    />
                  }
                  label="Allow the terms and Police"
                />
                {errors?.terms && (
                  <small className="text-red-500">{errors.terms.message}</small>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="my-5 bg-blue-500"
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
