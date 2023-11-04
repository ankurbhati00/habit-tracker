import { Router } from "express";
const router = Router();
import { userControllerMethods } from "./user.controller.js";




router.get("/create", userControllerMethods.createUser);

export const userRouter = router;
