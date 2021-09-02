import { v4 } from "uuid";
import { useEffect, useState } from "react";
import moment from "moment";
import "./index.scss";
import { Day } from "./Day";
export const CalendarBody = ({
  month,
  setAvailibility,
}: {
  month: string;
  setAvailibility: Function;
}) => {
  const [calendar, setCalandar] = useState<number[][]>([]);

  useEffect(() => {
    const getCalendar = (days: number, weekday: number, count = 0) =>
      Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0)).map(
        (row, i) =>
          row.map((e, j) =>
            row.length * i + j >= weekday && days > count ? ++count : e
          )
      );
    const days = moment(month).daysInMonth();
    const weekday = moment(month).add(0, "days").startOf("month").day();
    setCalandar(getCalendar(days, weekday));
    return () => {};
  }, [month]);

  return (
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
            <Day
              day={e}
              yearmonth={month}
              setAvailability={setAvailibility}
            ></Day>
          ))}
        </div>
      ))}
    </div>
  );
};
