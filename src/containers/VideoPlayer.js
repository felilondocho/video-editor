import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import { playVideo, pauseVideo, advanceVideo, backVideo } from '../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  playVideo: () => dispatch(playVideo()),
  pauseVideo: () => dispatch(pauseVideo()),
  advanceVideo: () => dispatch(advanceVideo()),
  backVideo: () => dispatch(backVideo()),
});

export default (connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));