const Workouts = require("../Models/wokout.model");
const mongoose = require("mongoose");

// Get all workouts
const getAllWorkouts = async (req, res) => {
   const workouts = await Workouts.find({}).sort({ createdAt: -1 });

   res.status(200).json(workouts);
};

// Get a single workout
const getOneWorkout = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
   }

   const workout = await Workouts.findById(id);

   if (!workout) {
      return res.status(404).json({ error: "No such workout" });
   }

   res.status(200).json(workout);
};

// Create a new workout
const createWorkout = async (req, res) => {
   const { title, load, reps } = req.body;
   //Add doc to DB
   try {
      const workout = await Workouts.create({ title, load, reps });
      res.status(200).json(workout);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// Delete a workout
const deleteOneWorkout = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ erron: "No such workout" });
   }

   const workout = await Workouts.findByIdAndDelete({ _id: id });

   if (!workout) {
      return res.status(404).json({ erron: "No such workout" });
   }

   res.status(200).json(workout);
};

// Update a workout
const updateOneWorkout = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ erron: "No such workout" });
   }

   const workout = await Workouts.findOneAndUpdate(
      { _id: id },
      {
         ...req.body,
      }
   );

   if (!workout) {
      return res.status(404).json({ erron: "No such workout" });
   }

   res.status(200).json(workout);
};

module.exports = {
   getAllWorkouts,
   getOneWorkout,
   createWorkout,
   deleteOneWorkout,
   updateOneWorkout
};
