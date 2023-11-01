import style from "./styles/addHabitCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function AddHabitCard() {
  return (
    <aside className={style.add_habit_container}>
      <div className={style.header}>
        <h1>
          Add Habit <FontAwesomeIcon icon={faX} className={style.cross_btn} />
        </h1>
        <h3>Tackle your goals in daily doses</h3>
      </div>

      <hr />
      <div className={style.habit_name_container}>
        <h2>Name this habit.</h2>
        <input type="text" placeholder="Habit name" />
      </div>
      <div className={style.habit_type_container}>
        <h2>Habit type</h2>
        <span className={style.habit_type}>
          <input type="radio" defaultChecked name="habit_type" value="to-do" />{" "}
          To-Do
        </span>
        <span className={style.habit_type}>
          <input type="radio" name="habit_type" value="not-to-do" /> Not-To-Do
        </span>
      </div>
    </aside>
  );
}
