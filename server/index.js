const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var lesson = require("../routes/LessonRouter");
var squad = require("../routes/SquadRouter");
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.listen(4000, () => console.log("server listening on port 4000"));

app.use("/api", lesson);
app.use("/api", squad);
