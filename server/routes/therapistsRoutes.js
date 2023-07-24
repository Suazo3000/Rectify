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
    console.log("Received a POST request!");
    try {
        console.log("Fetching therapist with ID");
        const therapist = await Therapist.findOne({_id: req.params.therapistId});
        if (!therapist) {
            console.log("Therapist not found");
            return res.status(404).json({ error: 'Therapist not found' });
        }

        const newComment = {
            
            commentBody: req.body.commentBody,
            commenter: req.body.commenter  
        };
        console.log("Adding new comment to therapist");

        therapist.comments.push(newComment);
        console.log("Saving therapist");
        await therapist.save();

        console.log("Successfully added new comment to therapist");
        res.status(201).json(therapist.comments[therapist.comments.length - 1]);
    } catch (error) {
        console.log("error in POST request", error);
        res.status(500).json({ error: 'Server Error' });
        }
    });

    router.put('/therapists/:therapistId/comments/:commentId', async (req, res) => {
        try {
            const therapist = await Therapist.findOne({ _id: req.params.therapistId });
            if (!therapist) {
                return res.status(404).json({ error: 'Therapist not found' });
            }

            const commentIndex = therapist.comments.findIndex(comment => comment._id.toString() === req.params.commentId);

            if (commentIndex === -1) {
                return res.status(404).json({ error: 'Comment not found' });
            }

            therapist.comments[commentIndex].commentBody = req.body.commentBody;
            await therapist.save();
            res.status(200).json(therapist.comments[commentIndex]);
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