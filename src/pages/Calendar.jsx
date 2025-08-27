import '../css/Calendar.css'
import CalendarComponent from '../components/CalendarComponent'
import { addDays, subDays } from "date-fns"

function Calendar() {
  return (
    <div className='calendar'>
        <CalendarComponent />
    </div>
  )
}

export default Calendar
