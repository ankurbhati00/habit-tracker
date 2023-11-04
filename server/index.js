import express from "express";
import "./config/mongoose/mongoose.config.js"; //connect to database
import { ApiRouter } from "./controller/API/index.js";
const App = express();
const PORT = 8000;

App.use("/api", ApiRouter);

//start server on this PORT
App.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server start !!!", err);
    return;
  }
  console.log("Server is running on PORT:", PORT);
});
