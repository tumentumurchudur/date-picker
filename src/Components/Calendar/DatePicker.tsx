import { stringify, v4 } from "uuid";
import React, { useEffect, useState, FC, SetStateAction } from "react";
import moment, { Moment } from "moment";
import "./calendar.css";
import { type } from "os";

export const DatePicker: React.FC<{}> = ({}) => {
  const [calendar, setCalandar] = useState([]);
  const [value, setValue] = useState<Moment>(moment());
  const m = moment();
  const nextMonth = () => {
    m.clone().add(1, "days").startOf("month").day();;

    setValue(m);
    console.log(value.format("MMM") + " " + value.format("YYYY"));
  };

  const previousMonth = () => {
    m.subtract(1, "days").startOf("month").day();
    setValue(m);
    console.log(value.format("MMM") + " " + value.format("YYYY"));
  };

  const CalendarNavigation = () => (
    <div key={`row_${v4()}`} className="rTableRow">
      <div key={`cell_${v4()}`} className="rTableCell">
        <div key={`container_${v4()}`} className="flex-container">
          <span onClick={() => previousMonth()}>
            <h3 className="hand">{"<"}</h3>
          </span>
          <h3>{value.format("MMM") + " " + value.format("YYYY")}</h3>

          <span onClick={() => nextMonth()}>
            <h3 className="hand">{">"}</h3>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div key={`table_${v4()}`} className="rTable">
      <div key={`table_${v4()}`} className="rTable">
        <CalendarNavigation></CalendarNavigation>
        {/* <CalendarBody></CalendarBody> */}
        {/* <CalendarBody
          daysInMonth={value}
          weekday={m.add(0, "days").startOf("month").day()}
        ></CalendarBody> */}
      </div>
    </div>
  );
};

// export const DatePicker: React.FC<{}> = ({}) => {
//   const [calendar, setCalandar] = useState([]);
//   const [value, setValue] = useState<>(moment());
//   useEffect(() => {
//     const calendar = (days: number, weekday: number, count = 0) =>
//       Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0)).map(
//         (row, i) =>
//           row.map((e, j) =>
//             row.length * i + j >= weekday && days > count ? ++count : e
//           )
//       );
//     console.log("Here is the value:  " + value.toString());
//     // console.log( value.daysInMonth(),value.format("MMM"), value.format("YYYY"))
//     //     month: m.format("MMM"),
//     //     year: m.format("YYYY"),
//     //     yearmonth: m.format("YYYY-MM"),
//   }, [value]);
//   const now = moment();
//   const startDay = now.clone().startOf("month").startOf("week");
//   const endDay = now.clone().endOf("month").endOf("week");
//   // const handelClick = () => {
//   //   setValue({
//   //     startweekday: m.add(0, "days").startOf("month").day(),
//   //     days: m.daysInMonth(),
//   //     month: m.format("MMM"),
//   //     year: m.format("YYYY"),
//   //     yearmonth: m.format("YYYY-MM"),
//   //   });
//   // };
//   // const [value, setValue] = useState<any>(moment());

//   //  const [value, setValue] = useState<any>(moment());

//   const nextMonth = () => setValue(value.add(1, "days").startOf("month").day());

//   const previousMonth = () =>
//     setValue(value.subtract(1, "days").startOf("month").day());

//   // const Day = ({
//   //   num,
//   //   isBefore,
//   //   date,
//   // }: {
//   //   num: number;
//   //   isBefore: boolean;
//   //   date: string;
//   // }) => (
//   //   <div
//   //     key={date}
//   //     onClick={() => alert(date)}
//   //     className={isBefore ? "day pastday noHover" : "day hand"}
//   //   >
//   //     <span id={`day_${v4()}`} className="text">
//   //       {num}
//   //     </span>
//   //     <span id={`frac_${v4()}`} className="text2">
//   //       {isBefore ? null : "4/16"}
//   //     </span>
//   //   </div>
//   // );

//   const CalendarNavigation = () => (
//     <div key={`row_${v4()}`} className="rTableRow">
//       <div key={`cell_${v4()}`} className="rTableCell">
//         <div key={`container_${v4()}`} className="flex-container">
//           <span onClick={() => previousMonth()}>
//             <h3 className="hand">{"<"}</h3>
//           </span>
//           <h3>{value.format("MMM") + " " + value.format("YYYY")}</h3>

//           <span onClick={() => nextMonth()}>
//             <h3 className="hand">{">"}</h3>
//           </span>
//         </div>
//       </div>
//     </div>
//   );

//   // const CalendarBody = ({ count = 0 }: { count?: number }) => (
//   //   <div key={`${v4()}`} className="rTable">
//   //     <div key={`${v4()}`} className="rTableRow">
//   //       {moment.weekdaysShort().map((e) => (
//   //         <div key={`${v4()}`} className="rTableCell">
//   //           {e}
//   //         </div>
//   //       ))}
//   //     </div>

//   //     {Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0))
//   //       .map((row, i) =>
//   //         row.map((e, j) =>
//   //           row.length * i + j >= value.add(0, "days").startOf("month").day() &&
//   //           value.daysInMonth() > count
//   //             ? ++count
//   //             : e
//   //         )
//   //       )
//   //       .map((row) => (
//   //         <div key={`${v4()}`} className="rTableRow">
//   //           {row.map((e) =>
//   //             e > 0 ? (
//   //               <div key={`${v4()}`} className="rTableCell">
//   //                 <Day
//   //                   num={e}
//   //                   isBefore={moment(
//   //                     `${value.format("YYYY-MM")}-${e
//   //                       .toString()
//   //                       .padStart(2, "0")}`
//   //                   ).isBefore(moment().format("YYYY-MM-DD"))}
//   //                   date={`${value.format("YYYY-MM")}-${e
//   //                     .toString()
//   //                     .padStart(2, "0")}`}
//   //                 ></Day>
//   //               </div>
//   //             ) : (
//   //               <div key={`${v4()}`} className="rTableCell">
//   //                 <div className="hidden">{}</div>
//   //               </div>
//   //             )
//   //           )}
//   //         </div>
//   //       ))}
//   //   </div>
//   // );

//   return (
//     <div key={`table_${v4()}`} className="rTable">
//       <div key={`table_${v4()}`} className="rTable">
//         <CalendarNavigation></CalendarNavigation>
//         {/* <CalendarBody></CalendarBody> */}
//         {/* <CalendarBody
//           daysInMonth={value}
//           weekday={m.add(0, "days").startOf("month").day()}
//         ></CalendarBody> */}
//       </div>
//     </div>
//   );
// };

//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
// import moment from "moment";
// import { v4 } from "uuid";
// import React, { useState } from "react";
// import "./calendar.css";

// const m = moment();

// const Day = ({
//   num,
//   isBefore,
//   date,
// }: {
//   num: number;
//   isBefore: boolean;
//   date: string;
// }) => (
//   <div
//     key={date}
//     onClick={() => alert(date)}
//     className={isBefore ? "day pastday noHover" : "day hand"}
//   >
//     <span id={`day_${v4()}`} className="text">
//       {num}
//     </span>
//     <span id={`frac_${v4()}`} className="text2">
//       {isBefore ? null : "4/16"}
//     </span>
//   </div>
// );

// const CalendarBody = ({
//   daysInMonth,
//   weekday,
//   count = 0,
// }: {
//   daysInMonth: number;
//   weekday: number;
//   count?: number;
// }) => (
//   <div key={`${v4()}`} className="rTable">
//     <div key={`${v4()}`} className="rTableRow">
//       {moment.weekdaysShort().map((e) => (
//         <div key={`${v4()}`} className="rTableCell">
//           {e}
//         </div>
//       ))}
//     </div>

//     {Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0))
//       .map((row, i) =>
//         row.map((e, j) =>
//           row.length * i + j >= weekday && daysInMonth > count ? ++count : e
//         )
//       )
//       .map((row) => (
//         <div key={`${v4()}`} className="rTableRow">
//           {row.map((e) =>
//             e > 0 ? (
//               <div key={`${v4()}`} className="rTableCell">
//                 <Day
//                   num={e}
//                   isBefore={moment(
//                     `${m.format("YYYY-MM")}-${e.toString().padStart(2, "0")}`
//                   ).isBefore(moment().format("YYYY-MM-DD"))}
//                   date={`${m.format("YYYY-MM")}-${e
//                     .toString()
//                     .padStart(2, "0")}`}
//                 ></Day>
//               </div>
//             ) : (
//               <div key={`${v4()}`} className="rTableCell">
//                 <div className="hidden">{}</div>
//               </div>
//             )
//           )}
//         </div>
//       ))}
//   </div>
// );

// const CalendarNavigation = ({ set }: { set: any }) => (
//   <div key={`row_${v4()}`} className="rTableRow">
//     <div key={`cell_${v4()}`} className="rTableCell">
//       <div key={`container_${v4()}`} className="flex-container">
//         <span
//           onClick={() =>
//             set(m.subtract(1, "months").startOf("month").daysInMonth())
//           }
//         >
//           <h3 className="hand">{"<"}</h3>
//         </span>
//         <h3>{m.format("MMM") + " " + m.format("Y")}</h3>

//         <span
//           onClick={() => set(m.add(1, "months").startOf("month").daysInMonth())}
//         >
//           <h3 className="hand">{">"}</h3>
//         </span>
//       </div>
//     </div>
//   </div>
// );

// export const DatePicker: React.FC<{}> = ({}) => {
//   const [value, setValue] = useState<any>(m.daysInMonth());

//   return (
//     <div key={`table_${v4()}`} className="rTable">
//       <div key={`table_${v4()}`} className="rTable">
//         <CalendarNavigation set={setValue}></CalendarNavigation>
//         <CalendarBody
//           daysInMonth={value}
//           weekday={m.add(0, "days").startOf("month").day()}
//         ></CalendarBody>
//       </div>
//     </div>
//   );
// };
