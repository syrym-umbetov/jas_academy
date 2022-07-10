import React from 'react';
import CommentBlock from './CommentBlock';

const Comment = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentBlock key={index} comment={comment} suffix='end' />
      ))}
    </div>
  );
};

export default Comment;
