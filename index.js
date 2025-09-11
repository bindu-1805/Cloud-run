const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Tasks
const tasks = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Divide the project among teammates" },
  { id: 3, task: "Finish project report" },
  { id: 4, task: "Prepare for final evaluation" },
  { id: 5, task: "Present the final report"}
];

app.get("/", (req, res) => {
  res.send("Tasks API is up. Use /tasks");
});

// Return JSON array of tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});


app.listen(PORT, () => {
  console.log(`Tasks API listening on port ${PORT}`);
});
