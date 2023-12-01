import { useSelector } from "react-redux";
import style from "./styles/HabitProgressBars.module.css";
import { habitsSelector } from "../redux/reducers/habits.reducer";

export default function MonthlyProgressBars({ currentMonthsHabit }) {
  const habits = useSelector(habitsSelector.selectAll);
  const daysInMonth = Object.keys(currentMonthsHabit).length;
  console.log(currentMonthsHabit)
  //count the days of habit that how many days habit is done
  const countDay = (habitId) => {
    let count = 0;
    for (let arr of Object.values(currentMonthsHabit)) {
      if (arr.includes(habitId)) {
        count++;
      }
    }
    return count;
  };

  //track the progress of habit in presentage
  const progress = (habitId) => {
    let days = countDay(habitId);
    return (days / daysInMonth) * 100;
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
              style={{ width: `${progress(habit.id)}%` }}
            ></div>
          </div>
          <div>
            {/* show the habit progress */}
            {`${countDay(habit.id)}/${daysInMonth}`}
          </div>
        </div>
      ))}
    </div>
  );
}
