module.exports = mongoose => {
    const Room = mongoose.model(
      "room",
      mongoose.Schema(
        {
          room_name: {type: String, required: true, trim: true},
          description: {type: String, required: true, trim: true},
          capacity: {type: String, required: true},
          bookings: [{
            type: String
          }
          ],
          equipements: [
            {
                name: {type: String, trim: true}
            }
          ]
        },
        { timestamps: true }
      )
    );
    return Room;
  }