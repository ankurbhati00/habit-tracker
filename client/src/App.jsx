import NavBar from './components/navbar'
import './App.css'
import DashboardLeft from './components/dashboardLeft'
import DashboardRight from './components/dashboardRight'
function App() {

  return (
    <>
      <NavBar />
      <div className='main_container'>
        <DashboardLeft />
        <DashboardRight />
      </div>
    </>
  );
}

export default App
