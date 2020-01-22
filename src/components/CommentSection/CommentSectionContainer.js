// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comment] = useState(props.comments);
  const [timestamp] = useState(props.timestamp);
  
  const splitTime = timestamp.split(" ").splice(0,3).join(" ").split(",");
  const timeStamp = splitTime[0];

  return (
    <div>
      {comment.map((comment) => <Comment comment={comment} />)}
      <p className="date-added">{timeStamp}</p>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
