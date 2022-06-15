const express = require('express');
const app = express();

// Variable d'env
require('dotenv').config({path: './config/.env'})

const cors = require('cors')

const corsOptions = {
    origin: [
    'https://adlin-resa.netlify.app/',
    'http://localhost:3000',
  ],
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,POST',
    'preflightContinue': true
  }
app.use(cors(corsOptions));

app.use(express.json())

app.use('/public', express.static(__dirname + '/public'))

const cookieParser = require('cookie-parser')
app.use(cookieParser())

// ROUTES
const roomsRoute = require('./Routes/roomRoute')
const meetingsRoute = require('./Routes/meetingRoute')

app.use('/api/rooms',roomsRoute)
app.use('/api/meetings',meetingsRoute)

  
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`App listening at http://localhost:${process.env.PORT}/`)
  })

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