import mongoose from "../../config/mongoose/mongoose.config.js";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  colour: {
    type: String,
  },
  started: {
    type: String,
  },

  type: {
    type: String,
  },
});

export const Habits = mongoose.model("Habits", habitSchema);
