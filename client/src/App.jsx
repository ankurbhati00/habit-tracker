import "./App.css";
import DashboardLeft from "./components/dashboardLeft";
import DashboardRight from "./components/dashboardRight";
import AddHabitCard from "./components/addHabitCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  weeklyHabitsActions,
} from "./redux/reducers/weeklyHabits.reducer.js";
import { loadHabits } from "./redux/reducers/habits.reducer.js";
import { userSelector } from "./redux/reducers/user.reducer.js";
function App() {
  const [AddHabitCardView, setAddHabitCardView] = useState(false);
  const { weeks } = useSelector(userSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHabits());
  }, []);
  //set weeks to state
  useEffect(() => {
    dispatch(weeklyHabitsActions.setWeeks(weeks));
  }, [weeks]);
  const handleAddHabit = () => {
    setAddHabitCardView(!AddHabitCardView);
  };

  return (
    <>
      {AddHabitCardView ? (
        <AddHabitCard handleAddHabit={handleAddHabit} />
      ) : undefined}
      <div className="main_container">
        <DashboardLeft handleAddHabit={handleAddHabit} />
        <DashboardRight />
      </div>
    </>
  );
}

export default App;
