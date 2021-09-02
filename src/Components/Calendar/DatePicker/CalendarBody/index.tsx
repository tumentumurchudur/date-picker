import { v4 } from "uuid";
import moment from "moment";
import "./index.scss";
import { Day } from "./Day";
export const CalendarBody = ({
  month,
  setAvailibility,
  calendar
}: {
  month: string;
  setAvailibility: Function;
  calendar: number[][];
}) => {

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
