require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const complaintRoutes = require("./routes/complaintRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err))

app.use("/api/complaints", complaintRoutes)

app.get("/", (req, res) => {
  res.send("API running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})
