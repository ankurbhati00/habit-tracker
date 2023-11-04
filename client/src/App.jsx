import NavBar from './components/navbar'
import './App.css'
import DashboardLeft from './components/dashboardLeft'
import DashboardRight from './components/dashboardRight'
import AddHabitCard from './components/addHabitCard';
import SignIn from './pages/signIn/signIn';
import { useState } from 'react';
function App() {
  const [AddHabitCardView, setAddHabitCardView] = useState(false);
  const handleAddHabit = () => {
    setAddHabitCardView(!AddHabitCardView);
  }
  
  
  return (
    <>
      {AddHabitCardView ? <AddHabitCard handleAddHabit={handleAddHabit } />:undefined}
      <NavBar />
      <SignIn/>
      <div className="main_container">
        <DashboardLeft handleAddHabit={handleAddHabit} />
        <DashboardRight />
      </div>
    </>
  );
}

export default App
