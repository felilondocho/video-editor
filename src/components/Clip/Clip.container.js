import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clip from './Clip.component';
import { editClip, setCurrentClip, removeClip } from '../../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ editClip, setCurrentClip, removeClip }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(Clip));
