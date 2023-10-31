import style from "./styles/HabitProgressBars.module.css";

export default function HabitProgressBars() {
  return (
    <div className={style.progress_bar_container}>
      <div className={style.habit_progress}>
        <div className={style.habit_name_container}>
          <span className={style.colour_dot}></span>
          <span>water</span>
        </div>
        <div className={style.progress_bar}>
          <div className={style.progress}></div>
        </div>
        <div>2/2</div>
      </div>
      <div className={style.habit_progress}>
        <div className={style.habit_name_container}>
          <span className={style.colour_dot}></span>
          <span>water</span>
        </div>
        <div className={style.progress_bar}>
          <div className={style.progress}></div>
        </div>
        <div>2/2</div>
      </div>
    </div>
  );
}
