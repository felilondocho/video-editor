import React from 'react';
import PropTypes from 'prop-types';
import Clip from '../Clip';

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
      <div>
        <button onClick={this.addTheClip}>+</button>
        {/* <button onClick={console.log(clips)}>log clip value</button> */}
        {clips.map((clip, i) => <Clip key={i} clipElements={clip} />)}
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
