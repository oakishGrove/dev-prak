import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const CustomizedInputButton = ({ Icon, placeHolder, arialLabel, buttonClick }) => {
  const [searchInput, setSearchInput] = useState('');
  const classes = useStyles();

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      buttonClick(searchInput);
    }
  };

  const handleOnClick = e => {
    e.preventDefault();
    buttonClick(searchInput);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeHolder}
        inputProps={{ 'aria-label': arialLabel }}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={searchInput}
      />
      <IconButton
        type="button"
        className={classes.iconButton}
        aria-label="search"
        onClick={handleOnClick}
      >
        <Icon />
      </IconButton>
    </Paper>
  );
};

export default CustomizedInputButton;
