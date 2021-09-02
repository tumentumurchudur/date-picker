import { v4 } from "uuid";
import moment from "moment";
import "./index.scss";
import { Day } from "./Day";

export const CalendarBody = ({
  month,
  calendar,
  setAvailibility,
}: {
  month: string;
  calendar: number[][];
  setAvailibility: Function;
}) => {
  return (
    <div className="rTable">
      <div className="rTableRow">
        {moment.weekdaysShort().map((e) => (
          <div key={e} className="rTableCell">
            {e}
          </div>
        ))}
      </div>

      {calendar.map((rows: number[]) => (
        <div key={`${v4()}`} className="rTableRow">
          {rows.map((day: number) => (
            <Day
              key={v4()}
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
