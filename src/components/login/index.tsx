import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { InputAdornment } from "@mui/material";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setusernameError] = useState("");
  const [username, setusername] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  let token = "";
  let expiresIn = "";
  let status = "";
  let userId = "";
  let router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "") {
      setusernameError("Username is required");
    } else {
      setusernameError(""); // Clear the error when the input is not empty
    }

    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError(""); // Clear the error when the input is not empty
    }
    const data: any = new FormData(event.currentTarget);
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/auth/login`,
        data,
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
          confirmButtonColor: "#00FA9A",
        });
        setTimeout(() => {
          router.push("/dashboard");
        }, 100);
        // console.log(response);
        token = response.data.accessToken;
        expiresIn = response.data.expiresIn;
        status = response.data.status;
        userId = response.data.userId;

        sessionStorage.setItem("xtoken", token);
        sessionStorage.setItem("expiresIn", expiresIn);
        sessionStorage.setItem("expiresIn", expiresIn);
        sessionStorage.setItem("status", status);
        sessionStorage.setItem("userId", userId);
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonColor: "#1E90FF",
        text: error.response?.data?.message,
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (sessionStorage.getItem("xtoken")) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="container w-11/12 sm:w-8/12 md:w-9/12 md:mt-32 xl:w-4/12 xl:mt-24 mt-7 bg-white m-auto border border-t-gray-300 p-10 rounded-lg shadow-xl">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AccountCircleIcon fontSize="medium" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            ref={formRef}
          >
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setusername(e.target.value)}
              error={usernameError !== ""}
              helperText={usernameError}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              className="outline-none"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" onClick={handleTogglePassword}>
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
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError !== ""}
              helperText={passwordError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="mt-2 mb-5 bg-blue-500"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
