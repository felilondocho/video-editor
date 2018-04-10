import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoPlayer from '../components/VideoPlayer';
import { playVideo, pauseVideo, advanceVideo, backVideo, videoTimeChange } from '../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    playVideo, pauseVideo, advanceVideo, backVideo, videoTimeChange,
  }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));
