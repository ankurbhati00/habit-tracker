import style from "./styles/navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import { userSelector } from "../redux/reducers/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/reducers/user.reducer";
export default function NavBar() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    //reset the previous state
    location.reload('/');
  };

  return (
    <>
      <nav className={style.navbar}>
        <Link className={style.brand} to="/">
          HabitO
        </Link>
        {/* if loged in then show logout else sign in */}
        {user.logedin ? (
          <Link className={style.signin} to="" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link className={style.signin} to="sign-in">
            SignIn
          </Link>
        )}
      </nav>
      <Outlet />
    </>
  );
}
