const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.status(200).send("ENDPoint available at /api");
});

app.get("/api", (req, res) => {
  const { track, slack_name } = req.query;

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const current_day = weekdays[new Date().getDay()];
  const utc_time = new Date();
  const github_file_url = "https://github.com/benjaminnkem/hngx-backend-task-1/blob/master/index.js";
  const github_repo_url = "https://github.com/benjaminnkem/hngx-backend-task-1";

  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0")
  const day = String(currentDate.getUTCDate()).padStart(2, "0");
  const hours = String(currentDate.getUTCHours()).padStart(2, "0");
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  res.status(200).json({
    slack_name: slack_name ? slack_name : "",
    track: track ? track : "",
    current_day,
    utc_time: formattedDate,
    github_file_url,
    github_repo_url,
    status_code: 200,
  });
});

app.listen(PORT);

module.exports = app;
