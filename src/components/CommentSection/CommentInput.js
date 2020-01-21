import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add a comment... "
        onChange={props.changeComment}
      />
      <i className="fas fa-ellipsis-h"></i>
    </form>
  );
};

export default CommentInput;
