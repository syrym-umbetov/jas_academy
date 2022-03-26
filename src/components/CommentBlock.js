import React from 'react';
// const current = new Date();

// const date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

function CommentTop({ comment }) {
  return (
    <div className='top'>
      <img className='avatar' src={comment.author.avatarUrl} alt='hello' />
      <span className='name'>{comment.author.name}</span>
      <span className='date'>{comment.created}</span>
    </div>
  );
}

const CommentBlock = ({ comment, depth = 0 }) => {
  return (
    <>
      <div className='comment_block' style={{ marginLeft: depth * 30 + 'px' }}>
        <CommentTop comment={comment} />
        <div className='text'>{comment.text}</div>
      </div>
      {comment.answers &&
        comment.answers.map((item) => (
          <CommentBlock comment={item} depth={depth + 1} />
        ))}
    </>
  );
};

export default CommentBlock;
