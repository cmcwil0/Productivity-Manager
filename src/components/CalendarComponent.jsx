import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns";

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
            {WEEKDAYS.map((day) => {
                return <div key={day}>{day}</div>;
            })}
            {daysInMonth.map((day, index) => {
                return <div key={index} className="days-in-month">{format(day, "d")}</div>;
            })}
        </div>
      </div>
    </div>
  )
}

export default CalendarComponent
