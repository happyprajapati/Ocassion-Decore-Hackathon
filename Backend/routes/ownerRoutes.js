const routes = require('express').Router();
const { addplace } = require('../controllers/ownerController.js');
const {proof} = require('../middlewares/upload.js');

routes.post('/addplace', proof.fields([{name:'image',maxCount:1},{name:'aadhar',maxCount:1},{name:'property',maxCount:1},{name:'bank',maxCount:1}]) , addplace);

module.exports = routes;
