import { GridList, GridListTile, IconButton } from '@material-ui/core';
import { HighlightOffRounded, Search } from '@material-ui/icons';
import React from 'react';
import CustomizedInputButton from '../CustomizedInputButton/CustomizedInputButton';
import CircularLoader from '../CircularLoader';
import './TenorGifList.styles.css';

const TenorGifList = ({ gifLinks, searchForGif, onGifSelect, close }) => {
  const handleOnClick = gif => {
    onGifSelect(gif.url);
    close();
  };

  let usedStyle = 'grid-list';
  if (!gifLinks) {
    usedStyle = 'grid-list-circle';
  }

  return (
    <>
      <div className="separate-exit">
        <div>
          <CustomizedInputButton
            Icon={Search}
            placeHolder="enter gif keyword"
            arialLabel="gif-search"
            buttonClick={searchForGif}
          />
        </div>

        <IconButton type="button" onClick={close}>
          <HighlightOffRounded />
        </IconButton>
      </div>

      <GridList className={usedStyle} cols={0}>
        {gifLinks ? (
          gifLinks.map(gif => (
            <GridListTile
              onClick={() => handleOnClick(gif)}
              style={{ height: '160px' }}
              key={gif.id}
            >
              <img className="animated-gif" src={gif.url} alt="...loading" key={gif.id} />
            </GridListTile>
          ))
        ) : (
          <CircularLoader />
        )}
      </GridList>
    </>
  );
};
export default TenorGifList;
