import { v4 } from "uuid";
import { useEffect, useState } from "react";
import moment from "moment";
import "./calendaravailability.css";
import { PiChart } from "./PiChart";

interface ICalendarAvailabilityProps {
  stringDate: string;
}

export const CalendarAvailability = (props: ICalendarAvailabilityProps) => {
  return (
    <div>
      <div>
        <span className="box">{"Availability for"}</span>
        <span className="box">
          <b>{`${moment(props.stringDate).format("dddd")} ${moment(
            props.stringDate
          ).format("MMMM")} ${moment(props.stringDate).format("DD")}, ${moment(
            props.stringDate
          ).format("YYYY")}`}</b>
        </span>
      </div>
      <div>
        <PiChart text={"9am to 12am"} fraction={"3/4"}></PiChart>
        <PiChart text={"12am to 3am"} fraction={"3/4"}></PiChart>
      </div>
    </div>
  );
};
