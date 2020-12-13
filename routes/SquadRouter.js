const express = require("express");
const router = express.Router();

var { Lesson } = require("../model/Lessons");
var { Squad } = require("../model/Squad");

router.route("/squad").get((req, res) => {
  squad.find((err, Squad) => {
    if (err) {
      res.status(404).send("error occu fetching data");
    } else {
      res.send(squad);
    }
  });
});

router.route("/squad/:id").get((req, res) => {
  squad.findOne({ id: req.params.id }, (err, Squad) => {
    if (err) {
      res.status(404).send("error occu fetching data");
    } else {
      res.send(squad);
    }
  });
});

router.route("./squad").post((req, res) => {
  if (req.body.name == "" || req.body.id == "") {
    res.status(404).send("name/id is required");
  } else {
    let squad = new Squad(req.body);
    squad
      .save()
      .then((squad) => res.send(squad))
      .catch((err) => res.status(404).send("error posting"));
  }
});

router.route("/squads/map/:id/:name").post((req, res) => {
  let lesson, squad;
  Lesson.findOne({ _id: req.params.id }, (err, data) => {
    lesson = new Lesson(data);
  });

  Squad.findOne({ name: req.params.name }, (err, data) => {
    squad = new Squad(data);
    squad.lessonId.push(lesson);
    squad
      .save()
      .then((reg) => {
        res.send(reg);
      })
      .catch((err) => {
        res.send("Failed to map", err);
      });
  });
});

router.put("/squad/:id", (req, res) => {
  if (req.body.name == "" || req.body.id == "") {
    res.status(404).send("Name/id field can not be empty");
  } else {
    var squad = {
      id: req.body.id,
      name: req.body.name,
      lessonId: req.body.lessonId,
      cohort: req.body.cohort,
    };

    Squad.updateOne({ id: req.params.id }, squad, (err, swuad) => {
      if (err) {
        res.status(404).send("error updating");
      } else {
        res.redirect(`/api/squad/${req.params.id}`);
      }
    });
  }
});

router.route("/squad/:id").delete((req, res) => {
  squad.deleteOne({ id: req.params.id }, (err, squad) => {
    if (err) {
      res.status(404).send("error while deleting");
    } else {
      res.send(`${req.params.id} id deleated`);
    }
  });
});

module.exports = router;
