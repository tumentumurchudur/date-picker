import { v4 } from "uuid";
import moment from "moment";
import "./index.scss";
import { Day } from "./Day";
import { useState, useEffect } from "react";

export const CalendarBody = ({
  // setSelected,
  month,
  setAvailibility,
  calendar,
}: {
  // setSelected:Function;
  month: string;
  setAvailibility: Function;
  calendar: number[][];
}) => {
  // console.log(moment(month).format("YYYY-MM-DD"))

  const [selected, setSelected] = useState<string>(
    moment(month).format("YYYY-MM-DD")
  );

  useEffect(() => {
    setSelected(moment(month).format("YYYY-MM-DD"))
  }, [selected]);

  console.log(selected)

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
              setSelected={setSelected}
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
