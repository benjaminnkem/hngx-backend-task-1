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
  const utc_time = new Date().toISOString();
  const github_file_url = "https://github.com/benjaminnkem/hngx-backend-task-1/blob/master/index.js";
  const github_repo_url = "https://github.com/benjaminnkem/hngx-backend-task-1";

  res.status(200).json({
    slack_name: slack_name ? slack_name : "",
    track: track ? track : "",
    current_day,
    utc_time,
    github_file_url,
    github_repo_url,
    status_code: 200,
  });
});

app.listen(PORT);

module.exports = app;
