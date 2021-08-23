import moment from "moment";
import React from "react";
import "./calendar.css";


const weekdays = moment.weekdaysShort();

const Day = ({ num }: { num: number }) => (
  <div id="u3092" className="btn">
    <div id="u3092_div" className="day"></div>
    <div id="u3092_text" className="text ">
      <p id="cache2">
        <span id="cache3">{12}</span>
      </p>
    </div>
  </div>
);

export const DatePicker: React.FC<{}> = ({}) => (
  <div>
     {weekdays.map(e=><div>{e}</div>)} 
     <div>NIck</div>
    <Day num={13}></Day>
  </div>
);
