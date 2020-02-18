const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name of workout"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a name for type"
  },
  weight: {
    type: Number,
    required: "Enter an amount"
  },
  sets: {
    type: Number,
    required: "Enter an amount"
  },
  reps: {
    type: Number,
    required: "Enter an amount"
  },
  duration: {
    type: Number,
    required: "Enter an amount"
  }
});

const WorkoutDB = mongoose.model("Workout", workOutSchema);

module.exports = WorkoutDB;
