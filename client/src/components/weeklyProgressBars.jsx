import { useSelector } from "react-redux";
import style from "./styles/HabitProgressBars.module.css";
import { habitsSelector } from "../redux/reducers/habits.reducer";

export default function WeeklyProgressBars({ currentWeek }) {
  const allHabits = useSelector(habitsSelector.selectAll);
  //filter the habits which is created before this week
  let date1 = new Date(currentWeek.end).getTime();
  const habits = allHabits.filter((elm) => {
    // habits start date
    let date2 = new Date(elm.started).getTime();
    if (date2 <= date1) {
      return true;
    }
    return false;
  });

  //count the days of habit that how many days habit is done
  const countDay = (habitId) => {
    let count = 0;
    for (let arr of Object.values(currentWeek)) {
      if (typeof arr == "object" && arr.includes(habitId)) {
        count++;
      }
    }
    return count;
  };

  //track the progress of habit in presentage
  const progress = (habitId) => {
    let days = countDay(habitId);
    return (days / 7) * 100;
  };

  return (
    <div className={style.progress_bar_container}>
      {habits.map((habit) => (
        <div className={style.habit_progress}>
          <div className={style.habit_name_container}>
            <span className={style.colour_dot} style={{backgroundColor:habit.colour}}></span>
            <span>{habit.name}</span>
          </div>
          <div className={style.progress_bar}>
            <div
              className={style.progress}
              style={{ width: `${progress(habit._id)}%` ,backgroundColor:habit.colour }}
            ></div>
          </div>
          <div>
            {/* show the habit progress */}
            {`${countDay(habit.id)}/7`}
          </div>
        </div>
      ))}
    </div>
  );
}
