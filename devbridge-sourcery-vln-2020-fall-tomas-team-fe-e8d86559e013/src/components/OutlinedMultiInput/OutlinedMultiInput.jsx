import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './OutlinedMultiInput.styles.css';

const OutlinedMultiInput = ({ onClick }) => {
  const [commentInput, setCommentInput] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = event => {
    setCommentInput(event.target.value);
    if (event.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleOnClick = () => {
    onClick(commentInput);
    setCommentInput('');
    setDisabled(true);
  };

  return (
    <Grid className="outlined-multi-input">
      <TextField
        value={commentInput}
        onChange={handleChange}
        id="outlined-basic"
        label="Enter comment"
        multiline
        variant="filled"
        style={{ width: '100%' }}
      />
      <Button type="button" onClick={handleOnClick} disabled={disabled}>
        Add
      </Button>
    </Grid>
  );
};

export default OutlinedMultiInput;
