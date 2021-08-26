import moment from "moment";
import { v4 } from "uuid";
import React, { useState } from "react";
import "./calendar.css";

const { v4: uuidv4 } = require("uuid");
const weekdays = moment.weekdaysShort();

const rows = 6;
const columns = 7;

const Day = ({ num }: { num: number }) => (
  <div id={v4()} className="day hand">
    <span id={`day_${v4()}`} className="text">
      {num}
    </span>
    <span id={`frac_${v4()}`} className="text2">
      4/16
    </span>
  </div>
);

const CalendarBody = ({
  daysInMonth,
  weekday,
  count = 0,
}: {
  daysInMonth: number;
  weekday: number;
  count?: number;
}) => (
  <div id={`${v4()}`} className="rTable">
    <div id={`${v4()}`} className="rTableRow">
      {weekdays.map((e) => (
        <div id={`${v4()}`} className="rTableCell">
          {e}
        </div>
      ))}
    </div>

    {Array.from({ length: rows }, (e) =>
      Array.from({ length: columns }, (e) => 0)
    )
      .map((row, i) =>
        row.map((e, j) =>
          row.length * i + j >= weekday && daysInMonth > count ? ++count : e
        )
      )
      .map((row) => (
        <div id={`${v4()}`} className="rTableRow">
          {row.map((e) =>
            e > 0 ? (
              <div id={`${v4()}`} className="rTableCell">
                <Day num={e}></Day>
              </div>
            ) : (
              <div id={`${v4()}`} className="rTableCell">
                <div className="hidden">{}</div>
              </div>
            )
          )}
        </div>
      ))}
  </div>
);

const m = moment();

export const DatePicker: React.FC<{}> = ({}) => {
  const [value, setValue] = useState<number>(m.daysInMonth());

  return (
    <div className="rTable">
      <div className="rTable">
        <div className="rTableRow">
          <div className="rTableCell">
            <div className="flex-container">
              <span
                onClick={() =>
                  setValue(
                    m.subtract(1, "months").startOf("month").daysInMonth()
                  )
                }
              >
                <h3 className="hand">{"<"}</h3>
              </span>
              <h3>{m.format("MMM") + " " + m.format("Y")}</h3>

              <span
                onClick={() =>
                  setValue(m.add(1, "months").startOf("month").daysInMonth())
                }
              >
                <h3 className="hand">{">"}</h3>
              </span>
            </div>
          </div>
        </div>
        <CalendarBody
          daysInMonth={value}
          weekday={m.add(0, "days").startOf("month").day()}
        ></CalendarBody>
      </div>
    </div>
  );
};
