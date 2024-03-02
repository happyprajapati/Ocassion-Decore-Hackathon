const Place = require('./../models/place')

const addplace = async(req, res) => {
    try {
        const userId = req.params.userId;
    const {type,state,city,address,name,capacity,decoration,catering,price} = req.body;

    const place = new Place({
        userId,
        type,
        state,
        city,
        address,
        name,
        capacity,
        decoration,
        catering,
        price,
        image:req.files['image'][0].filename,
        aadhar:req.files['aadhar'][0].filename,
        property:req.files['property'][0].filename,
        bank:req.files['bank'][0].filename,
      });
      await place.save();

      return res.json({
        success: true,
        data: {
          message: `Place Added Successfully`,
        },
      });

    } catch (error) {
        return res.status(200).json({ success: false, data: { error: error } });
    }

}

module.exports = {addplace};