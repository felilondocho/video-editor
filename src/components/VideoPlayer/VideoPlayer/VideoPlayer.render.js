import React from 'react';
import PropTypes from 'prop-types';
import VideoControlButton from '../VideoControlButton';
import testvideo from '../../../assets/video.mp4';
import styles from './VideoPlayer.styles';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playTheVideo = this.playTheVideo.bind(this);
    this.pauseTheVideo = this.pauseTheVideo.bind(this);
    this.forwardVideo = this.forwardVideo.bind(this);
    this.rewindVideo = this.rewindVideo.bind(this);
    this.updateVideoTime = this.updateVideoTime.bind(this);
    this.videoRef = React.createRef();
    this.seekBarRef = React.createRef();
  }

  componentDidMount() {
    this.seekBarRef.current.value = 0;
  }

  setSeekBar(duration, currentTime) {
    const seekBar = this.seekBarRef.current;
    seekBar.value = (100 / duration) * currentTime;
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

  updateVideoTime(event) {
    const { videoTimeChange } = this.props;
    const video = this.videoRef.current;
    if (event && event.target.value) {
      video.currentTime = video.duration * (event.target.value / 100);
    }
    this.setSeekBar(video.duration, video.currentTime);
    videoTimeChange(video.currentTime);
  }

  forwardVideo() {
    const video = this.videoRef.current;
    video.currentTime += (video.duration * 0.1);
  }

  rewindVideo() {
    const video = this.videoRef.current;
    video.currentTime -= (video.duration * 0.1);
  }

  render() {
    return (
      <div className="">
        <video className="" ref={this.videoRef} onTimeUpdate={this.updateVideoTime}>
          <source src={testvideo} type="video/mp4" />
        </video>
        <input className="" ref={this.seekBarRef} type="range" onChange={this.updateVideoTime} />
        <div className="">
          <VideoControlButton className="backButton" insideText="<<" onClick={this.rewindVideo} />
          <VideoControlButton className="playButton" insideText="Play" onClick={this.playTheVideo} />
          <VideoControlButton className="pauseButton" insideText="Pause" onClick={this.pauseTheVideo} />
          <VideoControlButton className="forwardButton" insideText=">>" onClick={this.forwardVideo} />
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  playVideo: PropTypes.func.isRequired,
  pauseVideo: PropTypes.func.isRequired,
  videoTimeChange: PropTypes.func.isRequired,
};

export default VideoPlayer;
