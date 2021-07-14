import { Grid } from '@material-ui/core';
import React from 'react';
import './Comment.styles.css';

const Comment = ({ comment }) => (
  <Grid item container className="item-comment">
    {comment.gifUrl && <img className="animated-gif" src={comment.gifUrl} alt="...loading" />}
    {comment.text && <div>{comment.text}</div>}
  </Grid>
);

export default Comment;
