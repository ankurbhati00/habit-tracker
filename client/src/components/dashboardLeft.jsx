import style from "./styles/dashboardLeft.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { WeeklyActivityCard } from "./weeklyActivityCard";
import { MonthlyActivityCard } from "./monthlyActivityCard";
import { useSelector } from "react-redux";
import { weeklyHabitsSelector } from "../redux/reducers/weeklyHabits.reducer";
import { useState } from "react";
export default function DashboardLeft({ handleAddHabit }) {
  const [currentView, setCurrentView] = useState("week");
  return (
    <section className={style.dashboard_left}>
      <div className={style.dashboard_left_header}>
        <h1>Good afternoon , Ankur</h1>
        <button className={style.bedtime_btn}>Add Your bedtime</button>
      </div>
      {/* show details by week month and yearly */}
      <div className={style.date_range_container}>
        <div className={style.date_range_buttons_container}>
          <button
            className={style.date_range_button}
            onClick={() => setCurrentView("week")}
            style={
              currentView === "week" ? { backgroundColor: "white" } : undefined
            }
          >
            Week
          </button>
          <button
            className={style.date_range_button}
            onClick={() => setCurrentView("month")}
            style={
              currentView === "month" ? { backgroundColor: "white" } : undefined
            }
          >
            Month
          </button>
          {/* <button className={style.date_range_button}>Year</button>
          <button className={style.date_range_button}>All Time</button> */}
        </div>
        <button className={style.add_habit_btn} onClick={handleAddHabit}>
          <FontAwesomeIcon icon={faPlus} /> Add Habit
        </button>
      </div>
      {/* show activity by the user prefrence by week, by months , by year */}
      {currentView === "week" ? <WeeklyActivityCard /> : undefined}
      {currentView === "month" ? <MonthlyActivityCard /> : undefined}
    </section>
  );
}
