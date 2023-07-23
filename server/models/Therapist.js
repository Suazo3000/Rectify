const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/rectify', { useNewUrlParser: true, useUnifiedTopology: true });

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

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;