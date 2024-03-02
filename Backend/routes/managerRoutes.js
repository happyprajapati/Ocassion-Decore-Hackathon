const routes = require('express').Router();
const {createManager, createEvent, addsliderimg, getUsers, getPlaceReq} = require('../controllers/managerController.js');
const {validateRegister} = require('../middlewares/validator.js');
const {sliderImage} = require('../middlewares/upload.js');


// Register API
routes.post('/manager-register', validateRegister, createManager);

// Add Event API
// routes.post("/addevent", createEvent);

// Add Slider-image API
routes.post("/addsliderimg", sliderImage.single('sliderimg'), addsliderimg)

// Get Users API
routes.get("/getusers", getUsers);

routes.get("/getplacereq", getPlaceReq);

module.exports = routes;