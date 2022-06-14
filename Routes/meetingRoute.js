const express = require('express')
const router = express.Router()

const MeetingController = require('../Controllers/meetingController')

router.get('/', MeetingController.findAllMeetings)
router.post('/', MeetingController.createMeeting)

module.exports = router