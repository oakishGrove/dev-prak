import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
});

export default function BoardListItem({ boardItem }) {
  const { boardId, boardName, boardDateCreated } = boardItem;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link to={`/boards/${boardId}`}>
          <Typography className={classes.title} color="textPrimary">
            {boardName}
          </Typography>
        </Link>
        <Typography className={classes.curDate} color="textSecondary">
          {boardDateCreated}
        </Typography>

        {/* comment out when we will get columns in return from GET http://localhost:8080/boards */}
        {/* {columns.map(column => (
          <Typography className={classes.item} style={{ color: column.color }}>
            {column.name}: {column.quantity}
          </Typography>
        ))} */}
      </CardContent>
    </Card>
  );
}
