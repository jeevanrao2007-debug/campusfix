import { useState } from "react"
import axios from "axios"

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")

  const submitComplaint = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/complaints`,
        { title, description, location }
      )

      alert("Complaint submitted ✅")

      setTitle("")
      setDescription("")
      setLocation("")
    } catch (err) {
      alert("Backend not running or error ❌")
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>CampusFix – Submit Complaint</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br /><br />

      <button onClick={submitComplaint}>Submit</button>
    </div>
  )
}

export default App
