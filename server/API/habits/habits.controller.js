import { Habits } from "./habits.modal.js";

class controller {
  constructor() {}
  //fetch all habits from db
  async allHabits(req, res) {
    const habits = await Habits.find().catch((err) => console.log(err));

    return res.status(200).json({
      habits,
    });
  }
  //add habit to db
  async addHabit(req, res) {
    const { name, started, type, colour } = req.body;
    var colours = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
      "aqua",
      "black",
      "gray",
      "brown",
      "pink",
      "purple",
      "maroon",
      "turquoise",
      "cyan",
      "navy blue",
      "gold",
      "tomato",
      "teal",
      "lime",
    ];
    const randomIndex = Math.floor(Math.random() * 20);
    const habitId = await Habits.create({
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
}

export const habitsController = new controller();
