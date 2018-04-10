import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoPlayer from './VideoPlayer.render';
import { playVideo, pauseVideo, videoTimeChange } from '../../../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    playVideo, pauseVideo, videoTimeChange,
  }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));
