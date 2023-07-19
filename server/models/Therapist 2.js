const { Schema, model } = require('mongoose');

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
    Bio: {
        type: String,
        required: true, 
    },
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;