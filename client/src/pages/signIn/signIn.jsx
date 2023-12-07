import style from "./signIn.module.css";
import google_logo from "../../assets/google_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  signInUser,
  userSelector,
} from "../../redux/reducers/user.reducer.js";
import { useEffect } from "react";
export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  //handle sign in
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(signInUser({ email, password }));
  };
  //fetch is user loged in or not
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  //if loged in redirect to home
  useEffect(() => {
    if (user.logedin) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <h1>Welcome Back!</h1>
        <form action="/" onSubmit={handleSubmit}>
          <input
            className={style.user_input}
            required
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className={style.user_input}
            required
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className={style.signIn_btn}>Sign in</button>
        </form>
        <a href="/" className={style.forgot_password_text}>
          forgot your password?
        </a>
        <button className={style.signin_with_google}>
          <img src={google_logo} className={style.google_logo} />
          Sign In with Google
        </button>
        <div className={style.footer_container}>
          Don't have an account? &nbsp;<Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
