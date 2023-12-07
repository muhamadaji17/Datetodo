import axios from "axios";
import { format } from "path";
import { forwardRef, useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteModal from "@/components/dashboard/modalDelete";
import AddModal from "./addModal";
import ViewModal from "./viewModal";
import dayjs from "dayjs";
import idLocale from "dayjs/locale/id";
import useDataStore from "@/storeGetDateRangeZustands";

const Activities = ({ api, dateOri }: any) => {
  const [deleteDate, setDeleteDate] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [view, setView] = useState("");
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addDate, setAddDate] = useState("");
  const [dataApi, setDataApi]: any = useState([]);

  const handleDeleteClick = (date: any) => {
    setDeleteDate(date);
    setDeleteModalOpen(true);
  };

  const handleView = (date: any) => {
    setView(date);
    setViewModalOpen(true);
  };

  const handleAddActivity = (date: any) => {
    setAddDate(date);
    setAddModalOpen(true);
  };

  const {
    loadingDelete,
    loadingEdit,
    dataByYear,
    loadingAdd,
    loadingDateRange,
    setGetBy,
  } = useDataStore();
  useEffect(() => {
    setGetBy(api);
  }, [api, loadingDelete, loadingEdit, loadingAdd, loadingDateRange]);
  return (
    <div className="mb-10">
      <div className="w-11/12 rounded-md bg-blue-500 h-8 rounded-b-none sm:mt-2">
        <h1 className="pt-1  ml-2 text-white">Avtivities for {api}</h1>
      </div>
      <div className="bg-slate-100 w-11/12 rounded-md rounded-t-none text-start p-2">
        <ul>
          {dataByYear && dataByYear?.length > 0 ? (
            (dataByYear || [])?.map((data: any) => (
              <li className="flex flex-wrap mb-2" key={data.id}>
                <div className="mt-1 text-sm">{data.tittle}</div>
                <div className="flex ml-auto">
                  <div className="mr-3">
                    <button
                      className="w-10 p-1 bg-blue-500 rounded-md "
                      onClick={() => handleView(data)}
                    >
                      {/* Edit */}
                      <VisibilityIcon fontSize="small" />
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="w-10 p-1 bg-red-500 rounded-md"
                      onClick={() => handleDeleteClick(data)}
                    >
                      {/* Delete */}
                      <DeleteIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>Tidak Ada Kegiatan</li>
          )}
        </ul>
      </div>
      <div className="mb-10">
        <div className="w-11/12 rounded-md bg-blue-500 h-8 rounded-t-none">
          <h1 className="pt-1 ml-2 ">
            <button
              onClick={() => handleAddActivity(api)}
              className="text-white"
            >
              Add More Activity
              <AddCircleOutlineIcon
                className="text-green-500 ml-2"
                fontSize="medium"
              />
            </button>
          </h1>
        </div>
      </div>
      <DeleteModal
        open={deleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        data={deleteDate}
      />
      <ViewModal
        open={viewModalOpen}
        handleClose={() => setViewModalOpen(false)}
        data={view}
        dateOri={dateOri}
      />
      <AddModal
        open={addModalOpen}
        handleClose={() => setAddModalOpen(false)}
        data={addDate}
      />
    </div>
  );
};

export default Activities;
