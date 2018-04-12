import React from 'react';
import PropTypes from 'prop-types';
import VideoControlButton from '../VideoControlButton';
import testvideo from '../../../assets/video.mp4';
import styles from './VideoPlayer.scss';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.forwardVideo = this.forwardVideo.bind(this);
    this.rewindVideo = this.rewindVideo.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
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

  playOrPause() {
    const { togglePlay, isPlaying } = this.props;
    if (!isPlaying) {
      this.videoRef.current.play();
      togglePlay(true);
    } else {
      this.videoRef.current.pause();
      togglePlay(false);
    }
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

  remainingTime(currentTime) {
    const { videoDuration } = this.props;
    const timeDif = Math.round(videoDuration - currentTime);
    const minutes = timeDif / 60 > 9 ? (
      Math.round(timeDif / 60)
    ) : (
      `0${Math.round(timeDif / 60)}`
    );
    const seconds = timeDif > 9 ? (
      Math.round(timeDif)
    ) : (
      `0${Math.round(timeDif)}`
    );
    return `${minutes}:${seconds}`;
  }

  currentTimeDisplay(videoTime) {
    const { videoDuration } = this.props;
    const minutes = Math.floor(videoTime / 60) > 9 ? (
      Math.floor(videoTime / 60)
    ) : (
      `0${Math.floor(videoTime / 60)}`
    );
    const seconds = Math.round(videoTime) > 9 ? (
      Math.round(videoTime)
    ) : (
      `0${Math.round(videoTime)}`
    );
    return `${minutes}:${seconds}`;
  }

  render() {
    const { isPlaying, videoTime, addVideoDuration } = this.props;
    return (
      <div className={styles.videoPlayer}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            ref={this.videoRef}
            onTimeUpdate={this.updateVideoTime}
            onLoadedMetadata={e => addVideoDuration(Math.round(e.currentTarget.duration))}
          >
            <track kind="captions" />
            <source src={testvideo} type="video/mp4" />
          </video>
        </div>
        <input
          className={styles.seekBar}
          ref={this.seekBarRef}
          type="range"
          onChange={this.updateVideoTime}
        />
        <div className={styles.videoControls}>
          <p>{this.currentTimeDisplay(videoTime)}</p>
          <VideoControlButton
            className="backButton"
            icon="./assets/reverse.svg"
            onClick={this.rewindVideo}
          />
          {!isPlaying ?
            <VideoControlButton
              className="playButton"
              icon="./assets/play.svg"
              onClick={this.playOrPause}
            />
            :
            <VideoControlButton
              className="pauseButton"
              icon="./assets/pause.svg"
              onClick={this.playOrPause}
            />
          }
          <VideoControlButton
            className="forwardButton"
            icon="./assets/forward.svg"
            onClick={this.forwardVideo}
          />
          <p>{this.remainingTime(videoTime)}</p>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  videoTimeChange: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  videoTime: PropTypes.number.isRequired,
  addVideoDuration: PropTypes.func.isRequired,
  videoDuration: PropTypes.number.isRequired,
};

export default VideoPlayer;
