import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import './Item.css';
import { Draggable } from 'react-beautiful-dnd';
import TenorButton from '../TenorButton';
import Comments from '../Comments/Comments';
import OutlinedMultiInput from '../OutlinedMultiInput/OutlinedMultiInput';

const Item = ({
  text,
  bgColor,
  isVotable,
  voteCount,
  upVote,
  comments,
  addComment,
  columnId,
  itemId,
  dndIndex,
  boardId,
  deleteItem,
}) => {
  const [displayComments, setDisplayComments] = useState(false);

  const handleOnClickAddComment = commentInput => {
    return addComment({ boardId, columnId, itemId, text: commentInput });
  };

  return (
    <>
      <Draggable draggableId={itemId.toString()} index={dndIndex}>
        {provided => (
          <Grid
            item
            xs={12}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            <div style={{ background: bgColor }} className="item-container">
              <p className="item-text">{text}</p>
              <Grid item container direction="row-reverse">
                {isVotable && (
                  <IconButton
                    className="icon-button"
                    onClick={() => upVote({ columnId, itemId, boardId })}
                    aria-label="upvote"
                  >
                    <ThumbUpIcon />
                    <div>{voteCount}</div>
                  </IconButton>
                )}
                <IconButton
                  className="icon-button"
                  onClick={() => setDisplayComments(!displayComments)}
                  aria-label="comment"
                >
                  <CommentIcon />
                  <div>{comments.length}</div>
                </IconButton>
                <TenorButton
                  columnId={columnId}
                  itemId={itemId}
                  boardId={boardId}
                  className="icon-button"
                />
                <IconButton
                  className="icon-button"
                  onClick={() => deleteItem({ columnId, itemId, boardId })}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>

              {displayComments && (
                <>
                  <OutlinedMultiInput onClick={handleOnClickAddComment} />
                  <Comments comments={comments} />
                </>
              )}
            </div>
          </Grid>
        )}
      </Draggable>
    </>
  );
};
export default Item;
