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
    console.log(this.props)
    const { currentClip } = this.props;
    if (Object.keys(currentClip).length !== 0 &&
    (currentClip.startTime !== prevProps.currentClip.startTime)) {
      this.videoRef.current.currentTime = currentClip.startTime;
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
    // Seekbar change
    if (event && event.target.value) {
      video.currentTime = video.duration * (event.target.value / 100);
    }
    this.setSeekBar(video.duration, video.currentTime);
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
    const {
      isPlaying, videoTime, addVideoDuration, currentClip, togglePlay, clipSelected,
      videoDuration,
    } = this.props;

    // if (this.videoRef.current) {
    //   if (this.videoRef.current.currentTime !== videoTime) {
    //     this.videoRef.current.currentTime = videoTime;
    //   }
    //   if (this.videoRef.current.currentTime >= currentClip.endTime && clipSelected) {
    //     this.videoRef.current.pause();
    //     togglePlay(false);
    //   }
    // }
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
          <p>{currentTimeDisplay(videoTime)}</p>
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
          <p>{remainingTime(videoTime, videoDuration)}</p>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  // videoTimeChange: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  // videoTime: PropTypes.number.isRequired,
  addVideoDuration: PropTypes.func.isRequired,
  videoDuration: PropTypes.number.isRequired,
  currentClip: PropTypes.shape({
    id: PropTypes.number,
    clipName: PropTypes.string,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
  }).isRequired,
  clipSelected: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  clipSelected: false,
};

export default VideoPlayer;
