import React from 'react';
import PropTypes from 'prop-types';
import Clip from '../Clip';
import styles from './VideoClips.scss';

class VideoClips extends React.Component {
  constructor(props) {
    super(props);
    this.addTheClip = this.addTheClip.bind(this);
  }
  addTheClip() {
    const { addClip, videoDuration, clips } = this.props;
    const clipName = `clip ${clips.length + 1}`;
    const endTime = Math.random() * videoDuration;
    const startTime = Math.random() * endTime;
    addClip(clips, clipName, startTime, endTime);
  }
  render() {
    const { clips } = this.props;
    return (
      <div className={styles.videoClips}>
        <div className={styles.clipsTop}>
          <h3 className={styles.clipsTitle}>Video Clips</h3>
          <button
            className={styles.addButton}
            onClick={this.addTheClip}
          >
            <img src="./assets/plus.svg" alt="alt" />
          </button>
        </div>
        <div className={styles.clipsList}>
          {clips.map((clip, i) => <Clip key={i} clipElements={clip} />)}
        </div>
      </div>
    );
  }
}

VideoClips.propTypes = {
  addClip: PropTypes.func.isRequired,
  videoDuration: PropTypes.number.isRequired,
  clips: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoClips;
