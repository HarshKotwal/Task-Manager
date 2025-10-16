const express = require("express");
const { createTask, updateTask } = require("./types");
const { tasks } = require("./db");
const app = express();
app.use(express.json());

app.post("/tasks", async function (req, res) {
  const createPayload = req.body;
  const parseCreate = createTask.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await tasks.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Task created",
  });
});

app.get("/allTasks", async function (req, res) {
  const allTasks = await tasks.find();
  return res.send(allTasks);
});

app.put("/update", async function (req, res) {
  const updatePayload = req.body;
  const parseUpdate = updateTask.safeParse(updatePayload);
  if (!parseUpdate.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  await tasks.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Task marked as completed",
  });
});

app.listen(5000);
