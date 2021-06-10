const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout_schema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                default: null,

        },
        name: {
            type: String,
            trim: true,
            default: null,
        },

        duration: {
            type: Number,
            default: 0,
        },

        weight: {
        type: Number,
        default: 0,
        },
    },

],
     time: {
        type: Number,
        default: 0,
    },
});

const Workout = mongoose.model("Workout", Workout_schema);

module.exports = Workout;