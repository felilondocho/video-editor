import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClipForm from './ClipForm.component';
import { editClip, setCurrentClip, removeCurrentClip } from '../../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ editClip, setCurrentClip, removeCurrentClip }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(ClipForm));
