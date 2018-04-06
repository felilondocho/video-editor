import React from 'react';
import PropTypes from 'prop-types';

const VideoControlButton = ({ className, insideText, onClick }) => (
  <button className={className} onClick={onClick}>{insideText}</button>
);

VideoControlButton.propTypes = {
  className: PropTypes.string.isRequired,
  insideText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoControlButton;
