const db = require("../Models");
const rooms = db.rooms

exports.findAllRooms = (req, res) => {
    rooms.find({})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}