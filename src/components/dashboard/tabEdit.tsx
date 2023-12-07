import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import axios from "axios";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import useDataStore from "@/storeGetDateRangeZustands";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// const EditTabComponent = (dataApi: any, handleClose: any) => {
const EditTabComponent = ({ dataApi, handleClose }: any) => {
  console.log(handleClose);
  const [formData, setFormData] = useState({
    tittle: dataApi?.tittle || "",
    datetodo: dataApi?.datetodo || "",
    description: dataApi?.description || "",
    state: dataApi?.state || 1,
  });

  const { reset } = useForm();

  const id = dataApi?.id;

  const { setEditTodo } = useDataStore();

  const router = useRouter();

  const handleEdit = async () => {
    setEditTodo(formData, id);
    handleClose();
    reset();
    // try {
    //   const response = await axios.put(
    //     `${process.env.API_URL}/api/trx/todo/${dataApi.dataApi.id}`,
    //     formData,
    //     {
    //       headers: {
    //         xtoken: sessionStorage.getItem("xtoken"),
    //       },
    //     }
    //   );
    //   if (response) {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Success",
    //       text: `Berhasil Menghpus ${formData.tittle}`,
    //       confirmButtonColor: "#00FA9A",
    //     });
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     confirmButtonColor: "#1E90FF",
    //     text: "Gagal Menghapus",
    //   });
    // }
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mb-10">
      <form className="grid grid-cols-2 gap-4">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="standard"
          name="tittle"
          value={formData.tittle}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              slotProps={{
                actionBar: {
                  actions: ["clear"],
                },
              }}
              format="YYYY/MM/DD"
              label="Mulai"
              className="w-full mb-5"
              value={dayjs(formData.datetodo)}
              onChange={(date: any) =>
                setFormData({
                  ...formData,
                  datetodo: date.format("YYYY/MM/DD"),
                })
              }
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          id="standard-basic"
          label="Description"
          name="description"
          variant="standard"
          inputProps={{ maxLength: 50 }}
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          label="Change Status"
          SelectProps={{
            native: true,
          }}
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value={1}>Belum</option>
          <option value={2}>Sedang di Lakukan</option>
          <option value={3}>Selesai</option>
        </TextField>
        <button
          type="button"
          onClick={handleEdit}
          className="bg-green-500 hover:bg-green-600 w-28 px-2 py-1 mr-2 text-white rounded-md"
        >
          Update
        </button>
        <button
          type="reset"
          className="bg-red-500 hover:bg-red-600 w-28 px-2 py-1 mr-2 text-white rounded-md"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTabComponent;
