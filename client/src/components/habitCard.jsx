import style from "./styles/habitCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weeklyHabitsSelector } from "../redux/reducers/weeklyHabits.reducer";
import { deleteHabit } from "../redux/reducers/habits.reducer";
export function HabitCard({ habit, markHabitFunc, currentDate }) {
  const [currentWeek, setCurrentWeek] = useState();
  const [isHabitDone, setIsHabitDone] = useState(false);
  const dispatch = useDispatch();
  const weeklyHabits = useSelector(weeklyHabitsSelector.selectAll);
  useEffect(() => {
    const week = weeklyHabits.find((e) => {
      if (e[currentDate] !== undefined) return true;
      else return false;
    });
    setCurrentWeek(week);
  }, [currentDate, weeklyHabits]);
  //check habit as done or not done
  useEffect(() => {
    if (currentWeek) {
      const status = currentWeek[currentDate]?.includes(habit._id);
      setIsHabitDone(status);
    }
  });
  //delete habits
  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit._id));
  };

  return (
    <div className={style.habit_container}>
      <div
        className={style.colour_dot}
        style={{ backgroundColor: habit.colour }}
      ></div>
      <div
        className={style.habit}
        // change backgroundColor if habit is marked as done or not done

        style={
          isHabitDone
            ? {
                backgroundColor: habit.colour,
                borderLeftColor: habit.colour,
                color: "white",
                fontWeight: "700",
              }
            : { borderLeftColor: habit.colour }
        }
      >
        <span className={style.habit_name}>{habit.name}</span>
        <span className={style.habit_info}>
          &nbsp; &nbsp; &nbsp;&nbsp;
          <FontAwesomeIcon onClick={handleDeleteHabit} icon={faXmark} />
        </span>
        <button
          className={style.mark_complete_btn}
          onClick={() => markHabitFunc(currentWeek, habit._id)}
          style={isHabitDone ? { border: "none", color: "white" } : undefined}
        >
          {habit.type === "to-do"
            ? isHabitDone
              ? "Completed"
              : "Mark Complete"
            : isHabitDone
            ? "Avoided"
            : "I Avoided This"}
        </button>
      </div>
    </div>
  );
}
