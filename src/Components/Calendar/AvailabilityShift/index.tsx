import "./index.scss";
import { PiChart } from "../PiChart";

interface ICalendarAvailabilityProps {
  setShift: string;
}

export const AvailabilityShift = (props: ICalendarAvailabilityProps) => {
  return (
    <div>
      {props.setShift === "1" || props.setShift === "0" ? (
        <div className="pigroup">
          <PiChart
            text={"6am to 9am"}
            fraction={"2/4"}
            strClass={"chart1"}
          ></PiChart>
          <PiChart
            text={"9am to 12pm"}
            fraction={"1/4"}
            strClass={"chart2"}
          ></PiChart>
        </div>
      ) : null}
      {props.setShift === "2" || props.setShift === "0" ? (
        <div className="pigroup">
          <PiChart
            text={"12pm to 3pm"}
            fraction={"0/4"}
            strClass={"chart3"}
          ></PiChart>
          <PiChart
            text={"3pm to 6pm"}
            fraction={"2/4"}
            strClass={"chart4"}
          ></PiChart>
        </div>
      ) : null}
      <button className="timeprefrencebtn">No Time Prefrence</button>
    </div>
  );
};
