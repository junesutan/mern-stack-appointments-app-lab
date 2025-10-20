const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "interviews with clients",
      "lunch with friends",
      "medical appointments for family members",
    ],
    default: "other",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
