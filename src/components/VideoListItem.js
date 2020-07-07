import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect}) => {  
  const imageUrl = video.snippet.thumbnails.default.url;
  let title = escape(video.snippet.title);  
  title = unescape(title);

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)} style={{'cursor': 'pointer'}}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{unescape(video.snippet.title)}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;