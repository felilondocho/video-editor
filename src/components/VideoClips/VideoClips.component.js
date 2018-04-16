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
    const { addClip, clips } = this.props;
    const id = clips.length > 0 ? clips[clips.length - 1].id + 1 : 1;
    const clipName = `clip ${id}`;
    const endTime = 0;
    const startTime = 0;
    addClip(clips, id, clipName, startTime, endTime);
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
  clips: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoClips;
