import { Fragment, useEffect, useState } from "react";
import moment from "moment";

import "./index.scss";
import { AvailabilityDate } from "../AvailabilityDate";
import { AvailabilityShift } from "../AvailabilityShift";
import { CalendarBody } from "./CalendarBody";
import { TimePrefrence } from "./TimePrefrence";

export const DatePicker = () => {
  const [value, setValue] = useState<string>(moment().format("MMMM YYYY"));
  const [selectedDay, setSelectedDay] = useState("");
  const [available, setAvailibility] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  const [shift, setShift] = useState<string>("0");
  const [calendar, setCalandar] = useState<number[][]>([]);

  const getCalendar = (days: number, weekday: number, count = 0) =>
    Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0)).map(
      (row, i) =>
        row.map((e, j) =>
          row.length * i + j >= weekday && days > count ? ++count : e
        )
    );

  const shiftMonth = (num: number) => {
    setValue(moment(value).add(num, "month").format("MMMM YYYY"));
  };

  const CalendarNavigation = () => (
    <div className="rTableRow">
      <div className="rTableCell">
        <div className="flex-container">
          <span onClick={() => shiftMonth(-1)}>
            <h3 className="hand">{"<"}</h3>
          </span>
          <h3>
            {moment(value).format("MMMM") + " " + moment(value).format("YYYY")}
          </h3>
          <span onClick={() => shiftMonth(1)}>
            <h3 className="hand">{">"}</h3>
          </span>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const days = moment(value).daysInMonth();
    const weekday = moment(value).add(0, "days").startOf("month").day();
    setCalandar(getCalendar(days, weekday));
  }, [value]);

  return (
    <Fragment>
      <div className="rTable">
        <div className="rTableRow">
          <TimePrefrence setShift={setShift} reSet={setValue} />
        </div>
      </div>
      <div className="rTable">
        <div className="rTableRow">
          <div className="rTableCell">
            <div className="rTable">
              <CalendarNavigation />
              <CalendarBody
                selectedDay={selectedDay}
                month={value}
                setAvailibility={(date: string) => {
                  setAvailibility(date);
                  setSelectedDay(date);
                }}
                calendar={calendar}
              ></CalendarBody>
            </div>
          </div>
          <div>
            <AvailabilityDate stringDate={available} />
            <AvailabilityShift setShift={shift} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
