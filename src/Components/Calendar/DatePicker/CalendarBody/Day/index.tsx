import moment from "moment";
import { useState, useEffect } from "react";

import "./index.scss";

export const Day = ({
  selectedDay,
  day,
  yearmonth,
  setAvailability,
}: {
  selectedDay: string;
  day: number;
  yearmonth: string;
  setAvailability: Function;
}) => {
  const [availDate, setAvailDate] = useState("");
  const [selected, setSelected] = useState(false);

  const isBefore = moment(availDate).isBefore(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    const availDate = `${moment(yearmonth).format("YYYY-MM")}-${day
      .toString()
      .padStart(2, "0")}`;

    setAvailDate(availDate);
    setSelected(availDate === selectedDay);
  }, [day, yearmonth]);

  const selectedStyles = selected
    ? {
        color: "#000",
        backgroundColor: "rgba(22, 155, 213, 1",
      }
    : {
        color: "#8c8c8c",
        transition: "0.5s",
      };

  return (
    <div className="rTableCell">
      {day > 0 ? (
        <div
          onClick={() => setAvailability(availDate)}
          className={isBefore ? "day pastday noHover" : "day hand"}
          style={selectedStyles}
        >
          <span>{day}</span>
          <span className="text2">{isBefore ? null : "4/16"}</span>
        </div>
      ) : (
        <div className="hidden" />
      )}
    </div>
  );
};
