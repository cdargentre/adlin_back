const express = require('express')
const router = express.Router()
const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true });

const RoomController = require('../Controllers/roomController')

router.get('/', RoomController.findAllRooms)

module.exports = router