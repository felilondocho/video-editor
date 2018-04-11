import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoClips from './VideoClips.component';
import { addClip } from '../../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addClip }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(VideoClips));
