import style from "./styles/addHabitCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/reducers/habits.reducer.js";
import { useRef } from "react";
export default function AddHabitCard({ handleAddHabit }) {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const typeRef = useRef();
  
  //add habits to databse and reducers.
  const addHabitForm = (e) => {
    e.preventDefault();
    //specify the habit details
    const habit = {
      name: nameRef.current.value,
      started: String(new Date()).slice(0, 15),
      type: typeRef.current.checked ? "to-do" : "not-to-do",
    };

    //dispatch the action to add habit to database and entityAdapter
    dispatch(addHabit(habit));
    //hide the add habit card
    handleAddHabit();
  };

  return (
    <div className={style.main_container}>
      <form
        className={style.add_habit_container}
        action="/"
        onSubmit={addHabitForm}
      >
        <div className={style.header}>
          <h1>
            Add Habit
            <FontAwesomeIcon
              onClick={handleAddHabit}
              icon={faX}
              className={style.cross_btn}
            />
          </h1>
          <h3>Tackle your goals in daily doses</h3>
        </div>

        <hr />
        <div className={style.habit_name_container}>
          <h2>Name this habit.</h2>
          <input ref={nameRef}  type="text" placeholder="Habit name" required />
        </div>
        <div className={style.habit_type_container}>
          <h2>Habit type</h2>
          <span className={style.habit_type}>
            <input
              ref={typeRef}
              type="radio"
              defaultChecked
              name="habit_type"
              value="to-do"
            />
            To-Do
          </span>
          <br />
          <span className={style.habit_type}>
            <input type="radio" name="habit_type" value="not-to-do" />
            Not-To-Do
          </span>
        </div>
        <button className={style.add_habit_btn}>Add Habit</button>
      </form>
    </div>
  );
}
