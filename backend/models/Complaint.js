const mongoose = require("mongoose")

const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Complaint", complaintSchema)
