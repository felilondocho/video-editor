import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoPlayer from './VideoPlayer.render';
import { togglePlay, videoTimeChange, addVideoDuration } from '../../../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ togglePlay, videoTimeChange, addVideoDuration }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));
