import "./App.css";
import DashboardLeft from "./components/dashboardLeft";
import DashboardRight from "./components/dashboardRight";
import AddHabitCard from "./components/addHabitCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadWeeklyHabits } from "./redux/reducers/weeklyHabits.reducer.js";
import { loadHabits } from "./redux/reducers/habits.reducer.js";
function App() {
  const [AddHabitCardView, setAddHabitCardView] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWeeklyHabits());
    dispatch(loadHabits());
  }, []);
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
