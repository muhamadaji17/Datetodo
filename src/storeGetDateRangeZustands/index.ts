import axios from "axios";
import Swal from "sweetalert2";
import create from "zustand";

type State = {
  highlightedDays: number[];
  dataByYear: [];
  loadingDateRange: boolean;
  loadingDelete: boolean;
  loadingAdd: boolean;
  loadingGetBy: boolean;
  loadingEdit: boolean;
  error: string | null;
  deleteDateTodo: (id: string) => void;
  setAddTodo: (gabung: []) => void;
  setEditTodo: (formData: [], id: string) => void;
  setChangeMonth: (
    tahun: string,
    bulan: string,
    firstDay: string,
    lastDay: string
  ) => void;
  setGetBy: (tahun: string) => void;
  setDateFilter: (
    tahun: string,
    bulan: string,
    firstDay: string,
    lastDay: string
  ) => void;
};

const useDataStore = create<State>((set) => ({
  highlightedDays: [],
  dataByYear: [],
  loadingDateRange: false,
  loadingDelete: false,
  loadingAdd: false,
  loadingGetBy: false,
  loadingEdit: false,
  error: null,
  setDateFilter: async (tahun, bulan, firstDay, lastDay) => {
    try {
      const response1 = await axios.get(
        `${process.env.endPoint}/bydate/${tahun}-${bulan}-${firstDay}/${tahun}-${bulan}-${lastDay}`,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      );

      const maping = response1.data.payload.map((data: any) => {
        const datetodo = data.datetodo;
        return parseInt(datetodo.substring(8, 10));
      });

      set({ highlightedDays: maping, loadingDateRange: true });
    } catch (error) {
      set({ error: "Error fetching data", loadingDateRange: false });
    }
  },
  setChangeMonth: async (tahun, bulan, firstDay, lastDay) => {
    try {
      const response = await axios.get(
        `${process.env.endPoint}/bydate/${tahun}-${bulan}-${firstDay}/${tahun}-${bulan}-${lastDay}`,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      );
      const maping = response.data.payload.map((data: any) => {
        const datetodo = data.datetodo;
        return parseInt(datetodo.substring(8, 10));
      });

      set({ highlightedDays: maping, loadingDateRange: true });
    } catch (error) {
      set({ error: "Error fetching data", loadingDateRange: false });
    }
  },
  setGetBy: async (tahun) => {
    try {
      const response = await axios.get(
        `${process.env.endPoint}/by?datetodo=${tahun}`,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      );
      set({ dataByYear: response.data.payload, loadingGetBy: true });
    } catch (error) {
      set({ error: "Error fetching data", loadingGetBy: false });
    }
  },
  deleteDateTodo: async (id) => {
    try {
      const response = await axios.delete(`${process.env.endPoint}/${id}`, {
        headers: {
          xtoken: sessionStorage.getItem("xtoken"),
        },
      });
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Berhasil Menghapus Data`,
          confirmButtonColor: "#00FA9A",
        });
        set({ loadingDateRange: false });
      }
    } catch (error) {
      set({ error: "Error fetching data", loadingDateRange: false });
    }
  },
  setAddTodo: async (gabung) => {
    try {
      const response = await axios.post(`${process.env.endPoint}/`, gabung, {
        headers: {
          xtoken: sessionStorage.getItem("xtoken"),
        },
      });
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Berhasil di Tambah Aktivitas`,
          confirmButtonColor: "#00FA9A",
        });
      }
      set({ loadingDateRange: false });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonColor: "#1E90FF",
        text: `Gagal Menahbah`,
      });
      set({ error: "Error fetching data", loadingDateRange: false });
    }
  },
  setEditTodo: async (formData, id) => {
    try {
      const response = await axios.put(
        `${process.env.endPoint}/${id}`,
        formData,
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
          text: `Berhasil Menghpus Aktivitas`,
          confirmButtonColor: "#00FA9A",
        });
      }
      set({ loadingDateRange: false });
    } catch (error) {
      set({ error: "Error fetching data", loadingDateRange: false });
    }
  },
}));

export default useDataStore;
