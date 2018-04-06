import React from 'react';
import PropTypes from 'prop-types';

const VideoControls = ({
  backVideo, playVideo, pauseVideo, advanceVideo,
}) => (
  <div className="videoControls">
    <input type="range" className="seekBar" />
    <button onClick={backVideo} type="button" className="backButton">
      back
    </button>
    <button onClick={playVideo} type="button" className="playButton">
      play
    </button>
    <button onClick={pauseVideo} type="button" className="pauseButton">
      pause
    </button>
    <button onClick={advanceVideo} type="button" className="forwardButton">
      advance
    </button>
  </div>
);

export default VideoControls;
