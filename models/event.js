const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const eventSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "eventCreator"
        },
        eventName: String,
        eventDate: Date,
        eventDescription: String,
        attendants: Array
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

const eventModel = mongoose.model("Event", eventSchema);

eventSchema.plugin(passportLocalMongoose);

module.exports = User;
