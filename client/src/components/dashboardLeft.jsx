import style from "./styles/dashboardLeft.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { WeeklyActivityCard } from "./weeklyActivityCard";
import { MonthlyActivityCard } from "./monthlyActivityCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/reducers/user.reducer";
export default function DashboardLeft({ handleAddHabit }) {
  const [currentView, setCurrentView] = useState("week");
  const user = useSelector(userSelector);
  const [greet, setGreet] = useState("Good morning");
  useEffect(() => {
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    if (hour <= 12) {
      if (hour === 12) {
        setGreet("Good afternoon");
      } else {
        setGreet("Good morning");
      }
    } else if (hour > 12 && hour <= 16) {
      setGreet("Good afternoon");
    } else if (hour > 16 && hour < 21) {
      setGreet("Good evening");
    } else {
      setGreet("Good night");
    }
  }, []);

  return (
    <section className={style.dashboard_left}>
      <div className={style.dashboard_left_header}>
        <h1>
          {greet} , <span className={style.user_name}>{user.name}</span>
        </h1>
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
