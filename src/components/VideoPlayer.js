import React from 'react';
import Video from './Video';
import VideoControls from './VideoControls';

const VideoPlayer = () => (
  <div className="videoPlayer">
    <Video />
    <VideoControls />
  </div>
);

export default VideoPlayer;
