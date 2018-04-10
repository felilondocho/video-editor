import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoControlButton.scss';

const VideoControlButton = ({ className, icon, onClick }) => (
  <button className={className} onClick={onClick}>
    <img src={icon} alt="alt" />
  </button>
);

VideoControlButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default VideoControlButton;
