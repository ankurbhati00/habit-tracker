import { User } from "../users/user.modal.js";
import { Habits } from "./habits.modal.js";

class controller {
  constructor() {}
  //fetch all habits from db
  async allHabits(req, res) {
    const habits = await Habits.find({userId:req.body.userId}).catch((err) => console.log(err));
    return res.status(200).json({
      habits,
    });
  }
  //add habit to db
  async addHabit(req, res) {
    const { name, started, type, userId } = req.body;
    var colours = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "gray",
      "brown",
      "pink",
      "purple",
      "maroon",
      "cyan",
      "navy blue",
    ];
    const randomIndex = Math.floor(Math.random() * 12);
    const habitId = await Habits.create({
      userId,
      name,
      started,
      colour: colours[randomIndex],
      type,
    });
    const habit = await Habits.findById(habitId).catch((err) =>
      console.log(err)
    );
    return res.status(201).json({
      habit,
    });
  }

  //mark habits
  async markHabit(req, res) {
    const { modifiedWeek, currentWeekId, userId } = req.body;
    const user = await User.findById(userId);
    let weeks = user.weeks;
     weeks.splice(currentWeekId, 1, modifiedWeek);
    const result = await User.findByIdAndUpdate(userId, { weeks })
      
      .catch(err => console.log(err));
    //if updated successfuly
    
    if (result) {
      return res.status(201).json({
        message: "Habit marked successfuly.",
      });
    }
    //if elms not found
    return res.status(404).json({
      message: "Not Found !",
    });
  }
  //delete habit from db
  async deleteHabit(req, res) {
    const habit = await Habits.findByIdAndDelete(req.body.habitId).catch(
      (err) => console.log(err)
    );
    if (habit) {
      return res.status(201).json({
        message: "successfuly deleted",
      });
    }
    return res.status(404);
  }
}

export const habitsController = new controller();
