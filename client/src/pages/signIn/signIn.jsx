import style from "./signIn.module.css";
import google_logo from "../../assets/google_logo.png";
export default function SignIn() {
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <h1>Welcome Back!</h1>
        <form action="/">
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
          Don't have an account? &nbsp;<a href="/">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
