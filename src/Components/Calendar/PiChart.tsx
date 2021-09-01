import React from "react";
import "./pichart.css";

export const PiChart = ({
  text,
  fraction,
}: {
  text: string;
  fraction: string;
}) => (
  <div className="circle">
    <span className="ccenter">{text}</span>
    <span className="ccenter">{fraction}</span>



    <label>Nick</label>
  </div>
);
