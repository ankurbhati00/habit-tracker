import style from "./styles/WeeklyHabitSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import { habitsSelector } from "../redux/reducers/habits.reducer.js";
import { weeklyHabitsSelector } from "../redux/reducers/weeklyHabits.reducer.js";
import { markHabit } from "../redux/reducers/weeklyHabits.reducer.js";
export default function WeeklyHabitSelector({ currentWeek }) {
  console.log(currentWeek)
  const dispatch = useDispatch();
  const allWeeks = useSelector(weeklyHabitsSelector.selectAll);
  //get all the habits from entity adapter
  const value = useSelector(habitsSelector.selectAll);
  const days = Object.keys(currentWeek);
  let date1 = new Date(currentWeek.end).getTime();
  const habits = value.filter((elm) => {
    // habits start date
    let date2 = new Date(elm.started).getTime();
    if (date2 <= date1) {
      return true;
    }
    return false;
  });

  // handle click ckeckboxes
  const habitCheckbox = (e, habitId) => {
    //get the date of habit mark
    const date = e.target.getAttribute("data-markdate");
    const currentWeekIndex = allWeeks.indexOf(currentWeek);
    let modifiedWeek = { ...currentWeek };
    modifiedWeek[date] = [habitId, ...modifiedWeek[date]];
    dispatch(markHabit({habitId, modifiedWeek, currentWeekIndex}))
    
    
  };
  return (
    <table className={style.weekly_habit_container}>
      <thead>
        <tr>
          <td></td>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
          <td>Sun</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {/* list all the habits to the container */}
        {habits.map((habit) => (
          <tr key={habit.start} className={style.habit_container}>
            <td>
              <span
                className={style.colour_dot}
                // change background colour according to habit
                style={{ backgroundColor: habit.colour }}
              ></span>
              <span className={style.habit_name}>{habit.name}</span>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[0]}
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[2]}
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[3]}
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[4]}
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[5]}
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[6]}
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[7]}
              ></div>
            </td>
            <td className={style.habit_frequency}>2/2</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
