const express = require("express");
const { createTask } = require("./types");
const app = express();
app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTask.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.get("/", function (req, res) {});

app.put("/update", function (req, res) {});
