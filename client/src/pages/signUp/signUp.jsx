import style from "./signUp.module.css";
import google_logo from "../../assets/google_logo.png";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <h1>Create Account</h1>
        <form action="/">
          <input className={style.user_input} type="text" placeholder="Name" />
          <input
            className={style.user_input}
            type="email"
            placeholder="Email"
          />
          <input
            className={style.user_input}
            type="password"
            placeholder="Password"
          />
          <button className={style.signUp_btn}>Sign Up</button>
        </form>
        
        <button className={style.signUp_with_google}>
          <img src={google_logo} className={style.google_logo} />
          Sign Up with Google
        </button>
        <div className={style.footer_container}>
          Already have an account? &nbsp;<Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
