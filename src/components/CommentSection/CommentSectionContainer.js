// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comment] = useState(props.comments);
  const [timestamp] = useState(props.timestamp);

  return (
    <div>
      {comment.map((comment) => <Comment comment={comment} />)}
      <p className="date-added">{timestamp}</p>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
