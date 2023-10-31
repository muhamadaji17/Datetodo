import React, { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { format } from "date-fns";

type Values = {
  tittle: string;
  datetodo: Date;
  description: string;
};

const AddModal = ({ open, handleClose, data }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>();

  const addOptionError = {
    tittle: { required: "Title is Required" },
    description: { required: "Description is Required" },
    datetodo: { required: "Date is Required" },
  };
  const handleAddActivities = async (data: any) => {
    const dataGabung = {
      tittle: data.tittle,
      description: data.description,
      datetodo: data.datetodo,
      image: "null.jpg",
    };
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/trx/todo`,
        dataGabung,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      );
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Berhasil di Tambah`,
          confirmButtonColor: "#00FA9A",
        });
        handleClose();
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonColor: "#1E90FF",
        text: `Gagal Menahbah`,
      });
    }
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <form action="" onSubmit={handleSubmit(handleAddActivities)}>
        <DialogTitle className="text-center">{"Add Activities"}</DialogTitle>
        <DialogContent>
          {/* <input type="hidden" value={data.id} /> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Title"
              variant="standard"
              inputProps={{ maxLength: 36 }}
              {...register("tittle", addOptionError.tittle)}
            />

            <TextField
              label="Date to Do"
              variant="standard"
              // value={format(data, "d MMMM YYYY")}
              value={data}
              className="text-black"
              {...register("datetodo")}
              //   disabled
            />
            {errors?.tittle && (
              <small className="text-red-500">{errors.tittle.message}</small>
            )}
            <div>
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                inputProps={{ maxLength: 50 }}
                variant="standard"
                {...register("description", addOptionError.description)}
              />
            </div>
            <div>
              {errors?.description && (
                <small className="text-red-500">
                  {errors.description.message}
                </small>
              )}
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 w-20 px-2 py-1 mr-2 text-white rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            type="button"
            className="bg-red-500 hover:bg-red-600 w-20 px-2 py-1 mr-2 text-white rounded-md"
          >
            Cancel
          </button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddModal;
