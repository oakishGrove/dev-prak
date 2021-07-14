import React, { useState } from 'react';
import { IconButton, OutlinedInput, InputAdornment } from '@material-ui/core';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import './ColumnItemInput.css';
import { v4 as uuid } from 'uuid';

export default function ColumnItemInput({ addItem, removeColumnInput, columnId, index, boardId }) {
  const [input, setInput] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = e => {
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const handleAddItem = () => {
    addItem({
      item: {
        columnId,
        itemId: uuid(),
        boardId,
        text: input,
        voteCount: 0,
        comments: [],
      },
      index,
    });
  };


  const handleRemoveColumnInput = () => removeColumnInput({ columnId, index });

  return (
    <OutlinedInput
      className="input-container"
      fullWidth
      variant="outlined"
      onChange={handleInputChange}
      value={input}
      startAdornment={
        <InputAdornment position="start">
          <IconButton onClick={handleAddItem} disabled={disabled}>
            <AddBoxRoundedIcon color="primary" />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={handleRemoveColumnInput}>
            <DeleteOutlineRoundedIcon color="secondary" />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
