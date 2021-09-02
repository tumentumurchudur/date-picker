import { v4 } from "uuid";
import { Fragment, useState } from "react";
import moment from "moment";
import "./index.scss";
import { CalendarAvailability } from "../Availability";
import { CalendarBody } from "./CalendarBody";

const DATE_FORMAT = "MMMM YYYY";
const getCalendar = (days: number, weekday: number, count = 0): number[][] =>
  Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0)).map(
    (row, i) =>
      row.map((e, j) =>
        row.length * i + j >= weekday && days > count ? ++count : e
      )
  );

export const DatePicker = () => {
  const currentDate = moment();

  const [value, setValue] = useState<string>(currentDate.format(DATE_FORMAT));
  const [available, setAvailibility] = useState<string>(
    currentDate.format("YYYY-MM-DD")
  );
  const [calendar, setCalendar] = useState<number[][]>(
    getCalendar(
      moment(value).daysInMonth(),
      moment(value).add(0, "days").startOf("month").day()
    )
  );

  const shiftMonth = (num: number) => {
    setValue(moment(value).add(num, "month").format(DATE_FORMAT));
    setCalendar(
      getCalendar(
        moment(value).daysInMonth(),
        moment(value).add(0, "days").startOf("month").day()
      )
    );
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

  return (
    <Fragment>
      <div className="rTable">
        <div className="rTableRow">
          <div className="rTableCell">
            <div className="flex-container">
              <span>Time Preference</span>
              <select id="u3167_input">
                <option value="None">None</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>

              <button className="custombtn">View Today</button>
            </div>
          </div>
        </div>
      </div>

      <div className="rTable">
        <div className="rTableRow">
          <div className="rTableCell">
            <div className="rTable">
              <CalendarNavigation />
              <CalendarBody
                month={value}
                calendar={calendar}
                setAvailibility={(date: string) => {
                  setAvailibility(moment(date).format("YYYY-MM-DD"));
                }}
              ></CalendarBody>
            </div>
          </div>
          <CalendarAvailability stringDate={available} />
        </div>
      </div>
    </Fragment>
  );
};
