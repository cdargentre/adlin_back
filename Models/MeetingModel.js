module.exports = mongoose => {
    const Meeting = mongoose.model(
      "meeting",
      mongoose.Schema(
        {
          name_room: {type: String, required: true, trim: true},
          booking_hour: {type: String, required: true, trim: true},
        },
        { timestamps: true }
      )
    );
    return Meeting;
  }