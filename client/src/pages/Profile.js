import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/*const comments = [{
    id: "1",
    commentTitle: "Five stars",
    commentBody: "I am very happy with this therapist!",
    commenter: "Tester N."
}]*/

const Profile = () => {
  const { therapistId } = useParams();
  const [therapist, setTherapist] = useState(null);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commenter, setCommenter] = useState("");

  useEffect(() => {
    const fetchTherapist = async () => {
      try {
        const response = await fetch(`/api/therapists/${therapistId}`);
        const data = await response.json();
        setTherapist(data);
        setComment(data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTherapist();


  }, [therapistId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newCommentObj = {
      commentBody: newComment,
      commenter: commenter,
    };
    try {
      const response = await fetch(`/api/therapists/${therapistId}/comments`, {
        method: "POST",
        body: JSON.stringify(newCommentObj),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setComment([...comment, data]);
      setNewComment("");
      setCommenter("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    console.log("Deleting comment with ID:", commentId);
    try {
      const response = await fetch(
        `/api/therapists/${therapistId}/comments/${commentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setComment(comment.filter((comment) => comment._id !== commentId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommenterChange = (e) => {
    setCommenter(e.target.value);
  };

  return (
    <div>
      <h2>Profile</h2>
      {therapist && (
        <div>
          <h3>{therapist.name}</h3>
          <p>{therapist.specialty}</p>
          <p>{therapist.location}</p>
          <p>{therapist.bio}</p>
        </div>
      )}

      <h3>Comments</h3>
      {comment.map((commentItem) => (
        <div key={commentItem._id}>
          <p>{commentItem.commentBody}</p>
          <p>from {commentItem.commenter}</p>
          <button onClick={() => handleCommentDelete(commentItem._id)}>
            Delete
          </button>
        </div>
      ))}

      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Comment"
          value={newComment}
          onChange={handleCommentChange}
        />
        <input
          type="text"
          placeholder="Your name"
          value={commenter}
          onChange={handleCommenterChange}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};
export default Profile;
