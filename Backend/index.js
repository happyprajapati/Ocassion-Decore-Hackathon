require('./connect');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const managerRoutes = require('./routes/managerRoutes');
const auth = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// app.use(auth);
app.use(studentRoutes);
app.use(managerRoutes);

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});