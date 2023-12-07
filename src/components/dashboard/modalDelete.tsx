import React, { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useDataStore from "@/storeGetDateRangeZustands";

const DeleteModal = ({ open, handleClose, data }: any) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { deleteDateTodo, loadingDelete, setDateFilter } = useDataStore();

  const handleDelete = () => {
    deleteDateTodo(data.id);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <form action="" onSubmit={handleSubmit(handleDelete)}>
        <DialogTitle>
          {"Are you sure you want to delete the activity for"}
        </DialogTitle>
        <DialogContent>
          <input type="hidden" value={data.id} />
          <DialogContentText id="alert-dialog-slide-description">
            {data.tittle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 w-20 px-2 py-1 mr-2 text-white rounded-md"
          >
            Delete
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

export default DeleteModal;
