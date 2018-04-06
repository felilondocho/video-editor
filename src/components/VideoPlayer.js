import React from 'react';
import PropTypes from 'prop-types';
import VideoControlButton from '../components/VideoControlButton';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playTheVideo = this.playTheVideo.bind(this);
  }

  playTheVideo() {
    const { playVideo } = this.props;
    playVideo();
  }

  render() {
    const {
      backVideo, pauseVideo, advanceVideo,
    } = this.props;
    return (
      <div className="videoPlayer">
        <video>
          <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
        </video>
        <VideoControlButton className="backButton" insideText="<<" onClick={backVideo} />
        <VideoControlButton className="playButton" insideText="Play" onClick={this.playTheVideo} />
        <VideoControlButton className="pauseButton" insideText="Pause" onClick={pauseVideo} />
        <VideoControlButton className="forwardButton" insideText=">>" onClick={advanceVideo} />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  backVideo: PropTypes.func.isRequired,
  playVideo: PropTypes.func.isRequired,
  pauseVideo: PropTypes.func.isRequired,
  advanceVideo: PropTypes.func.isRequired,
};

export default VideoPlayer;
