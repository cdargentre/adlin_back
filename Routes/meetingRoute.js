const express = require('express')
const router = express.Router()

const MeetingController = require('../Controllers/meetingController')

const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true });

router.get('/', MeetingController.findAllMeetings)
router.post('/', csrfProtection, MeetingController.createMeeting)

module.exports = router