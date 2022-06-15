const express = require('express')
const router = express.Router()


const RoomController = require('../Controllers/roomController')

router.get('/', RoomController.findAllRooms)

module.exports = router