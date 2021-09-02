import "./index.scss";

export const TimePrefrence = () => (
  <div className="flex-gap">
    <span>Time Prefrence</span>
    <select>
      <option value="None">None</option>
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </select>
    <button className="custombtn">View Today</button>
  </div>
);
