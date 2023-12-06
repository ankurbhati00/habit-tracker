import { Router } from "express";
import {habitsController} from "./habits.controller.js";
const router = Router();


router.get('/', habitsController.allHabits); 
router.post("/add", habitsController.addHabit)


export const habitsRouter = router;