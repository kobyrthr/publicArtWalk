/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own
const express = require('express');
const path = require('path');
require('dotenv').config({path:'../.env'});
console.log(process.env)
const cors = require('cors');


/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")
const suggestionRoute = require("./routes/suggestions")


/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
// returns an object that is our server

	
/* ====== Middleware  ====== */ 
app.use(express.static(path.join('build')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.json());


/* ====== System Variables  ====== */

/* ====== App Configuration  ====== */
// app.set
const config = require('@deliveryApp/config');
const PORT = process.env.PORT || 5000; 

/* ====== Mongoose Configuration  ====== */
const mongoose = require('mongoose');
const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL

mongoose   
    .connect(dbUrl)
    .then(() => {
        console.log(`MongoDB connected at ${db.host}: ${db.port}.`)
    })
    .catch((err) => { 
        console.log(`MongoDB failed to connect. Error: ${err}`)
    });


/* ====== Routes  ====== */
app.use("/api/pins", pinRoute)
app.use("/api/user", userRoute)
app.use("/api/suggestions", suggestionRoute)

	
/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)
app.listen(PORT, function () {
	console.log(`i'm a little server live on port http://localhost:${config.PORT}`);
});