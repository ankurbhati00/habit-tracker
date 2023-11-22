import style from "./styles/WeeklyHabitSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import { habitsSelector } from "../redux/reducers/habits.reducer.js";
import { weeklyHabitsSelector } from "../redux/reducers/weeklyHabits.reducer.js";
import { markHabit } from "../redux/reducers/weeklyHabits.reducer.js";
export default function WeeklyHabitSelector({ currentWeek }) {
  console.log(currentWeek);
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

    //dont mark next days habits
    if (new Date().getTime() < new Date(date).getTime()) {
      return;
    }
    const currentWeekId = currentWeek.id;
    let modifiedWeek = { ...currentWeek };
    //toggle the mark
    if (modifiedWeek[date].includes(habitId)) {
      //if habit is present
      let i = modifiedWeek[date].indexOf(habitId);
      let tempArr = [...modifiedWeek[date]];
      tempArr.splice(i, 1);
      modifiedWeek[date] = tempArr;
      dispatch(markHabit({ modifiedWeek, currentWeekId }));
    } else {
      //habit is not present
      modifiedWeek[date] = [habitId, ...modifiedWeek[date]];
      dispatch(markHabit({ modifiedWeek, currentWeekId }));
    }
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
                style={
                  currentWeek[days[0]].includes(habit.id)
                    ? { backgroundColor: "#579f57" }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[2]}
                style={
                  currentWeek[days[2]].includes(habit.id)
                    ? { backgroundColor: "#579f57" }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[3]}
                style={
                  currentWeek[days[3]].includes(habit.id)
                    ? { backgroundColor: "#579f57" }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[4]}
                style={
                  currentWeek[days[4]].includes(habit.id)
                    ? { backgroundColor: "#579f57" }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[5]}
                style={
                  currentWeek[days[5]].includes(habit.id)
                    ? { backgroundColor: "#579f57" }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[6]}
                style={
                  currentWeek[days[6]].includes(habit.id)
                    ? { backgroundColor: "#579f57" }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit.id)}
                data-markdate={days[7]}
                style={
                  currentWeek[days[7]].includes(habit.id)
                    ? { backgroundColor: "#579f57" }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_frequency}>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
