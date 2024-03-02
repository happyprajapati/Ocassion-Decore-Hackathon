const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Occasion-Decore').then(()=>{
    console.log('Database Connected.');
}).catch((e)=>{
    console.log(e);
});