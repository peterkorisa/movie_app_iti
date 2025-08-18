const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
import mongoose from "mongoose";
const app = express();
app.use(cors()); 
app.use(bodyParser.json());

//3v7qTpiPXsbYVFN7
mongoose.connect('').then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});



app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
