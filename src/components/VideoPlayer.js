import React from 'react';
import PropTypes from 'prop-types';
import VideoControlButton from '../components/VideoControlButton';
import testvideo from '../assets/video.mp4';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playTheVideo = this.playTheVideo.bind(this);
    this.pauseTheVideo = this.pauseTheVideo.bind(this);
    // this.handleSeekBarChange = this.handleSeekBarChange.bind(this);
    this.updateVideoTime = this.updateVideoTime.bind(this);
    this.videoRef = React.createRef();
    this.seekBarRef = React.createRef();
  }

  playTheVideo() {
    const { playVideo } = this.props;
    this.videoRef.current.play();
    playVideo();
  }

  pauseTheVideo() {
    const { pauseVideo } = this.props;
    this.videoRef.current.pause();
    pauseVideo();
  }

  // handleSeekBarChange(event) {
  //   const { seekBarChange } = this.props;
  //   const video = this.videoRef.current;
  //   const seekBar = this.seekBarRef.current;
  //   const time = video.duration * (event.target.value / 100);
  //   video.currentTime = time;
  //   seekBar.value = (100 / video.duration) * video.currentTime;
  //   seekBarChange(time);
  // }

  updateVideoTime(event) {
    event.target.value ?
      
    : null;
    // const { videoTimeChange } = this.props;
    // const video = this.videoRef.current;
    // const seekBar = this.seekBarRef.current;
    // const time = video.duration * (event.target.value / 100);
    // video.currentTime = time;
    // seekBar.value = (100 / video.duration) * video.currentTime;
    // videoTimeChange(video.currentTime);
  }

  render() {
    const {
      backVideo, advanceVideo,
    } = this.props;
    return (
      <div className="videoPlayer">
        <video ref={this.videoRef} onTimeUpdate={this.updateVideoTime}>
          <source src={testvideo} type="video/mp4" />
        </video>
        <input ref={this.seekBarRef} type="range" onChange={this.updateVideoTime} />
        <VideoControlButton className="backButton" insideText="<<" onClick={backVideo} />
        <VideoControlButton className="playButton" insideText="Play" onClick={this.playTheVideo} />
        <VideoControlButton className="pauseButton" insideText="Pause" onClick={this.pauseTheVideo} />
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
  seekBarChange: PropTypes.func.isRequired,
  videoTimeChange: PropTypes.func.isRequired,
};

export default VideoPlayer;
