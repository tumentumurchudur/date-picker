import { v4 } from "uuid";
import moment from "moment";
import "./index.scss";

export const Day = ({
  day,
  yearmonth,
  setAvailability,
}: {
  day: number;
  yearmonth: string;
  setAvailability: Function;
}) => {
  const isBefore = (day: number) =>
    moment(
      `${moment(yearmonth).format("YYYY-MM")}-${day
        .toString()
        .padStart(2, "0")}`
    ).isBefore(moment().format("YYYY-MM-DD"));

  const handelCalendarAvilability = (date: string) => {
    setAvailability(date);
  };

  return (
    <div className="rTableCell">
      {day > 0 ? (
        <div
          key={`${yearmonth}-${day.toString().padStart(2, "0")}`}
          onClick={() =>
            handelCalendarAvilability(
              `${moment(yearmonth).format("YYYY-MM")}-${day
                .toString()
                .padStart(2, "0")}`
            )
          }
          className={isBefore(day) ? "day pastday noHover" : "day hand"}
        >
          <span className="text">{day}</span>
          <span id={`frac_${v4()}`} className="text2">
            {isBefore(day) ? null : "4/16"}
          </span>
        </div>
      ) : (
        <div className="hidden">{}</div>
      )}
    </div>
  );
};
