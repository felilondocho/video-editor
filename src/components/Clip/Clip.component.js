import React from 'react';
import PropTypes from 'prop-types';

class Clip extends React.Component {
  constructor(props) {
    super(props);
    this.editTheClip = this.editTheClip.bind(this);
    this.setTheCurrentClip = this.setTheCurrentClip.bind(this);
  }
  setTheCurrentClip(clipElements) {
    const { setCurrentClip } = this.props;
    setCurrentClip(clipElements);
  }
  editTheClip(id) {
    const { editClip, clips } = this.props;
    editClip(clips, id, 'test', 1, 2);
  }
  render() {
    const { clipElements } = this.props;
    return (
      <div>
        <p>{clipElements.clipName}</p>
        <button onClick={() => this.editTheClip(clipElements.id)}>EditTest</button>
        <button onClick={() => this.setTheCurrentClip(clipElements)}>SetAsCurrent</button>
      </div>
    );
  }
}

Clip.propTypes = {
  editClip: PropTypes.func.isRequired,
  setCurrentClip: PropTypes.func.isRequired,
  clips: PropTypes.arrayOf(PropTypes.object).isRequired,
  clipElements: PropTypes.shape({
    id: PropTypes.number.isRequired,
    clipName: PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default Clip;
