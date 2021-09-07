import React from "react";
import "./index.scss";

export const PiChart = ({
  strClass,
  text,
  fraction,
}: {
  strClass: string;
  text: string;
  fraction: string;
}) => (
  <div className={`semi-donut ${strClass}`}>
    <p>
      {text}
      <br></br>
      <br></br>
      {fraction}
    </p>
  </div>
);
