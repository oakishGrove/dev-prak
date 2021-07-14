import React from 'react';
import Card from '@material-ui/core/Card';
import { Button, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { v4 as uuid } from 'uuid';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  title: {
    fontSize: 20,
  },
  curDate: {
    marginBottom: 12,
    fontSize: 8,
  },
  item: {
    fontSize: 10,
  },
  detailItem: {
    fontSize: 15,
  },
});

export default function BoardDetails({ boardDetails, isBoardDetailsLoading, closeBoardDetails }) {
  const closeDetailsClick = () => {
    closeBoardDetails();
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary">
          Board ToDo items:
        </Typography>
        {isBoardDetailsLoading && <div>loading...</div>}
        <List>
          {boardDetails.map(item => (
            <ListItem key={uuid()}>
              <ListItemIcon>
                <ThumbUpOutlinedIcon fontSize="small" />
                {item.columnItemVoteCount}
              </ListItemIcon>
              {item.columnItemText}
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Button type="button" onClick={closeDetailsClick}>
        close
      </Button>
    </Card>
  );
}
