import { Router } from "express";
import { userController } from "./user.controller.js";
import { validate } from "../middleware/auth.js";
const router = Router();

router.post("/sign-up", validate, userController.SignUp);
router.post("/sign-in", validate, userController.SignIn);
router.get("/log-out", userController.logOut);
router.get("/check-logedin", userController.authUser);
export const userRouter = router;
