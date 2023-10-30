import style from "./styles/dashboard_left.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ActivityCard } from "./activityCard";

export default function DashboardLeft() {
  return (
    <section className={style.dashboard_left}>
      <div className={style.dashboard_left_header}>
        <h1>Good afternoon , Ankur</h1>
        <button className={style.bedtime_btn}>Add Your bedtime</button>
      </div>
      {/* show details by week month and yearly */}
      <div className={style.date_range_container}>
        <div className={style.date_range_buttons_container}>
          <button className={style.date_range_button}>Week</button>
          <button className={style.date_range_button}>Month</button>
          <button className={style.date_range_button}>Year</button>
          <button className={style.date_range_button}>All Time</button>
        </div>
        <button className={style.add_habit_btn}>
          <FontAwesomeIcon icon={faPlus} /> Add Habit
        </button>
      </div>
      {/* show activity by the user prefrence by week, by months , by year */}
      <ActivityCard />
    </section>
  );
}
