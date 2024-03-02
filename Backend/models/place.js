const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
    userId : mongoose.Types.ObjectId,
    type: String,
    state: String,
    city: String,
    address: String,
    name: String,
    capacity: String,
    decoration: Boolean,
    catering: Boolean,
    price: String,
    image: String,
    aadhar: String,
    property: String,
    bank: String,
    status:{type:String, default:"pending"},
},
{timestamps: true}
);

const PlaceModel = mongoose.model("event", placeSchema);

module.exports = PlaceModel;
