import style from './styles/navbar.module.css';
import { Outlet,Link } from 'react-router-dom';
export default function NavBar() {
    return (
      <>
        <nav className={style.navbar}>
          <Link className={style.brand} to='/'>HabitO</Link>
          <Link className={style.signin} to='sign-in'>SignIn</Link>
        </nav>
        <Outlet/>
      </>
    );
}
