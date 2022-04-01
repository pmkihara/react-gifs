import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.ids.map(gif => <Gif id={gif.id} key={gif.id} selectFunction={props.selectFunction} />)}
    </div>
  );
};

export default GifList;
