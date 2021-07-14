import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';
import Columns from '../../components/Columns';

export default function Board({ columns, title, fetchBoard, match, loadWsRoom }) {
  useEffect(() => {
    loadWsRoom(match.params.id);
    fetchBoard({ id: match.params.id });
  }, [fetchBoard, match, loadWsRoom]);

  return (
    <>
      <AuthenticatedPageLayout>
        <div>
          <Typography variant="h3" align="center" color="textPrimary">
            {title}
          </Typography>
        </div>
        <Columns columns={columns} />
      </AuthenticatedPageLayout>
    </>
  );
}
