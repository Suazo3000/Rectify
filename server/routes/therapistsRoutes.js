const express = require("express");
const router = express.Router();
const Therapist = require("../models/Therapist");

// Route to get all therapists
router.get("/therapists/", async (req, res) => {
  try {
    // Fetch all therapists from the database
    const therapists = await Therapist.find({});
    res.json(therapists);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Route to get a specific therapist by ID
router.get("/therapists/:therapistId", async (req, res) => {
  try {
    // Fetch a specific therapist by its ID from the database
    const therapist = await Therapist.findOne({ _id: req.params.therapistId });
    res.json(therapist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Route to add a new comment to a therapist
router.post("/therapists/:therapistId/comments", async (req, res) => {
  console.log("Received a POST request!");
  try {
    console.log("Fetching therapist with ID");
    // Fetch the therapist by its ID from the database
    const therapist = await Therapist.findOne({ _id: req.params.therapistId });
    if (!therapist) {
      console.log("Therapist not found");
      return res.status(404).json({ error: "Therapist not found" });
    }

    // Create a new comment based on the request body
    const newComment = {
      commentBody: req.body.commentBody,
      commenter: req.body.commenter,
    };
    console.log("Adding new comment to therapist");

    // Add the new comment to the therapist's 'comments' array
    therapist.comments.push(newComment);
    console.log("Saving therapist");
    await therapist.save();

    console.log("Successfully added new comment to therapist");
    // Respond with the newly added comment
    res.status(201).json(therapist.comments[therapist.comments.length - 1]);
  } catch (error) {
    console.log("error in POST request", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Route to update an existing comment of a therapist
router.put("/therapists/:therapistId/comments/:commentId", async (req, res) => {
  try {
    const therapist = await Therapist.findOne({ _id: req.params.therapistId });
    if (!therapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }

    // Find the index of the comment in the therapist's 'comments' array
    const commentIndex = therapist.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );
    if (commentIndex === -1) {
        return res.status(404).json({ error: "Comment not found" });
    }
    
    // Update the comment body based on the request body
    therapist.comments[commentIndex].commentBody = req.body.commentBody;
    await therapist.save();
    // Respond with updated comment
    res.status(200).json(therapist.comments[commentIndex]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Route to delete therapist comments
router.delete(
  "/therapists/:therapistId/comments/:commentId",
  async (req, res) => {
    try {
      // Find the therapist by kit's ID
      const therapist = await Therapist.findOne({
        _id: req.params.therapistId,
      });
      // Check to see if the therapist exists, if not return with 404 error response
      if (!therapist) {
        return res.status(404).json({ error: "Therapist not found" });
      }

      // find the index of the comment in the 'comments' array
      const commentIndex = therapist.comments.findIndex(
        (comment) => comment._id.toString() === req.params.commentId
      );
      // check if the comment exists in the therapist's 'comments' array, if not return with 404 error response
      if (commentIndex === -1) {
        return res.status(404).json({ error: "Comment not found" });
      }
      // Remove the comment from the therapist's 'comments'
      therapist.comments.splice(commentIndex, 1);

      // Save the updated therapist with the removed comment
      await therapist.save();
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
);

module.exports = router;
