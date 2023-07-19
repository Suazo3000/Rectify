const express = require('express');
const router = express.Router();
const Therapist = require('../models/Therapist');

router.get('/therapists/', async (req, res) => {
    try {
        const therapists = await Therapist.find({});
        res.json(therapists);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server Error' });
        }
});

router.get('/therapists/:therapistId', async (req, res) => {
    try {
        const therapist = await Therapist.findOne({_id: req.params.therapistId});
        res.json(therapist);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server Error' });
    }
}
);

module.exports = router;