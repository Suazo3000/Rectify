const mongoose = require('mongoose'); // Import the mongoose library
mongoose.connect('mongodb://127.0.0.1:27017/rectify', { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to the MongoDB database

// Define a comment schema using mongoose.Schema.
const commentSchema = new mongoose.Schema({
    commentBody: {
        type: String,
        required: true,
    },
    commenter: {
        type: String,
        required: true,
    },
});

// Define a therapist schema using mongoose.Schema including needed fields
const therapistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true, 
    },
    comments: [commentSchema]
});

// Create a mongoose model named 'Therapist' using the 'therapistSchema'
const Therapist = mongoose.model('Therapist', therapistSchema);

// Export the 'Therapist' model
module.exports = Therapist;