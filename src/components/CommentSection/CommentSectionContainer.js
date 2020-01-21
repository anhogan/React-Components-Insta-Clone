// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comment] = useState(props.comments);

  return (
    <div>
      {comment.map((comment) => <Comment comment={comment} />)}
    </div>
  );
};

export default CommentSection;
