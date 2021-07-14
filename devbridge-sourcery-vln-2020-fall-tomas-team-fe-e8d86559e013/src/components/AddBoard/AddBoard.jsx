import React, { useState } from 'react';
import {
  IconButton,
  Card,
  Button,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  iconSize: {
    fontSize: 50,
  },
  iconAlignment: {
    textAlign: 'center',
  },
});

const AddBoard = ({ createBoard, boardCreated, boardId }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState('');
  const handleNameChange = e => setTitle(e.target.value);

  const handleCreateBoard = () => createBoard({ title });

  const classes = useStyles();

  if (boardCreated) {
    return <Redirect to={`/boards/${boardId}`} push />;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <div className={classes.iconAlignment}>
            <IconButton onClick={handleClickOpen} style={{ backgroundColor: 'transparent' }}>
              <AddCircleOutlineOutlinedIcon color="primary" className={classes.iconSize} />
            </IconButton>
          </div>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Board</DialogTitle>
        <DialogContent>
          <DialogContentText>In order to create a board you need to enter a name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Board Name"
            fullWidth
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateBoard} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddBoard;
