import React from 'react';
import PropTypes from 'prop-types';
import Clip from '../Clip';
import styles from './VideoClips.scss';

class VideoClips extends React.Component {
  constructor(props) {
    super(props);
    this.addTheClip = this.addTheClip.bind(this);
  }

  setTheCurrentClip(id) {
    const { setCurrentClip } = this.props;
    setCurrentClip(id);
  }

  addTheClip() {
    const { addClip, clips } = this.props;
    const id = clips.length > 0 ? clips[clips.length - 1].id + 1 : 1;
    const clipName = `clip ${id}`;
    const endTime = '';
    const startTime = '';
    addClip({
      id, clipName, startTime, endTime,
    });
  }

  removeTheClips(id) {
    const { removeClip } = this.props;
    removeClip(id);
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
          {clips.map(clip => (
            <Clip
              key={clip.id}
              clipElements={clip}
              edit={() => this.setTheCurrentClip(clip.id)}
              remove={() => this.removeTheClips(clip.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

VideoClips.propTypes = {
  addClip: PropTypes.func.isRequired,
  clips: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentClip: PropTypes.func.isRequired,
  removeClip: PropTypes.func.isRequired,
};

export default VideoClips;
