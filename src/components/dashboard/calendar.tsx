"use client";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import Badge from "@mui/material/Badge";
import axios from "axios";
import { format } from "date-fns";

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  // console.log(highlightedDays.indexOf(props.day.date()));
  // console.log(props.outsideCurrentMonth);
  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "❤️" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function DateCalendarValue() {
  const [value, setValue]: any = useState<Dayjs | null>(dayjs(new Date()));
  const [highlightedDays, setHighlightedDays] = useState([]);

  const valueOnChange = format(new Date(value), "yyyy-MM-dd");
  const bulanOnchange = valueOnChange.substring(5, 7);
  const tahunOnChange = valueOnChange.substring(0, 4);

  const fecthData = async () => {
    try {
      const response1 = await axios.get(
        `http://192.168.1.4:8010/api/trx/todo/bydate/${tahunOnChange}-${bulanOnchange}-01/${tahunOnChange}-${bulanOnchange}-30`,
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
      setHighlightedDays(maping);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangeMonth = async (month: any) => {
    const bulanLama = format(new Date(month), "yyyy/MM");
    const tahun = bulanLama.substring(0, 4);
    const bulan = bulanLama.substring(5, 7);
    try {
      const response1 = await axios.get(
        `http://192.168.1.4:8010/api/trx/todo/bydate/${tahun}-${bulan}-01/${tahun}-${bulan}-30`,
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
      setHighlightedDays(maping);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <div className="w-11/12 shadow-xl border border-l-gray-100 bg-gray-50 rounded-md ">
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            onMonthChange={(month) => handleChangeMonth(month)}
            disablePast
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
  );
}
