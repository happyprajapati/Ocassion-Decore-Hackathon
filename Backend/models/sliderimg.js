const { mongoose } = require("mongoose")

const sliderImgSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
})

const SliderImgModel = mongoose.model("Sliderimg", sliderImgSchema)

module.exports = SliderImgModel