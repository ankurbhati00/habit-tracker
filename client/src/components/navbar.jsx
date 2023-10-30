import style from './styles/navbar.module.css';

export default function NavBar() {
    return <nav className={style.navbar}>
        <div className={style.brand} >HabitO</div>
        <div className={style.signin}>SignIn</div>
  </nav>;
}
