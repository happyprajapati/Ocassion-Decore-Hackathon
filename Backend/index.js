require('./connect');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const managerRoutes = require('./routes/managerRoutes');
const ownerRoutes = require('./routes/ownerRoutes')
// const auth = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// app.use(auth);
app.use(userRoutes);
app.use(managerRoutes);
app.use(ownerRoutes);

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});