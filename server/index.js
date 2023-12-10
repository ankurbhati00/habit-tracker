import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./API/users/user.routers.js";
import cookieParser from "cookie-parser";
import "./config/mongoose/mongoose.config.js"; //connect to database
import { habitsRouter } from "./API/habits/habits.routers.js";
dotenv.config();
const App = express();
const PORT = process.env.PORT;
App.use(
  cors({
    origin: process.env.origin,
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    
  })
);
App.use(cookieParser());
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
//set sessions
App.use(
  session({
    key: "user_sid",
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      secure: false
      // httpOnly: false,
    },
    store: MongoStore.create({
      mongoUrl: process.env.mongoUrl,
    }),
  })
);

App.use("/user", userRouter);
App.use("/habits", habitsRouter);

//start server on this PORT
App.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server start !!!", err);
    return;
  }
  console.log("Server is running on PORT:", PORT);
});
