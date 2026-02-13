const submitComplaint = async () => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/complaints`, {
      title,
      description,
      location
    })

    alert("Complaint submitted ✅")

    setTitle("")
    setDescription("")
    setLocation("")
  } catch (err) {
    alert("Backend not running or error ❌")
  }
}