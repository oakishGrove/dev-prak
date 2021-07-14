import React, { useEffect } from 'react';
import { Container, Typography, Button, Box } from '@material-ui/core';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';
import BoardDetails from '../../components/BoardDetails';
import BoardListItem from '../../components/BoardListItem';
import CircularLoader from '../../components/CircularLoader';
import AddBoard from '../../components/AddBoard';

export default function Boards({
  boards,
  isLoading,
  fetchBoards,
  initiateBoardDetailsFetch,
  isBoardDetailsShowing,
}) {
  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const handleClick = boardId => {
    initiateBoardDetailsFetch(boardId);
  };

  return (
    <AuthenticatedPageLayout>
      <div className="board-list">
        <Container maxWidth="md">
          <Typography variant="h3" aling="center" color="textPrimary">
            Boards list
          </Typography>

          {isLoading ? (
            <CircularLoader />
          ) : (
            <Box display="flex">
              <Box display="flex" flexWrap="wrap" width="100%" alignContent="flex-start" p={1}>
                <Box p={1} >
                  <AddBoard />
                </Box>

                {boards.map(boardListItem => (
                  <Box p={1} flexGrow={4} key={boardListItem.id} >
                    <BoardListItem key={boardListItem.id} boardItem={boardListItem} />
                    <Button type="button" onClick={() => handleClick(boardListItem.boardId)}>
                      Show details
                    </Button>
                  </Box>
                ))}
              </Box>

              <Box p={2} flexShrink={0}>
                {isBoardDetailsShowing && <BoardDetails />}
              </Box>
            </Box>
          )}
        </Container>
      </div>
    </AuthenticatedPageLayout>
  );
}
