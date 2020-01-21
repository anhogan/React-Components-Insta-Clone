// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comment] = useState(props.comments);
  const [timestamp] = useState(props.timestamp);

  // const abbrvTime = timestamp => {
  //   let date = new Date(timestamp);
  //   console.log(date);
  //   let day = date.getDate();
  //   console.log(day);
  //   let month = date.getMonth();
  //   let year = date.getFullYear();

  //   return `${month} ${day}, ${year}`;    
  // }

  return (
    <div>
      {comment.map((comment) => <Comment comment={comment} />)}
      <p className="date-added">{timestamp}</p>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
