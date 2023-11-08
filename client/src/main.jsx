import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/signIn/signIn.jsx";
import NavBar from "./components/navbar.jsx";
import SignUp from "./pages/signUp/signUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
