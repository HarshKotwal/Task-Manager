const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:harsh1608@cluster0.7f5pyju.mongodb.net/tasks"
);

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const tasks = mongoose.model("tasks", taskSchema);

module.exports = {
  tasks: tasks,
};
