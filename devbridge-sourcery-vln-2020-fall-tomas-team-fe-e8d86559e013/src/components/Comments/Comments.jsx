import React from 'react';
import Comment from '../Comment/Comment';

const Comments = ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </>
);

export default Comments;
