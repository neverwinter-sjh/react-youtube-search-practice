import React, { Component } from 'react';
import { htmlDecode } from '../utils/String';

const VideoListItem = ({video, onVideoSelect}) => {  
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = htmlDecode(video.snippet.title);  

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)} style={{'cursor': 'pointer'}}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;