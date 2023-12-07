import style from "./signUp.module.css";
import google_logo from "../../assets/google_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSelector } from "../../redux/reducers/user.reducer";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../../redux/reducers/user.reducer";
export default function SignUp() {
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  //sign up the user
  const signUp = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      toast("oops password doesn't match !!");
      return;
    }
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:8000/user/sign-up", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      //when user is already present
      if (response.status === 409) {
        return toast("This email is already present.");
      }
    } catch (error) {
      toast("Error in sign up !!");
      return;
    }

    //rediret to sign-in page
    navigate("/sign-in");
  };

  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <h1>Create Account</h1>
        <form action="/" onSubmit={signUp}>
          <input
            className={style.user_input}
            name="name"
            required
            type="text"
            placeholder="Name"
          />
          <input
            className={style.user_input}
            name="email"
            required
            type="email"
            placeholder="Email"
          />
          <input
            className={style.user_input}
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <input
            className={style.user_input}
            name="confirmPassword"
            required
            type="password"
            placeholder="Confirm Password"
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
