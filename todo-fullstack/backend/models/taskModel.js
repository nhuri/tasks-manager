import mongoose from "mongoose";
// const validator = require("validator");
const taskSchema = new mongoose.Schema({
  cat: String,
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "The task must have a userId"],
  },
  title: {
    type: String,
    required: [true, "The task must have a title"],
  },
  body: {
    type: String,
    required: [true, "The task must have a body"],
  },
  date: {
    type: String,
    required: [true, "The task must have a date"],
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
