import axios from "axios";
import Swal from "sweetalert2";
import { create } from "zustand";

type State = {
  dataId: [];
  getImages: [];
  loading: boolean;
  loadingImage: boolean;
  loadingUpdate: boolean;
  error: string | null;
  updateImage: (imageFile: string) => void;
  getDataById: () => void;
  getImage: (image: string) => void;
  updateProfile: (data: any) => void;
};

const storeGetById = create<State>((set) => ({
  dataId: [],
  getImages: [],
  loadingImage: false,
  loading: false,
  loadingUpdate: true,
  error: null,
  getDataById: async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/api/trx/user/profile`,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      );
      set({ dataId: response.data?.payload, loading: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonColor: "#1E90FF",
        text: `Gagal Update`,
      });
      set({ error: "Error fetching data", loading: false });
    }
  },
  getImage: async (image) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/api/files/get/user/${image}`,
        {
          headers: {
            "Content-Type": "image/jpeg",
          },
        }
      );
      set({ getImages: response.data, loadingImage: true });
    } catch (error) {
      set({ error: "Error fetching data", loadingImage: false });
    }
  },
  updateImage: async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("imageFile", imageFile);
      const response = await axios.post(
        `${process.env.API_URL}/api/files/upload/user`,
        formData,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      set({ loadingImage: true, getImages: response.data });
    } catch (error) {
      set({ error: "Error fetching data", loadingImage: false });
    }
  },
  updateProfile: async (data) => {
    try {
      const response = await axios.put(
        `${process.env.API_URL}/api/trx/user/profile`,
        data,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Berhasil Update Data`,
          confirmButtonColor: "#00FA9A",
        });
        set({ loadingUpdate: true });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonColor: "#1E90FF",
        text: `Gagal Update`,
      });
      set({ error: "Error fetching data", loadingUpdate: false });
    }
  },
}));

export default storeGetById;
