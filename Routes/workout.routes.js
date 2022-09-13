const express = require("express");
const {
   getAllWorkouts,
   getOneWorkout,
   createWorkout,
   deleteOneWorkout,
   updateOneWorkout
} = require("../Controllers/workout.controller");

const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:id", getOneWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteOneWorkout);

router.patch("/:id", updateOneWorkout);

module.exports = router;
