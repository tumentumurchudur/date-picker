import { v4 } from "uuid";
import { useEffect, useState } from "react";
import moment from "moment";
import "./index.scss";
import { CalendarAvailability } from "../Availability";
import { CalendarBody } from "./CalendarBody";

export const DatePicker = () => {
  const m = moment();

  const [value, setValue] = useState<string>(m.format("MMMM YYYY"));
  const [available, setAvailibility] = useState<string>(m.format("YYYY-MM-DD"));


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

  return (
    <div>
      <div key={`table_${v4()}`} className="rTable">
        <div key={`${v4()}`} className="rTableRow">
          <div key={`${v4()}`} className="rTableCell">
            <div className="flex-container">
              <span>Time Prefrence</span>
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

      <div key={`table_${v4()}`} className="rTable">
        <div key={`${v4()}`} className="rTableRow">
          <div key={`${v4()}`} className="rTableCell">
            <div key={`table_${v4()}`} className="rTable">
              <CalendarNavigation></CalendarNavigation>
              <CalendarBody month = {value} setAvailibility={()=>setAvailibility}></CalendarBody>
            </div>
          </div>
          <div key={`${v4()}`}>
            <CalendarAvailability stringDate={available}></CalendarAvailability>
          </div>
        </div>
      </div>
    </div>
  );
};
