const router = require("express").Router()
const Complaint = require("../models/Complaint")

router.post("/", async (req,res)=>{
  const data = await Complaint.create(req.body)
  res.json(data)
})

router.get("/", async (req,res)=>{
  const data = await Complaint.find()
  res.json(data)
})

router.put("/:id", async (req,res)=>{
  const data = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new:true }
  )
  res.json(data)
})

router.delete("/:id", async (req,res)=>{
  await Complaint.findByIdAndDelete(req.params.id)
  res.json({msg:"deleted"})
})

module.exports = router
