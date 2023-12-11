import style from "./styles/weeklyHabitSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import { habitsSelector } from "../redux/reducers/habits.reducer.js";
import { markHabit } from "../redux/reducers/weeklyHabits.reducer.js";
import { userSelector } from "../redux/reducers/user.reducer.js";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
export default function WeeklyHabitSelector({ currentWeek }) {
  const dispatch = useDispatch();
  const { userId } = useSelector(userSelector);
  //get all the habits from entity adapter
  const value = useSelector(habitsSelector.selectAll);
  const days = Object.keys(currentWeek);
  let date1 = new Date(currentWeek.end).getTime();
  //filter the habits which is created before this week
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
      toast("Can not mark nex day's habit !");
      return;
    }
    //show confetti effect
    confetti({
      particleCount: 140,
      spread: 180,
    });
    dispatch(markHabit({ currentWeek, date, habitId, userId }));
  };

  //count days of habit that how many days habit is done
  const countDay = (habitId) => {
    let count = 0;
    for (let arr of Object.values(currentWeek)) {
      if (typeof arr == "object" && arr.includes(habitId)) {
        count++;
      }
    }
    return count;
  };
  return (
    <table className={style.weekly_habit_container}>
      <thead>
        <tr>
          <td></td>
          <td>{days[0].substring(0, 3)}</td>
          <td>{days[2].substring(0, 3)}</td>
          <td>{days[3].substring(0, 3)}</td>
          <td>{days[4].substring(0, 3)}</td>
          <td>{days[5].substring(0, 3)}</td>
          <td>{days[6].substring(0, 3)}</td>
          <td>{days[7].substring(0, 3)}</td>

          <td></td>
        </tr>
      </thead>
      <tbody>
        {/* list all the habits to the container */}
        {habits.map((habit) => (
          <tr key={habit._id}>
            <td>
              <span
                className={style.colour_dot}
                // change background colour according to habit
                style={{ backgroundColor: habit.colour }}
              ></span>
              <span>{habit.name}</span>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit._id)}
                data-markdate={days[0]}
                style={
                  currentWeek[days[0]].includes(habit._id)
                    ? { backgroundColor: habit.colour }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit._id)}
                data-markdate={days[2]}
                style={
                  currentWeek[days[2]].includes(habit._id)
                    ? { backgroundColor: habit.colour }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit._id)}
                data-markdate={days[3]}
                style={
                  currentWeek[days[3]].includes(habit._id)
                    ? { backgroundColor: habit.colour }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit._id)}
                data-markdate={days[4]}
                style={
                  currentWeek[days[4]].includes(habit._id)
                    ? { backgroundColor: habit.colour }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit._id)}
                data-markdate={days[5]}
                style={
                  currentWeek[days[5]].includes(habit._id)
                    ? { backgroundColor: habit.colour }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit._id)}
                data-markdate={days[6]}
                style={
                  currentWeek[days[6]].includes(habit._id)
                    ? { backgroundColor: habit.colour }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_checkbox_container}>
              <div
                className={style.habit_checkbox}
                onClick={(e) => habitCheckbox(e, habit._id)}
                data-markdate={days[7]}
                style={
                  currentWeek[days[7]].includes(habit._id)
                    ? { backgroundColor: habit.colour }
                    : undefined
                }
              ></div>
            </td>
            <td className={style.habit_frequency}>
              {/* count how many days habit is done */}
              {`${countDay(habit._id)}/7`}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
