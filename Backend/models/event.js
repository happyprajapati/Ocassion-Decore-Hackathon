const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: String ,
  description: String ,
},
{timestamps: true}
);

const eventModel = mongoose.model("event", eventSchema);

module.exports = eventModel;