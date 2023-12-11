import { Router } from "express";
import { userController } from "./user.controller.js";
const router = Router();

router.post("/sign-up", userController.SignUp);
router.post("/sign-in", userController.SignIn);
router.get("/check-logedin", userController.authUser);
export const userRouter = router;
