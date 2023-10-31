"use client";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import Navbar from "@/components/utils/navbar";
import ServerDay from "@/data/ServerDays";
import Activities from "@/components/dashboard/activities";
import getAllDate from "@/storeZustend";

const Dashboard = () => {
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [dateChange, setDateChange]: any = useState();
  const [value, setValue]: any = useState<Dayjs | null>(dayjs(new Date()));

  const valueOnChange = format(new Date(value), "yyyy-MM-dd");
  const bulanOnchange = valueOnChange.substring(5, 7);
  const tahunOnChange = valueOnChange.substring(0, 4);
  const tanggalOnchange = valueOnChange.substring(8);
  const firstDay = value.startOf("month").format("DD");
  const lastDay = value.endOf("month").format("DD");

  const fecthData = () => {
    axios
      .get(
        `${process.env.API_URL}/api/trx/todo/bydate/${tahunOnChange}-${bulanOnchange}-${firstDay}/${tahunOnChange}-${bulanOnchange}-${lastDay}`,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      )
      .then((response1) => {
        const maping = response1.data.payload.map((data: any) => {
          const datetodo = data.datetodo;
          return parseInt(datetodo.substring(8, 10));
        });
        setHighlightedDays(maping);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChangeMonth = (month: any) => {
    const bulanLama = format(new Date(month), "yyyy/MM/dd");
    const tahun = bulanLama.substring(0, 4);
    const bulan = bulanLama.substring(5, 7);
    const firstDay = month.startOf("month").format("DD");
    const lastDay = month.endOf("month").format("DD");
    axios
      .get(
        `${process.env.API_URL}/api/trx/todo/bydate/${tahun}-${bulan}-${firstDay}/${tahun}-${bulan}-${lastDay}`,
        {
          headers: {
            xtoken: sessionStorage.getItem("xtoken"),
          },
        }
      )
      .then((response1) => {
        const maping = response1.data.payload.map((data: any) => {
          const datetodo = data.datetodo;
          return parseInt(datetodo.substring(8, 10));
        });
        setHighlightedDays(maping);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChangeDate = (date: any) => {
    const newValue = dayjs(date);
    setValue(newValue);
    const valueOnChange = format(new Date(date), "yyyy-MM-dd");
    setDateChange(valueOnChange);
  };
  const { dateTodo, refresh, getAll } = getAllDate();

  console.log("klasjklajlsj", dateTodo);

  useEffect(() => {
    fecthData();
    handleChangeDate(value);
    getAll();
  }, [refresh]);

  return (
    <>
      <Navbar />
      <div className="grid sm:grid-cols-2 gap-4  mt-5">
        <div className="  sm:ml-24">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <div className="" style={{ height: 350 }}>
                <DateCalendar
                  value={value}
                  onChange={(newValue: any) => handleChangeDate(newValue)}
                  onMonthChange={(month) => handleChangeMonth(month)}
                  views={["year", "month", "day"]}
                  slots={{
                    day: ServerDay,
                  }}
                  slotProps={{
                    day: {
                      highlightedDays,
                    } as any,
                  }}
                />
              </div>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="sm:mr-20 ml-8">
          <Activities api={dateChange} dateOri={value} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
