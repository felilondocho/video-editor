import React from 'react';
import PropTypes from 'prop-types';

const VideoControls = ({ backVideo }) => (
  <div className="videoControls">
    <input type="range" className="seekBar" value="0" />
    <button onClick={backVideo} type="button" className="backwardsButton">
      back
    </button>
    <button type="button" className="forwardButton">
      advance
    </button>
  </div>
);

VideoControls.propTypes = {
  backVideo: PropTypes.func.isRequired,
};

export default VideoControls;
