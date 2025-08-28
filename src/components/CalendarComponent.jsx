import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, closestIndexTo, isToday } from "date-fns";

import clsx from "clsx";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


const CalendarComponent = () => {
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    });

    const startingDayIndex = getDay(firstDayOfMonth);

  return (
    <div className="calendar-main">
      <div className="calendar-container">

        <h2 className="calendar-date">{format(currentDate, "MMMM yyyy")}</h2>

        <div className="calendar-grid">
            {WEEKDAYS.map((day) => { //creates header for each day in week
                return <div key={day}>{day}</div>;
            })}

            {Array.from({length: startingDayIndex}).map((_, index) => { //creates an array based on the first day of the month (if 3 than creates 3 empty slots)
                return <div key={`empty-${index}`} className="empty-days"/>; //empty divs act as empty placeholders for gap based on first day of month
            })}

            {daysInMonth.map((day, index) => { //creates div (box) for each day in month
                return <div key={index} className={clsx("days-in-month", {"is-current-day": isToday(day)})}>{format(day, "d")}</div>; //clsx highlights current day if today is day
            })}
        </div>
      </div>
    </div>
  )
}

export default CalendarComponent
