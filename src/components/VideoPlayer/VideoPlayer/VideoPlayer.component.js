import React from 'react';
import PropTypes from 'prop-types';
import VideoControlButton from '../VideoControlButton';
import testvideo from '../../../assets/video.mp4';
import styles from './VideoPlayer.scss';
import { remainingTime, currentTimeDisplay } from '../../../lib/timeHelper';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.forwardVideo = this.forwardVideo.bind(this);
    this.rewindVideo = this.rewindVideo.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.updateVideoTime = this.updateVideoTime.bind(this);
    this.videoRef = React.createRef();
    this.state = ({ seekBarValue: 0 });
  }

  componentDidUpdate(prevProps) {
    const { currentClip, togglePlay } = this.props;
    const video = this.videoRef.current;
    if (Object.keys(currentClip).length !== 0 &&
    (currentClip.startTime !== prevProps.currentClip.startTime)) {
      video.currentTime = currentClip.startTime;
    }
    if (video.currentTime >= currentClip.endTime) {
      video.pause();
      togglePlay(false);
    }
    if (video.currentTime === video.duration) {
      video.currentTime = 0;
      video.play();
    }
  }

  setSeekBar(duration, currentTime) {
    this.setState({ seekBarValue: (100 / duration) * currentTime });
  }

  playOrPause() {
    const { togglePlay, isPlaying } = this.props;
    const video = this.videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    togglePlay(!isPlaying);
  }

  updateVideoTime(event) {
    const video = this.videoRef.current;
    if (event && event.target.value) { // Seekbar change
      video.currentTime = video.duration * (event.target.value / 100);
    }
    this.setSeekBar(video.duration, video.currentTime);
  }

  forwardVideo() {
    const video = this.videoRef.current;
    video.playbackRate = (video.playbackRate + 0.1).toFixed(1);
  }

  rewindVideo() {
    const video = this.videoRef.current;
    if (video.playbackRate > 0.1) {
      video.playbackRate = (video.playbackRate - 0.1).toFixed(1);
    }
  }

  render() {
    const {
      isPlaying, addVideoDuration,
      videoDuration,
    } = this.props;
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
          value={this.state.seekBarValue}
          type="range"
          onChange={this.updateVideoTime}
        />
        <div className={styles.videoControls}>
          {this.videoRef.current ?
            <p>{currentTimeDisplay(this.videoRef.current.currentTime)}</p>
            : null
          }
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
          {this.videoRef.current ?
            <p>{remainingTime(this.videoRef.current.currentTime, videoDuration)}</p>
            : null
          }
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  addVideoDuration: PropTypes.func.isRequired,
  videoDuration: PropTypes.number.isRequired,
  currentClip: PropTypes.shape({
    id: PropTypes.number,
    clipName: PropTypes.string,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
  }).isRequired,
};

export default VideoPlayer;
