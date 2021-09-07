import { v4 } from "uuid";
import moment from "moment";

import "./index.scss";
import { Day } from "./Day";

export const CalendarBody = ({
  month,
  selectedDay,
  setAvailibility,
  calendar,
}: {
  month: string;
  setAvailibility: Function;
  selectedDay: string;
  calendar: number[][];
}) => {
  return (
    <div className="rTable">
      <div className="rTableRow">
        {moment.weekdaysShort().map((weekday: string) => (
          <div key={weekday} className="rTableCell">
            {weekday}
          </div>
        ))}
      </div>
      {calendar.map((row) => (
        <div key={`${v4()}`} className="rTableRow">
          {row.map((day: number, i: number) => (
            <Day
              key={day + "-" + i}
              selectedDay={selectedDay}
              day={day}
              yearmonth={month}
              setAvailability={setAvailibility}
            ></Day>
          ))}
        </div>
      ))}
    </div>
  );
};
