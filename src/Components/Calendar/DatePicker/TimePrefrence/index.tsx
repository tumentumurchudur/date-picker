import "./index.scss";
import moment from "moment";

export const TimePrefrence = ({
  setShift,
  reSet,
}: {
  setShift: Function;
  reSet: Function;
}) => {
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShift(event.target.value);
  };

  const resetCalandar = () => {
    reSet(moment().format("YYYY-MM-DD"));
  };

  return (
    <div className="flex-gap">
      <span>Time Prefrence</span>
      <select onChange={selectChange}>
        <option value="0">None</option>
        <option value="1">AM</option>
        <option value="2">PM</option>
      </select>
      <button className="custombtn" onClick={resetCalandar}>
        View Today
      </button>
    </div>
  );
};
