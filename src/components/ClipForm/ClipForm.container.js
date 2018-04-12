import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClipForm from './ClipForm.component';
import { editClip } from '../../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ editClip }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(ClipForm));
