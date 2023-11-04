import { Router } from "express";
import { userRouter } from "./userController/user.index.js";
const router = Router();

router.use('/user', userRouter)







export const ApiRouter= router;
