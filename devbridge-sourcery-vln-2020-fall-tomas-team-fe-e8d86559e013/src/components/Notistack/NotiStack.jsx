import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';

const ERROR_DEFAULT = 'ERROR_DEFAULT';
const CUSTOM_OPTIONS = 'CUSTOM';

const NotiStack = ({ queue, clearNotification }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = key => <Button onClick={() => closeSnackbar(key)}>dismiss</Button>;

  const errorTemp = {
    variant: 'warning',
    autoHideDuration: 8888,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    action,
  };

  useEffect(() => {
    if (queue.length !== 0) {
      queue.forEach(elem => {
        const { text, mode = ERROR_DEFAULT, userOptions } = elem;
        let options;
        switch (mode) {
          case ERROR_DEFAULT:
            options = errorTemp;
            break;
          case CUSTOM_OPTIONS:
            options = userOptions;
            break;
          default:
            options = {};
        }
        enqueueSnackbar(text, options);
        clearNotification(elem.id);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue]);
  return null;
};

export default NotiStack;
