import style from './styles/WeeklyHabitSelector.module.css';

export default function WeeklyHabitSelector() {
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
        <tr className={style.habit_container}>
          <td>
            <span className={style.colour_dot}></span>
            <span className={style.habit_name}>Water</span>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_frequency}>2/2</td>
        </tr>
        <tr className={style.habit_container}>
          <td>
            <span className={style.colour_dot}></span>
            <span className={style.habit_name}>Water</span>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_frequency}>2/2</td>
        </tr>
        <tr className={style.habit_container}>
          <td>
            <span className={style.colour_dot}></span>
            <span className={style.habit_name}>Water</span>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_checkbox_container}>
            <div className={style.habit_checkbox}></div>
          </td>
          <td className={style.habit_frequency}>2/2</td>
        </tr>
      </tbody>
    </table>
  );
}
