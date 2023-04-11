const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { urlencoded } = require('express');
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5000;
//For Database
const connectDB = require('./config')

const {errorHandler} = require('./middleware/errorHandler')
connectDB();


//allows any ip address to access our express server
const cors = require('cors');
app.use(cors());
//Encoding
app.use(express.json());
app.use(urlencoded({extended: false}));

//Error handling
app.use(errorHandler);

//Scene routes
app.use('/api/scene', require('./routes/sceneRoutes'));

//Choice routes 
app.use('/api/choice', require('./routes/choiceRoutes.js'));

//Routes
//Just to test server is running
app.get("/", (req, res) => {
    res.send("Whoohoo I am working!");
});


//Listen
app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));