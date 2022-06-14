const db = require("../Models");
const meetings = db.meetings

exports.findAllMeetings = (req, res) => {
    meetings.find({})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

exports.createMeeting = async (req, res) => {

    const meeting= {
        name_room: req.body.name_room,
        booking_hour: req.body.booking_hour
    }
    await 
    meetings.create(meeting)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}