import React, { useState } from 'react';
import GifIcon from '@material-ui/icons/Gif';
import IconButton from '@material-ui/core/IconButton';
import TenorModal from '../TenorModal';

const TenorButton = ({ boardId, columnId, itemId, selectGif, fetchTrending, className }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    fetchTrending();
  };

  const onGifSelect = gifUrl => {
    selectGif({ gifUrl, columnId, itemId, boardId });
  };

  return (
    <>
      <IconButton onClick={handleClick} className={className}>
        <GifIcon />
      </IconButton>
      {open && <TenorModal open={open} onClose={() => setOpen(false)} onGifSelect={onGifSelect} />}
    </>
  );
};

export default TenorButton;
