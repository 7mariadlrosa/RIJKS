//EVENT MODEL
const { Schema, model } = require('mongoose')

const eventSchema = new Schema(
    {
        name: String,
        date: Date,
        location: String,
        description: String,
        cover: {
            type: String,
        },
    },
    {
        timestamps: true
    })

const Event = model("Event", eventSchema);
module.exports = Event;