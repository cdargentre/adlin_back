const express = require('express')
const router = express.Router()
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })

const RoomController = require('../Controllers/roomController')

router.get('/', RoomController.findAllRooms,  csrfProtection, function (req, res) {
    res.render('send', { csrfToken: req.csrfToken() })
  })

module.exports = router