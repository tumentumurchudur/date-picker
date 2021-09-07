import moment from "moment";
import "./index.scss";

interface ICalendarAvailabilityProps {
  stringDate: string;
}

export const AvailabilityDate = (props: ICalendarAvailabilityProps) => {
  return (
    <div className="availabilitycontainer">
      <span className="box">{"Availability for"}</span>
      <span className="box">
        <b>{`${moment(props.stringDate).format("dddd")} ${moment(
          props.stringDate
        ).format("MMMM")} ${moment(props.stringDate).format("DD")}, ${moment(
          props.stringDate
        ).format("YYYY")}`}</b>
      </span>
    </div>
  );
};
