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
  //find the current week
  const currentDate = String(new Date()).slice(0, 15);
  const currentWeekFound = weeks.find((elm) => elm[currentDate] !== undefined);
  const [currentWeek, setCurrentWeek] = useState(currentWeekFound);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(currentWeekIndex);
  useEffect(() => {
    let currentWeekIndex = weeks.indexOf(currentWeekFound);
  console.log('hii')
  },[currentWeekFound]);
  
  return (
    <>
      <div className={style.week_range_container}>
        <div className={style.week_range_btns}>
          <button className={style.week_decrease_btn}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={style.week_increase_btn}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        {/* find start week and end week and set */}
        <div className={style.week_range_header}>
          {currentWeek?.start.slice(0, 11)} - {currentWeek?.end.slice(0, 11)}
        </div>
        <div className={style.graph_list_btn_conatainer}>
          <button className={style.graph_btn}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          <button className={style.list_btn}>
            <FontAwesomeIcon icon={faGrip} />
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
      <WeeklyHabitSelector />
      <HabitProgressBars />
    </>
  );
}
