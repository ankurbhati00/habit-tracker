import style from "./styles/ActivityCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleLeft,
  faAngleRight,
  faBarsStaggered,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";
import WeeklyHabitSelector from "./WeeklyHabitSelector";
import HabitProgressBars from "./habitProgressBars";
import { useSelector } from "react-redux";
import { weeklyHabitsSelector } from "../redux/reducers/weeklyHabits.reducer";
import { useEffect, useState } from "react";

export function ActivityCard() {
  const weeks = useSelector(weeklyHabitsSelector.selectAll);
  const [currentWeekIndex, setCurrentWeekIndex] = useState();
  const [currentWeek, setCurrentWeek] = useState(weeks[currentWeekIndex]);
  const [currentView, setCurrentView] = useState("graph"); //set current view and toggle to grid and progress bars
  useEffect(() => {
    //find the current week
    const currentDate = String(new Date()).slice(0, 15);
    const currentWeekFound = weeks.find(
      (elm) => elm[currentDate] !== undefined
    );
    let currentIndex = weeks.indexOf(currentWeekFound);
    //check current week found or not
    if (currentWeekFound) {
      setCurrentWeek(currentWeekFound);
      setCurrentWeekIndex(currentIndex);
    }
  }, [weeks]);

  const handleWeeks = (args) => {
    if (args === "prev") {
      // check if no weeks present before else change week to next week
      if (currentWeekIndex <= 0) {
        setCurrentWeekIndex(currentWeekIndex);
      } else {
        setCurrentWeekIndex(currentWeekIndex - 1);
        setCurrentWeek(weeks[currentWeekIndex - 1]);
      }
    } else {
      // check if no weeks present after else change week to next week
      if (currentWeekIndex === weeks.length - 1) {
        setCurrentWeekIndex(currentWeekIndex);
      } else {
        setCurrentWeekIndex(currentWeekIndex + 1);
        setCurrentWeek(weeks[currentWeekIndex + 1]);
      }
    }
  };

  return (
    <>
      <div className={style.week_range_container}>
        <div className={style.week_range_btns}>
          <button
            className={style.week_decrease_btn}
            onClick={() => handleWeeks("prev")}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className={style.week_increase_btn}
            onClick={() => handleWeeks("next")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        {/* find start week and end week and set */}
        <div className={style.week_range_header}>
          {currentWeek?.start.slice(0, 11)} - {currentWeek?.end.slice(0, 11)}
        </div>
        <div className={style.graph_list_btn_conatainer}>
          <button
            className={style.graph_btn}
            onClick={() => setCurrentView("graph")}
          >
            <FontAwesomeIcon icon={faGrip} />
          </button>
          <button
            className={style.list_btn}
            onClick={() => setCurrentView("list")}
          >
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
        </div>
      </div>
      <div className={style.overoll_progress_bar_container}>
        <div className={style.progress_bar}>
          <div className={style.progress}></div>
        </div>
        <div className={style.progress_achived}>78% achived</div>
      </div>
      <hr />
      {currentWeek && currentView == "graph" ? (
        <WeeklyHabitSelector currentWeek={currentWeek} />
      ) : undefined}
      {currentWeek && currentView == "list" ? (
        <HabitProgressBars currentWeek={currentWeek} />
      ) : undefined}
    </>
  );
}
