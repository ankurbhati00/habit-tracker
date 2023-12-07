import { useSelector } from "react-redux";
import style from "./styles/monthlyActivityCard.module.css";
import MonthlyProgressBars from "./monthlyProgressBars.jsx";
import { habitsSelector } from "../redux/reducers/habits.reducer";
import { useEffect, useState } from "react";
import { weeklyHabitsSelector } from "../redux/reducers/weeklyHabits.reducer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

export function MonthlyActivityCard() {
  const allHabits = useSelector(weeklyHabitsSelector.selectAll);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentMonthsHabit, setCurrentMonthsHabit] = useState({});
  const [presentMonthNumber, setPresentMonthNumber] = useState(
    new Date().getMonth()
  );
  const filterHabitsByMonth = (current) => {
    //filter the all habits of this month.
    const monthlyHabits = {};
    allHabits.map((h) => {
      for (let i in h) {
        //skip is keys is start or end
        if (i === "start" || i === "end" || i === "id") {
          continue;
        }
        //else compare and add to new monthlyHabits
        let date = new Date(i).toLocaleString("default", { month: "long" });
        if (date === current) {
          monthlyHabits[i] = h[i];
        }
      }
    });
    //set this months habits
    setCurrentMonthsHabit(monthlyHabits);
  };

  useEffect(() => {
    //set the current month initialy.
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    setCurrentMonth(month);
    //filter habits defalut by this month
    filterHabitsByMonth(month);
  }, []);

  useEffect(() => {
    filterHabitsByMonth(currentMonth);
  }, [currentMonth]);

  //handle months
  const date = new Date();
  const handleMonths = (action) => {
    if (action === "prev") {
      const newMonth = new Date(
        date.getFullYear(),
        presentMonthNumber - 1,
        date.getDay()
      ).toLocaleString("default", { month: "long" });
      setCurrentMonth(newMonth);
      setPresentMonthNumber(presentMonthNumber - 1);
    } else {
      const newMonth = new Date(
        date.getFullYear(),
        presentMonthNumber + 1,
        date.getDay()
      ).toLocaleString("default", { month: "long" });
      setCurrentMonth(newMonth);
      setPresentMonthNumber(presentMonthNumber + 1);
    }
  };

  return (
    <>
      <div className={style.month_range_container}>
        <div className={style.month_range_btns}>
          <button
            className={style.month_decrease_btn}
            onClick={() => handleMonths("prev")}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className={style.month_increase_btn}
            onClick={() => handleMonths("next")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        {/* set current month as deafault month */}
        <div className={style.month_range_header}>{currentMonth}</div>
        <div className={style.graph_list_btn_conatainer}>
          {/* <button className={style.graph_btn}>
            <FontAwesomeIcon icon={faGrip} />
          </button> */}
          <button>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
        </div>
      </div>
      {/* <div className={style.overoll_progress_bar_container}>
        <div className={style.progress_bar}>
          <div className={style.progress}></div>
        </div>
        <div className={style.progress_achived}>78% achived</div>
      </div> */}
      <hr style={{ marginTop: "15px" }} />
      <MonthlyProgressBars currentMonthsHabit={currentMonthsHabit} />
    </>
  );
}
