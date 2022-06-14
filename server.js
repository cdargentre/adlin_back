const express = require('express');
const app = express();

// Variable d'env
require('dotenv').config({path: './config/.env'})

const cors = require('cors')

const corsOptions = {
    origin: true,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': true
  }
 
app.use(cors(corsOptions));
app.use(express.json())

app.use('/public', express.static(__dirname + '/public'))

// ROUTES
const roomsRoute = require('./Routes/roomRoute')
const meetingsRoute = require('./Routes/meetingRoute')

app.use('/api/rooms',roomsRoute)
app.use('/api/meetings',meetingsRoute)

app.listen(process.env.PORT, () => {
    console.log(`listening port ${process.env.PORT}`);  
} )

const db = require("./Models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });