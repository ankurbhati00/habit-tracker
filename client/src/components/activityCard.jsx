import style from "./styles/ActivityCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleLeft,
  faAngleRight,
  faBarsStaggered,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";

export function ActivityCard() {
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
        <div className={style.week_range_header}>Mon, Oct 30 - Sun, Nov 05</div>
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
        <hr/>
    </>
  );
}
