const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const { Lesson } = require("../model/Lessons");
const SquadDetails = new Schema({
  id: Number,
  name: String,
  LessonId: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  cohort: String,
});

const Squad = mongoose.model("Squad", SquadDetails);
module.exports = { Squad };
