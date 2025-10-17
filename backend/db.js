const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const tasks = mongoose.model("tasks", taskSchema);

module.exports = {
  tasks: tasks,
};
