import style from "./styles/dashboardRight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import fire_png from "../assets/streaks_fire.png";
export default function DashboardRight() {
  return (
    <aside className={style.dashboard_right}>
      <div className={style.dashboard_header}>
        <h2>Tue, Oct 12</h2>
        <span className={style.header_btns}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <span className={style.header_btns}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
      {/* right side habits card */}
      <div className={style.all_habits_container}>
        <div className={style.habit_container}>
          <div className={style.colour_dot}></div>
          <div className={style.habit}>
            <span className={style.habit_name}>water</span>
            <span className={style.habit_info}>
              2&nbsp; <img src={fire_png} />
              &nbsp; <FontAwesomeIcon icon={faEllipsisVertical} />
            </span>
            <button className={style.mark_complete_btn}>Mark Complete</button>
          </div>
        </div>

        <div className={style.habit_container}>
          <div className={style.colour_dot}></div>
          <div className={style.habit}>
            <span className={style.habit_name}>water</span>
            <span className={style.habit_info}>
              2&nbsp; <img src={fire_png} />
              &nbsp; <FontAwesomeIcon icon={faEllipsisVertical} />
            </span>
            <button className={style.mark_complete_btn}>Mark Complete</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
