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

router.post('/therapists/:therapistId/comments', async (req, res) => {
    try {
        const therapist = await Therapist.findOne({_id: req.params.therapistId});
        if (!therapist) {
            return res.status(404).json({ error: 'Therapist not found' });
        }

        therapist.comments.push({
            commentTitle: req.body.commentTitle,
            commentBody: req.body.commentBody,
            commenter: req.body.commenter
            
        });

        await therapist.save();
        res.status(201).json({ message: 'comment added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server Error' });
        }
    });

    router.delete('/therapists/:therapistId/comments/:commentId', async (req, res) => {
        try {
            const therapist = await Therapist.findOne({ _id: req.params.therapistId });
            if (!therapist) {
                return res.status(404).json({ error: 'Therapist not found' });
            }

            const commentIndex = therapist.comments.findIndex(comment => comment._id.toString() === req.params.commentId);

            if (commentIndex === -1) {
                return res.status(404).json({ error: 'Comment not found' });
            }

            therapist.comments.splice(commentIndex, 1);

            await therapist.save();
            res.status(200).json({ message: 'Comment deleted successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server Error' });
        }
    });

module.exports = router;