import { useSelector } from "react-redux";
import style from "./styles/HabitProgressBars.module.css";
import { habitsSelector } from "../redux/reducers/habits.reducer";
export default function HabitProgressBars({ currentWeek }) {
  const habits = useSelector(habitsSelector.selectAll);



  return (
    <div className={style.progress_bar_container}>
      {habits.map((habit) => (
        <div className={style.habit_progress}>
          <div className={style.habit_name_container}>
            <span className={style.colour_dot}></span>
            <span>{habit.name}</span>
          </div>
          <div className={style.progress_bar}>
            <div className={style.progress}></div>
          </div>
          <div>
            {/* count how many days habit is done */}
            {(() => {
              let count = 0;
              for (let arr of Object.values(currentWeek)) {
                if (typeof arr == "object" && arr.includes(habit.id)) {
                  count++;
                }
              }
              return count;
            })()}
            /7
          </div>
        </div>
      ))}
    </div>
  );
}
