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

const Activities = (api: any, dateOri: any) => {
  const [deleteDate, setDeleteDate] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [view, setView] = useState("");
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addDate, setAddDate] = useState("");
  const [dataApi, setDataApi]: any = useState([]);
  const fectData = () => {
    axios
      .get(`${process.env.API_URL}/api/trx/todo/by?datetodo=${api.api}`, {
        headers: {
          xtoken: sessionStorage.getItem("xtoken"),
        },
      })
      .then((response1) => {
        setDataApi(response1.data.payload);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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

  useEffect(() => {
    fectData();
  }, [api]);
  return (
    <div className="mb-10">
      <div className="w-11/12 rounded-md bg-blue-500 h-8 rounded-b-none sm:mt-2">
        <h1 className="pt-1 font-bold ml-2">Avtivities for {api.api}</h1>
      </div>
      <div className="bg-slate-100 w-11/12 rounded-md rounded-t-none text-start p-2">
        <ul>
          {dataApi && dataApi?.length > 0 ? (
            dataApi?.map((data: any) => (
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
          <h1 className="pt-1 ml-2 font-bold">
            <button onClick={() => handleAddActivity(api.api)}>
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
