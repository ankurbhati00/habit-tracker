import NavBar from './components/navbar'
import './App.css'
import DashboardLeft from './components/dashboardLeft'
import DashboardRight from './components/dashboardRight'
import AddHabitCard from './components/addHabitCard';
function App() {

  return (
    <>
      <AddHabitCard/>
      <NavBar />
      <div className='main_container'>
        <DashboardLeft />
        <DashboardRight />
      </div>
    </>
  );
}

export default App
