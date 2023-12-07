import { Router } from "express";
import {habitsController} from "./habits.controller.js";
const router = Router();


router.post('/', habitsController.allHabits); 
router.post("/add", habitsController.addHabit);
router.post("/mark", habitsController.markHabit);
router.delete("/delete", habitsController.deleteHabit);

export const habitsRouter = router;