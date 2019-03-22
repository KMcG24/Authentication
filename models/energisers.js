const mongoose = require("mongoose");

const energiserSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  estimatedTime: Number,
  description: String,
  numberOfTeams: { type: Number, default: 4, min: 1, max: 24 }
  //equipment: {mongoose.Types.Mixed}
  //or Array
});

module.exports = mongoose.model("energiser", energiserSchema);
