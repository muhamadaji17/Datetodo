import React, { useEffect, useState } from "react";
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
import useDataStore from "@/storeGetDateRangeZustands";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

type Values = {
  tittle: string;
  datetodo: string;
  description: string;
};

const AddModal = ({ open, handleClose, data }: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Values>();

  const handleDateChange = (date: any) => {
    register("datetodo");
    setSelectedDate(date);

    const formattedDate: any = format(date.$d, "yyyy/MM/dd");
    setValue("datetodo", formattedDate);
  };

  const addOptionError = {
    tittle: { required: "Title is Required" },
    description: { required: "Description is Required" },
    datetodo: { required: "Date is Required" },
  };
  const { setAddTodo } = useDataStore();

  const handleAddActivities = async (formData: any) => {
    const gabung = {
      tittle: formData.tittle,
      description: formData.description,
      datetodo: formData.datetodo,
      image: "null.jpg",
    };
    setAddTodo(gabung);
    handleClose();
    reset();
  };

  useEffect(() => {
    setValue("datetodo", data);
  }, [data]);
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
            sx={{ m: 1, width: 400 }}
            noValidate
            autoComplete="off"
          >
            <div className="grid grid-cols-2">
              <TextField
                label="Title"
                variant="standard"
                inputProps={{ maxLength: 36 }}
                className="w-40 px-2 mb-5"
                {...register("tittle", addOptionError.tittle)}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]} sx={{}}>
                  <DatePicker
                    format="YYYY/MM/DD"
                    slotProps={{
                      actionBar: {
                        actions: ["clear"],
                      },
                    }}
                    label="Date To Do"
                    className="w-10 mb-5 "
                    {...register("datetodo")}
                    value={data ? dayjs(data) : selectedDate}
                    // value={selectedDate}
                    onChange={handleDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
              {errors?.tittle && (
                <small className="text-red-500">{errors.tittle.message}</small>
              )}
            </div>
            <div>
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                className="w-7/12"
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
        <div className="ml-7 mb-5">
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
        </div>
      </form>
    </Dialog>
  );
};

export default AddModal;
