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
  render() {
    const { clipElements } = this.props;
    return (
      <div className={styles.clip}>
        <p>{clipElements.clipName}</p>
        <button onClick={() => this.setTheCurrentClip(clipElements)}>Edit</button>
      </div>
    );
  }
}

Clip.propTypes = {
  setCurrentClip: PropTypes.func.isRequired,
  // clips: PropTypes.arrayOf(PropTypes.object).isRequired,
  clipElements: PropTypes.shape({
    id: PropTypes.number.isRequired,
    clipName: PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default Clip;
