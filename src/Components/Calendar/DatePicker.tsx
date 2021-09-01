import { v4 } from "uuid";
import { useEffect, useState } from "react";
import moment from "moment";
import "./calendar.css";
import { CalendarAvailability } from "./CalendarAvailability";

export const DatePicker = () => {
  const [calendar, setCalandar] = useState<number[][]>([]);
  const m = moment();

  const [value, setValue] = useState<string>(m.format("MMMM YYYY"));
  const [available, setAvailibility] = useState<string>(m.format("YYYY-MM-DD"));

  useEffect(() => {
    const getCalendar = (days: number, weekday: number, count = 0) =>
      Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0)).map(
        (row, i) =>
          row.map((e, j) =>
            row.length * i + j >= weekday && days > count ? ++count : e
          )
      );
    const days = moment(value).daysInMonth();
    const weekday = moment(value).add(0, "days").startOf("month").day();
    setCalandar(getCalendar(days, weekday));
  }, [value]);

  const shiftMonth = (num: number) => {
    setValue(moment(value).add(num, "month").format("MMMM YYYY"));
  };

  const CalendarNavigation = () => (
    <div key={`row_${v4()}`} className="rTableRow">
      <div key={`cell_${v4()}`} className="rTableCell">
        <div key={`container_${v4()}`} className="flex-container">
          <span onClick={() => shiftMonth(-1)}>
            <h3 className="hand">{"<"}</h3>
          </span>
          <h3>
            {moment(value).format("MMM") + " " + moment(value).format("YYYY")}
          </h3>
          <span onClick={() => shiftMonth(1)}>
            <h3 className="hand">{">"}</h3>
          </span>
        </div>
      </div>
    </div>
  );
  const isBefore = (day: number) =>
    moment(
      `${moment(value).format("YYYY-MM")}-${day.toString().padStart(2, "0")}`
    ).isBefore(moment().format("YYYY-MM-DD"));

  const handelCalendarAvilability = (date: string) => {
    setAvailibility(date);
  };
  const Day = ({ day }: { day: number }) => (
    <div key={`${v4()}`} className="rTableCell">
      {day > 0 ? (
        <div
          key={`${value}-${day.toString().padStart(2, "0")}`}
          onClick={() =>
            handelCalendarAvilability(
              `${moment(value).format("YYYY-MM")}-${day
                .toString()
                .padStart(2, "0")}`
            )
          }
          className={isBefore(day) ? "day pastday noHover" : "day hand"}
        >
          <span id={`day_${v4()}`} className="text">
            {day}
          </span>
          <span id={`frac_${v4()}`} className="text2">
            {isBefore(day) ? null : "4/16"}
          </span>
        </div>
      ) : (
        <div className="hidden">{}</div>
      )}
    </div>
  );

  const CalendarBody = () => (
    <div key={`${v4()}`} className="rTable">
      <div key={`${v4()}`} className="rTableRow">
        {moment.weekdaysShort().map((e) => (
          <div key={`${v4()}`} className="rTableCell">
            {e}
          </div>
        ))}
      </div>
      {calendar.map((row) => (
        <div key={`${v4()}`} className="rTableRow">
          {row.map((e) => (
            <Day day={e}></Day>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div key={`table_${v4()}`} className="rTable">
      <div key={`${v4()}`} className="rTableRow">
        <div key={`${v4()}`} className="rTableCell">
          <div key={`table_${v4()}`} className="rTable">
            <CalendarNavigation></CalendarNavigation>
            <CalendarBody></CalendarBody>
          </div>
        </div>
        <div key={`${v4()}`} className="rTableCell">
          <CalendarAvailability stringDate={available}></CalendarAvailability>
        </div>{" "}
      </div>
    </div>
  );
};
