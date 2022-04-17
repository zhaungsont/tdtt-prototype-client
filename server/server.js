const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect mongo 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection successfully");
})

const usersRoutes = require('./routes/users');
app.use('/users',usersRoutes);

app.listen(port, () => {          
    console.log(`Server is running on port :${port}`);
});
