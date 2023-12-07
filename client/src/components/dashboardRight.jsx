import style from "./styles/dashboardRight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { HabitCard } from "./habitCard";
import { useDispatch, useSelector } from "react-redux";
import { habitsSelector } from "../redux/reducers/habits.reducer";
import {
  markHabit,
  weeklyHabitsSelector,
} from "../redux/reducers/weeklyHabits.reducer.js";
import { useEffect, useState } from "react";
import { userSelector } from "../redux/reducers/user.reducer.js";

export default function DashboardRight() {
  const allHabits = useSelector(habitsSelector.selectAll);
  const [currentDate, setCurrentDate] = useState(null);
  const [currentDay, setCurrentDay] = useState();
  const [currentMonth, setCurrentMonth] = useState();
  const weeklyHabits = useSelector(weeklyHabitsSelector.selectAll);
  const { userId } = useSelector(userSelector);
  const dispatch = useDispatch();
  //set current date initially
  useEffect(() => {
    const date = new Date();
    setCurrentDay(date.getDate());
    setCurrentMonth(date.getMonth());
    setCurrentDate(String(date).slice(0, 15));
  }, []);

  //set current week
  useEffect(() => {
    const week = weeklyHabits.find((e) => {
      if (e[currentDate] !== undefined) return true;
      else return false;
    });
    // setCurrentWeek(week);
  }, [currentDate]);

  //slide date
  const slideDate = (action) => {
    const date = new Date(currentDate);

    if (action === "next") {
      //check if current date is
      if (
        date.getDate() >= new Date().getDate() &&
        date.getMonth() >= new Date().getMonth()
      ) {
        return;
      }
      const newDate = new Date(
        date.getFullYear(),
        currentMonth,
        currentDay + 1
      );
      setCurrentDate(String(newDate).slice(0, 15));
      setCurrentDay(currentDay + 1);
    } else if (action === "prev") {
      //check if current date is before user initialy set weeklyHabits
      if (date <= new Date(weeklyHabits[0].start)) {
        return;
      }
      //else
      const newDate = new Date(
        date.getFullYear(),
        currentMonth,
        currentDay - 1
      );
      setCurrentDate(String(newDate).slice(0, 15));
      setCurrentDay(currentDay - 1);
    }
  };

  //mark habit as done
  const markHabitFunc = (currentWeek, habitId) => {
    //mark the habit
    dispatch(markHabit({ currentWeek, date: currentDate, habitId, userId }));
  };

  return (
    <aside className={style.dashboard_right}>
      <div className={style.dashboard_header}>
        <h2>{String(currentDate).slice(0, 10)}</h2>
        <span className={style.header_btns} onClick={() => slideDate("prev")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <span className={style.header_btns} onClick={() => slideDate("next")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
      {/* right side habits card */}
      <div className={style.all_habits_container}>
        {allHabits.map((h) => (
          <HabitCard
            key={h._id}
            habit={h}
            markHabitFunc={markHabitFunc}
            currentDate={currentDate}
          />
        ))}
      </div>
    </aside>
  );
}
