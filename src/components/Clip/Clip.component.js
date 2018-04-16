import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clip.scss';

class Clip extends React.Component {
  constructor(props) {
    super(props);
    this.setTheCurrentClip = this.setTheCurrentClip.bind(this);
  }
  setTheCurrentClip(clipElements) {
    const { setCurrentClip } = this.props;
    setCurrentClip(clipElements);
  }
  removeTheClips(clipElements, clips) {
    const { removeClip } = this.props;
    removeClip(clips, clipElements.id);
  }
  render() {
    const { clipElements, clips } = this.props;
    return (
      <div className={styles.clip}>
        <p>{clipElements.clipName}</p>
        <button onClick={() => this.setTheCurrentClip(clipElements)}>
          <img src="./assets/edit.svg" alt="edit" />
        </button>
        <button onClick={() => this.removeTheClips(clipElements, clips)}>
          <img src="./assets/cancel.svg" alt="cancel" />
        </button>
      </div>
    );
  }
}

Clip.propTypes = {
  setCurrentClip: PropTypes.func.isRequired,
  clipElements: PropTypes.shape({
    id: PropTypes.number.isRequired,
    clipName: PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
  removeClip: PropTypes.func.isRequired,
  clips: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Clip;
