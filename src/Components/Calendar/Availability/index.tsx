import { v4 } from "uuid";
import { useEffect, useState } from "react";
import moment from "moment";
import "./calendaravailability.css";
import { PiChart } from "../PiChart";

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
        <div className="pigroup">
          <div>
            <PiChart text={"6am to 9am"} fraction={"2/4"}></PiChart>
          </div>
          <div>
            <PiChart text={"9am to 12pm"} fraction={"1/4"}></PiChart>
          </div>
        </div>
        <div className="pigroup">
          <div>
            <PiChart text={"12pm to 3pm"} fraction={"0/4"}></PiChart>
          </div>
          <div>
            <PiChart text={"3pm to 6pm"} fraction={"2/4"}></PiChart>
          </div>
        </div>
      </div>
    </div>
  );
};
