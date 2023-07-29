const mongoose = require("mongoose"); // Import mongoose lib

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/rectify"
); // Connect to MongoDB

module.exports = mongoose.connection; // Export the mongoose connection
