const express = require("express");
const app = express();
app.use(express.json());

app.post("/todo", function (req, res) {});

app.get("/", function (req, res) {});

app.put("/update", function (req, res) {});
